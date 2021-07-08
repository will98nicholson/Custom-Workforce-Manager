const passport = require( 'passport' );
const db = require( '../models' );
const LocalStrategy = require( 'passport-local' ).Strategy;
console.log(LocalStrategy)
passport.use( new LocalStrategy(
    function ( username, password, done ) {
        console.log("passport auth")
        db.User.findOne( { username: username }, function ( err, user ) {
            console.log( user );
            if ( err ) { return done( err ); }
            if ( !user ) { return done( null, false ); }
            // if (!user.verifyPassword(password)) { return done(null, false); }
            return done( null, user );
        } );
    }
) );

passport.serializeUser( function ( user, done ) {
    done( null, user.id );
} );

passport.deserializeUser( function ( id, done ) {
    db.User.findById( id, function ( err, user ) {
        done( err, user );
    } );
} );

module.exports = passport;
