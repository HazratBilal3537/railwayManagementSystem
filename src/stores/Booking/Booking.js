import { defineStore } from 'pinia';
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({ /* options */ });
const token = localStorage.getItem('token')
let stationId = sessionStorage.getItem('stationId')


export const useBookingStore = defineStore('BookingStore', {
    state: () => ({
        allBookingData: [],
        updateBookingObj:{},
        singleBookingObj:{},
        seeOneBookingObj:{},
        pendingBookingData:{}
    }),

    getters: {

    },
    actions: {
        // ````````````````````````````````````````get all Booking````````````

        async AllBookingAction() {

            try {
                const response = await axios.get('http://18.134.150.58:3007/api/v1/bookings/passengerBookings/'+stationId, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('Booking successfully ', response.data);
                this.allBookingData = response.data
                // console.log(this.allBookingData);


            } catch (error) {
                console.log('booking error ', error.message);
            }
        },


        // ````````````````````````````````````````create booking````````````
        async createBookingAction(data) {
          
            try {
                const response = await axios.post('http://18.134.150.58:3007/api/v1/bookings', data,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                console.log('create booking successful ', response.data);
            } catch (error) {
                console.log('create booking error ', error.message);
            }
        },
        // ````````````````````````````````````````Single Booking action````````````
        async singleBookingAction(id) {
            try {
                const response = await axios.get(`http://18.134.150.58:3007/api/v1/bookings/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                console.log('sucessfully single booking  ', response.data.booking);
                this.singleBookingObj = response.data.booking
                // console.log(this.singleBookingObj);

            } catch (error) {
                console.log("single booking  error ", error)
            }
        },
          // ````````````````````````````````````````update Booking action````````````
          async updateBookingAction(obj) {
            // console.log(obj);
            
            try {
                const response = await axios.patch(`http://18.134.150.58:3007/api/v1/bookings/${obj._id}`,obj,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('sucessfully updated Booking ', response.data);
                //  route.push('/pendingbooking')
                alert('approve')
                // window.location.href='/pendingbooking'

                
                
            } catch (error) {
                console.log(" not updated Booking error ", error.message)
            }
        },
          // ````````````````````````````````````````delete booking action````````````
          async deleteBookingAction(id) {
            try {
                const response = await axios.delete(`http://18.134.150.58:3007/api/v1/bookings/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                console.log('sucessfully delete booking  ', response.data.booking);
    

            } catch (error) {
                console.log("delete booking error ", error)
            }
        },
        // ````````````````````````````````````````Single Booking action````````````
        async seeOneBookingAction(id) {
            try {
                const response = await axios.get(`http://18.134.150.58:3007/api/v1/bookings/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                console.log('sucessfully see booking', response.data);
                this.seeOneBookingObj = response.data
                // console.log(this.seeOneBookingObj);

            } catch (error) {
                console.log("see more booking  error ", error)
            }
            
        },
          // ````````````````````````````````````````get pending Booking````````````

          async PendingBookingAction() {
// console.log('pending booking is here');
            try {
                const response = await axios.get('http://18.134.150.58:3007/api/v1/bookings/pendingBookings/'+stationId, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('pending Booking successfully ', response.data);
                this.pendingBookingData = response.data.bookings
                // console.log(this.allBookingData);


            } catch (error) {
                console.log('pending booking error ', error.message);
                toaster.error(`Not Found Booking`,{
                    position:"top",
                    dismissible: false,
                    
                    });
            }
        },
    }
})





