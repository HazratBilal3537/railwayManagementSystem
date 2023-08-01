import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../../router/index';

console.log(router);
const token = localStorage.getItem('token')


export const useStationsStore = defineStore('stationsStore', {
    state: () => ({
       stationsObject:{},
       singleStationObj:{}
    }),
    

    getters: {
    //   station:(state)=>state.categoryData.data.map(item=>item.Translation.find(id=>id.languageId==='642bf167a0757d2c0ce4f85a'))
   
    },
    actions: {
// ````````````````````````````````````````get stations````````````


async getStationsAction() {

    try {
        const response = await axios.get('http://18.134.150.58:3007/api/v1/stations/getMyStation',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Stations successfully ', response.data);
        this.stationsObject=response.data;
        this.singleStationObj=response.data.station[0];
        window.sessionStorage.setItem('stationId',response.data.station[0]._id)
        
    } catch (error) {
        console.log('Stations error ', error.message);
    }
},
  // ````````````````````````````````````````update station action````````````
  async updateStationAction(obj) {
    // console.log(obj);
    
    try {
        const response = await axios.patch(`http://18.134.150.58:3007/api/v1/stations/${obj.id}`,obj,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('sucessfully updated station ', response.data);
        alert('station Updated')
        router.back()   

    } catch (error) {
        console.log(" not updated station error ", error.message)
    }
},

    }
})





