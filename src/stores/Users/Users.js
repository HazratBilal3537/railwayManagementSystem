import { defineStore } from 'pinia';
import axios from 'axios';

const token = localStorage.getItem('token')


export const useUsersStore = defineStore('usersStore', {
    state: () => ({
        usersObjec:{}
    }),
    

    getters: {
        engineers: (state) => state.usersObjec.data.map(item=>item.role).filter(item=>item=='passenger')
   
    },
    actions: {
// ````````````````````````````````````````get all users````````````


async AllUsersAction() {

    try {
        const response = await axios.get('http://18.134.150.58:3007/api/v1/users',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('data reached successfully ', response.data);
        this.usersObjec=response.data
        
        
    } catch (error) {
        console.log('data error ', error.message);
    }
    console.log(this.engineers);
},

    }
})





