import AppError from './app-error';
import BadRequestError from './bad-request-error';
import NotFoundError from './not-found-error';
import ServerInternalError from './server-internal-error';

const errorHandler = (status: number) => {
    switch (status) {
        case 400:
            return BadRequestError;
        case 404:
            return NotFoundError;
        case 500:
            return ServerInternalError;
        default:
            return AppError;
    }
};

export default errorHandler;