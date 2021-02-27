import { makeObservable, observable, action, computed } from "mobx";
import { v4 as uuid } from 'uuid';
import { createContext } from "react";
import { getAllLeads } from '../services/leads-service';

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
  
    @observable leads: Lead[] = [];

    @observable filteredList: Lead[] = this.leads;
    
    @observable searchText: string = '';

    @observable filterSelected = '';
    
    @observable leadMarkerIdSelected = '';

    @action
    async getLeads() {
      try {
        const leadsData = await getAllLeads(); 
        this.leads = leadsData;

      } catch(err) {
          console.log(err);
      }
    }

    @action
    setLeadMarkerSelected(id: string) {
      this.leadMarkerIdSelected = id === this.leadMarkerIdSelected ? '' : id;
    }

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

    @computed get leadDataById() {
      console.log('calleddd', this.leadMarkerIdSelected);
      return this.leads.find(e => e.id === this.leadMarkerIdSelected);
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
