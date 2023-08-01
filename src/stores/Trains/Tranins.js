import { defineStore } from 'pinia';
import axios from 'axios';

const token = localStorage.getItem('token')


export const useTrainsStore = defineStore('trainsStore', {
    state: () => ({
        allTrainsObject:{},
        seeOneTrainObj:{},
        singleTrainObj:{}
    }),
    
    getters: {
   
    },
    actions: {
// ````````````````````````````````````````get all TrainsObject````````````


async getTrainsAction() {

    try {
        const response = await axios.get('http://18.134.150.58:3007/api/v1/trains',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('trans data successfully ', response.data);
        this.allTrainsObject=response.data
        

    } catch (error) {
        console.log('trans error ', error.message);
    }
},
  // ````````````````````````````````````````Single train action````````````
  async seeOneTrainAction(id) {
    try {
        const response = await axios.get(`http://18.134.150.58:3007/api/v1/trains/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
        console.log('sucessfully see train', response.data);
        this.seeOneTrainObj = response.data
        // console.log(this.seeOneBookingObj);

    } catch (error) {
        console.log("see more booking  error ", error)
    }
},
  // ````````````````````````````````````````create train````````````
  async createTrainAction(data) {
          console.log(data);
    try {
        const response = await axios.post('http://18.134.150.58:3007/api/v1/trains',data,{
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
        console.log('create train successful ', response.data);
    } catch (error) {
        console.log('create train error ', error.message);
    }
},
 // ````````````````````````````````````````Single train action````````````
 async singleTrainAction(id) {
    try {
        const response = await axios.get(`http://18.134.150.58:3007/api/v1/trains/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
        console.log('sucessfully single train  ', response.data);
        this.singleTrainObj = response.data.train[0]
        console.log(this.singleTrainObj);

    } catch (error) {
        console.log("single train error ", error)
    }
},
     // ````````````````````````````````````````delete train action````````````
     async deleteTrainAction(id) {
        try {
            const response = await axios.delete(`http://18.134.150.58:3007/api/v1/trains/disable/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
                });
            console.log('sucessfully delete train  ', response.data);


        } catch (error) {
            console.log("delete train error ", error)
        }
    },
    // ````````````````````````````````````````update train action````````````
    async updateTrainAction(obj) {
        // console.log(obj);
        
        try {
            const response = await axios.patch(`http://18.134.150.58:3007/api/v1/trains/${obj._id}`,obj,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('sucessfully updated Train ', response.data);
            // this.updateTrainObj = response.data
            

        } catch (error) {
            console.log(" not updated Train error ", error.message)
        }
    },
    }
})





