import { makeObservable, observable, action } from 'mobx';
import { createContext } from "react";
import { createLead } from '../services/leads-service';
import { Lead } from '../stores/lead-store';

export interface CreateLeadResponse {
    message: string,
    newLead?: Lead
}

class NewLeadFormStore {
    constructor() {
        makeObservable(this)
    }

    @observable
    isFormOpen: boolean = false;

    @observable
    name: string = '';

    @observable
    address: string = '';

    @observable
    isClient: boolean = false;

    @observable
    lat: number = 0;

    @observable
    lng: number = 0;

    @action
    async createNewLead(): Promise<CreateLeadResponse> {
        if(this.name.length < 5)
            return {
                message: 'Nome deve conter, no mínimo, 5 caracteres.',
                newLead: undefined
            };

        if(this.address.length < 5)
            return {
                message: 'Endereço deve conter, no mínimo, 5 caracteres.',
                newLead: undefined
            };

        try {
            const lead: Lead = {
                name: this.name,
                address: this.address,
                lat: this.lat,
                lng: this.lng,
                isClient: this.isClient
            };

            await createLead(lead);

            return {
                message: 'Lead/Cliente criado com sucesso!',
                newLead: lead
            };
        } catch (err) {
            return {
                message: 'Ocorreu um erro na criação do Lead/Cliente. Por favor, tente novamente.',
                newLead: undefined
            };
        }
    }

    @action
    openForm(lat: number, lng: number) {
        this.isFormOpen = true;
        this.setNewLocationLatLng(lat, lng);
    }

    @action
    closeForm() {
        this.isFormOpen = false;
        this.resetFields();
    }

    @action
    changeName(name: string) {
        this.name = name;
    }

    @action
    changeAddress(address: string) {
        this.address = address;
    }

    @action
    changeIsClient(isClient: boolean) {
        this.isClient = isClient;
    }

    @action
    setNewLocationLatLng(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }

    @action
    resetFields() {
        this.name = '';
        this.address = '';
        this.isClient = false;
        this.lat = 0;
        this.lng = 0;
    }
}

const store = new NewLeadFormStore();
export const NewLeadFormStoreCtx = createContext(store);