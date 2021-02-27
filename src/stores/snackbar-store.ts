import { makeObservable, observable, action } from 'mobx';
import { createContext } from "react";

type Severity = "error" | "success" | "info" | "warning" | undefined;

type SnackbarType = {active: boolean, message: string, severity: Severity, timeout: number};

class SnackbarStore {
    constructor() {
        makeObservable(this)
    }

    @observable
    data: SnackbarType = {
        active: false,
        message: '',
        severity: 'warning',
        timeout: 6000,
    };

    @action
    show = async (
        message: string,
        severity: Severity,
        timeout: number,
    ) => {
        if (this.data.active) 
            this.hide();
        
        this.data = {
            active: true,
            message: message,
            severity: severity,
            timeout: timeout,
        };
    };

    @action
    hide = () => {
        this.data.active = false;
    };
}

const store = new SnackbarStore();
export const SnackbarStoreCtx = createContext(store);