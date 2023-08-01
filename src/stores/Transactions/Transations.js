import { defineStore } from 'pinia';
import axios from 'axios';

const token = localStorage.getItem('token')


export const useTransactonsStore = defineStore('transactionsStore', {
    state: () => ({
        transactionsObject:{}
    }),
    
    getters: {
   
    },
    actions: {
// ````````````````````````````````````````get all transiction````````````


async allTransactionsActions() {

    try {
        const response = await axios.get('http://18.134.150.58:3007/api/v1/transactions',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('transictions  successfully ', response.data);
        this.transactionsObject=response.data
        

    } catch (error) {
        console.log('transiction error ', error.message);
    }
},

    }
})





