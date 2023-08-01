import { defineStore } from 'pinia';
import axios from 'axios';

const token = localStorage.getItem('token')
let stationId = sessionStorage.getItem('stationId')

export const useTicketsStore = defineStore('TicketsStore', {
    state: () => ({
        allTicketsObj:{}
    }),


    getters: {

    },
    actions: {
        // ````````````````````````````````````````````````` Get all Tickets   ````````

            async getAllTicketsAction() {

            try {
                const response = await axios.get('http://18.134.150.58:3007/api/v1/tickets/getTickets/'+stationId, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('Tickets data successfully ', response.data);
                this.allTicketsObj = response.data.data

            } catch (error) {
                console.log('Tickets error ', error.message);
            }
        },
          // ````````````````````````````````````````delete Trips action````````````
          async deleteTicketAction(id) {
            try {
                const response = await axios.delete(`http://18.134.150.58:3007/api/v1/tickets/disable/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                console.log('sucessfully delete Ticket  ', response.data);
                alert('deleted')
    
            } catch (error) {
                console.log("delete Ticket error ", error)
            }

        },
    }
})