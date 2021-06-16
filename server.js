// const path = require( 'path' );
// const express = require( 'express' );
// const logger = require('morgan');
// // const mongoose = require('mongoose');
// const passport = require( ' passport ' );
// const session = require( 'express-session' );
// const cors = require( 'cors' );
// const errorHandler = require( 'errorhandler' );


// //Configure mongoose's promise to global promise
// mongoose.promise = global.Promise;

// //Configure isProduction variable
// const isProduction = process.env.NODE_ENV === 'production';

// const PORT = process.env.PORT || 3000;

// //Initiate our app
// const app = express();

// //Configure our app
// app.use( cors() );
// app.use(logger('dev'));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use( express.static( path.join( __dirname, 'public' ) ) );
// app.use( session( { secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false } ) );

// if ( !isProduction ) {
//     app.use( errorHandler() );
// }

// //Configure Mongoose
// mongoose.connect( 'mongodb://localhost/fleetsheets' );
// mongoose.set( 'debug', true );

// //Error handlers & middlewares
// if ( !isProduction ) {
//     app.use( ( err, req, res ) => {
//         res.status( err.status || 500 );

//         res.json( {
//             errors: {
//                 message: err.message,
//                 error: err,
//             },
//         } );
//     } );
// }

// app.use( ( err, req, res ) => {
//     res.status( err.status || 500 );

//     res.json( {
//         errors: {
//             message: err.message,
//             error: {},
//         },
//     } );
// } );

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
// });
