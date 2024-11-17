const { StatusCodes } = require('http-status-codes');

// Functional error factory
const createAppError = (
    name = 'AppError', 
    message = 'Something went wrong', 
    explanation = 'Something went wrong', 
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
) => {
    const error = new Error(message);
    error.name = name;
    error.explanation = explanation;
    error.statusCode = statusCode;
    return error;
};

module.exports = createAppError;