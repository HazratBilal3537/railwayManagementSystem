import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../../router/index';

import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ /* options */ });


const token = localStorage.getItem('token')
let stationId = sessionStorage.getItem('stationId')

console.log(router);
export const useTripsStore = defineStore('TripsStore', {
    state: () => ({
        allTripsData:{},
        singleTripsObj:{}
    }),


    getters: {
        // isEnableTrips: (state) => state.allBookingData.booking.map(item=>item.isEnable==false)
        
    //   doubleCount:(state)=>state.categoryData.data.map(item=>item.Translation.find(id=>id.languageId==='642bf167a0757d2c0ce4f85a'))

    },
    actions: {
        // ````````````````````````````````````````get all Trips````````````

        async AllTripsAction() {

            try {
                const response = await axios.get('http://18.134.150.58:3007/api/v1/trips/getTrips/'+stationId, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('Trips successfully ', response.data);
                this.allTripsData = response.data.data
                // console.log(this.allTripsData);

            } catch (error) {
                console.log('Trips error ', error.message);
            }
        },
          // ````````````````````````````````````````update Trips action````````````
          async updateTripsAction(obj) {
            // console.log(obj);
            
            try {
                const response = await axios.patch(`http://18.134.150.58:3007/api/v1/trips/${obj._id}`,obj,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('sucessfully updated Trips ', response.data);
                // alert('updated');
                toaster.success(`sucessfully updated Trip`,{
                    position:"top",
                    dismissible: false,
                    
                    });
                // router.back()
                
                
            } catch (error) {
                console.log(" not updated Trips error ", error.message);
                toaster.error(`Not updated Trip`,{
                    position:"top",
                    dismissible: false,
                    
                    });
            }
        },
          // ````````````````````````````````````````delete Trips action````````````
          async deleteTripsAction(id) {
            try {
                const response = await axios.delete(`http://18.134.150.58:3007/api/v1/trips/disable/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                console.log('sucessfully delete Trips  ', response.data.Trips);
                alert('deleted')
    
            } catch (error) {
                console.log("delete Trips error ", error)
            }
        },
        // ````````````````````````````````````````Single Trips action````````````
        async singleTripsAction(id) {
            try {
                const response = await axios.get(`http://18.134.150.58:3007/api/v1/trips/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                console.log('sucessfully single Trips', response.data);
                this.singleTripsObj = response.data.trip[0]
                // console.log(this.seeOneTripsObj);

            } catch (error) {
                console.log("single Trips  error ", error)
            }
        },
         
    }
})





