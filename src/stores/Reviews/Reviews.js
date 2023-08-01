import { defineStore } from 'pinia';
import axios from 'axios';

const token = localStorage.getItem('token')


export const useReviewsStore = defineStore('reviewsStore', {
    state: () => ({
        reviewsObject:{},
        singlereviewsObject:{}
    }),
    

    getters: {
      passengerDetailGetter:(state)=>state.singlereviewsObject.passengerDetail
   
    },
    actions: {
// ````````````````````````````````````````get all Reviews````````````


async AllReviewsAction() {

    try {
        const response = await axios.get('http://18.134.150.58:3007/api/v1/reviews',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('reviews reached successfully ', response.data);
        this.reviewsObject=response.data
        

    } catch (error) {
        console.log('reviews error ', error.message);
    }
},
// ````````````````````````````````````````get all Reviews````````````


async singleReview(id) {

    try {
        const response = await axios.get('http://18.134.150.58:3007/api/v1/reviews/'+id,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('single reviews reached successfully ', response.data);
        this.singlereviewsObject=response.data.data[0]
        

    } catch (error) {
        console.log('singl reviews error ', error.message);
    }
},

    }
})





