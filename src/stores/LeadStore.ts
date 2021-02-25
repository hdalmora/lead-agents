import { makeObservable, observable, action, computed } from "mobx";
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
      makeObservable(this)
    }
  
    @observable leads: Lead[] = [
      { id: '123', name: "Restaurante", address: 'Rua Armando, 458', isClient: true },
      { id: '456', name: "Lavanderia", address: 'Avenida Pellizzari, 458', isClient: false },
      { id: '789', name: "Oficina", address: 'Rua Penteado, 1589', isClient: true },
      { id: '569', name: "Padaria", address: 'Rua Latorre, 80', isClient: false },
      { id: '158', name: "Bar do Zé", address: 'Rua Presidente, 1500', isClient: false },
      { id: '895', name: "Lan House", address: 'Avenida da Uva, 73', isClient: true },
    ]

    @observable filteredList: Lead[] = this.leads;
    
    @observable searchText: string = '';

    @observable filterSelected = ''; 

    @action
    selectFilter(filter: string) {
      this.filterSelected = filter === this.filterSelected ? '' : filter;
      this.filterList();
    }

    @action 
    filterList() {
      this.searchText = '';

      if(this.filterSelected === '') {
        this.filteredList = this.leads;
        return;
      }

      const isClient = this.filterSelected === 'clients' ? true : false;

      this.filteredList = this.leads.filter(lead => lead.isClient === isClient);
    }
  
    @action createLead = (lead: Lead) => {
      this.leads.push({ ...lead, id: uuid() })
    }
  
    @action deleteLead = (id: string) => {
      this.leads = this.leads.filter(lead => lead.id !== id)
    }

    @action
    setSearchText(searchText: string) {
      this.searchText = searchText;
    }
  
    @action
    setFilteredListSearch = () => {
      this.filterSelected = '';

      let matchesFilter = new RegExp(this.searchText, "i");

      this.filteredList = this.leads.filter(lead => {
        return matchesFilter.test(lead.name) || matchesFilter.test(lead.address);
      });
    }
    

    @computed get info() {
      return {
        total: this.leads.length,
        isClient: this.leads.filter(lead => lead.isClient).length,
        isLead: this.leads.filter(lead => !lead.isClient).length
      }
    }
  }

  const store = new LeadStore();
  export const LeadStoreCtx = createContext(store);
