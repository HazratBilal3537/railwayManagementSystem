import { defineStore } from 'pinia';
import axios from 'axios';

const token = localStorage.getItem('token')


export const useComplainsStore = defineStore('complainsStore', {
    state: () => ({
      complainsObject:{}
    }),
    

    getters: {
   
    },
    actions: {
// ````````````````````````````````````````get all complain````````````


async AllComplainsAction() {

    try {
        const response = await axios.get('http://18.134.150.58:3007/api/v1/complains',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('complains successfully ', response.data);
        this.complainsObject=response.data
        

    } catch (error) {
        console.log('complain error ', error.message);
    }
},

    }
})





