

module.exports = class UniversalErrorHandler extends Error {
    status;
    errors;

    constructor(status, message, errors = []){
        super(message);
        this.status = status;
        this.errors = errors;
    }
    
    static BadRequest(message, errors){
        return new UniversalErrorHandler(400, message, errors);
    }
}