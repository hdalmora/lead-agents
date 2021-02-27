import axios from 'axios';
import ErrorHandler from '../errors/request-errors/error-handler';

export const getAllLeads = async () => {

    try {
        const response = await axios.get(`/leads`);

        return response.data.leads;
    } catch (err) {
        const CustomError = ErrorHandler(err.status);

        throw new CustomError();
    }
};