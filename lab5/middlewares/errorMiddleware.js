const UniversalErrorHandler = require('../exceptions/UniversalErrorHandler.js')

module.exports = (err, req, res, next) => {
    console.log(err);
    if (err instanceof UniversalErrorHandler){
        return res.status(err.status).json({
            message: err.message,
            errors: err.errors
        });
    }
    return res.status(500).json({
        message: 'Internal server error'
    });
}