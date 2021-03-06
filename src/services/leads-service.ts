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
        const response = await axios.post('/leads', body);
;        return response.data.newLead;
    } catch (err) {
        const CustomError = ErrorHandler(err.status);

        throw new CustomError();
    }
};

export const deleteLeadById = async (leadId: string) => {

    try {
        await axios.delete(`/leads/${leadId}`);
    } catch (err) {
        const CustomError = ErrorHandler(err.status);

        throw new CustomError();
    }
};

export const updateLead = async (body: Lead) => {

    try {
        const response = await axios.patch(`/leads/${body.id}`, body);
;        return response.data.lead;
    } catch (err) {
        const CustomError = ErrorHandler(err.status);

        throw new CustomError();
    }
};