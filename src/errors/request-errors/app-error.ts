class AppError extends Error {
    constructor(message = 'Internal Error') {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export default AppError;