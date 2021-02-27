import axios from 'axios';
import ErrorHandler from '../errors/request-errors/error-handler';
import { Lead } from '../stores/lead-store';

export const getAllLeads = async () => {

    try {
        const response = await axios.get(`/leads`);

        return response.data.leads;
    } catch (err) {
        const CustomError = ErrorHandler(err.status);

        throw new CustomError();
    }
};


export const createLead = async (body: Lead) => {

    try {
        await axios.post('/leads', body);
    } catch (err) {
        const CustomError = ErrorHandler(err.status);

        throw new CustomError();
    }
};