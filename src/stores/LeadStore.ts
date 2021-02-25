import { observable, action, computed, reaction } from "mobx";
import { v4 as uuid } from 'uuid';
import { createContext } from "react";

export interface Lead {
  id?: string;
  name: string;
  address: string;
  isClient: boolean;
}

class LeadStore {
    constructor() {
      reaction(() => this.leads, _ => console.log(this.leads.length))
    }
  
    @observable leads: Lead[] = [
      { id: '123', name: "Restaurante", address: 'Rua Armando, 458', isClient: true },
      { id: '456', name: "Lavanderia", address: 'Avenida Pellizzari, 458', isClient: false },
      { id: '789', name: "Oficina", address: 'Rua Penteado, 1589', isClient: true },
      { id: '569', name: "Padaria", address: 'Rua Latorre, 80', isClient: false },
      { id: '158', name: "Bar do Zé", address: 'Rua Presidente, 1500', isClient: false },
      { id: '895', name: "Lan House", address: 'Avenida da Uva, 73', isClient: true },
    ]
  
    @action createLead = (lead: Lead) => {
      this.leads.push({ ...lead, id: uuid() })
    }
  
    @action deleteLead = (id: string) => {
      this.leads = this.leads.filter(lead => lead.id !== id)
    }
  
    @computed get info() {
      return {
        total: this.leads.length,
        isClient: this.leads.filter(lead => lead.isClient).length,
        isLead: this.leads.filter(lead => !lead.isClient).length
      }
    }
  }
  
  export default createContext(new LeadStore())