const path = require('path');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('./middleware/passport');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const routes = require('./routes');




//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

const PORT = process.env.PORT || 3001;

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('cookie-parser')());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 600000 }, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
if (!isProduction) {
    app.use(errorHandler());
}

//Configure Mongoose
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fleetsheets',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
)

mongoose.set('debug', true);

//Error handlers & middlewares
// if (!isProduction) {
//     app.use((err, req, res) => {
//         res.status(err.status || 500);

//         res.json({
//             errors: {
//                 message: err.message,
//                 error: err,
//             },
//         });
//     });
// }

// app.use((err, req, res) => {
//     res.status(err.status || 500);

//     res.json({
//         errors: {
//             message: err.message,
//             error: {},
//         },
//     });
// });
app.use(routes);
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
