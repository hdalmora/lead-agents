import { makeObservable, observable, action, computed } from "mobx";
import { createContext } from "react";
import { getAllLeads, deleteLeadById } from '../services/leads-service';

export interface Lead {
  id?: string;
  name: string;
  address: string;
  isClient: boolean;
  lat: number,
  lng: number,
}

export interface MapCoordenates {
  lat: number;
  lng: number;
}

class LeadStore {
    constructor() {
      makeObservable(this)
    }
  
    @observable leads: Lead[] = [];

    @observable filteredList: Lead[] = [];
    
    @observable searchText: string = '';

    @observable filterSelected: string = '';
    
    @observable leadMarkerIdSelected: string = '';

    @observable mapCenter: MapCoordenates = {lat: -23.210801, lng: -46.857105 };

    @action
    setMapCenter(mapCenter: MapCoordenates) {
      this.mapCenter = mapCenter;
    }

    @action
    async getLeads(): Promise<boolean> {
      try {
        const leadsData = await getAllLeads(); 
        this.leads = leadsData;

      } catch(err) {
        return false;
      }
      return true;
    }

    @action
    async deleteLead(leadId: string) {
      try {

        await deleteLeadById(leadId);
        this.deleteLeadLocally(leadId);
        return true;
      } catch {
        return false;
      }
    }

    @action
    setLeadMarkerSelected(id: string, forceSelection = false) {
      const isSameSelection =  id === this.leadMarkerIdSelected;

      this.leadMarkerIdSelected = forceSelection ? id : isSameSelection ? '' : id;
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
  
    @action createLeadLocally = (newLead: Lead) => {
      this.leads.push(newLead)
    }
  
    @action deleteLeadLocally = (id: string) => {
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
