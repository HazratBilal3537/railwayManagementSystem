import { defineStore } from 'pinia';
import axios from 'axios';
import { useRoute,useRouter } from "vue-router";
const token = localStorage.getItem('token')

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        loginError:'',
        getMeObj:{}
    }),
    

    getters: {
   
    },
    actions: {
// ````````````````````````````````````````loginAction````````````


        async loginAction(obj) {
            // console.log('login data in state ', obj);
            try {
                const response = await axios.post('http://18.134.150.58:3007/api/v1/users/login', obj);
                console.log('login successful ', response.data);
                // console.log('token',response.data.token);
                if(response.data.data.role==='manager'){
                    window.localStorage.setItem('token',response.data.token)
                    // route.params.push({ path: '/dashboard' })
                 window.location.href='/dashboard'
                }else{
                    alert('your not manager')
                }
            } catch (error) {
                console.log('login error ', error.message);
                this.loginError='please Correct password and id'
            }
        },
// ````````````````````````````````````````signUpAction````````````
        async signUpAction(data){
           
                try{
                    const response = await axios.post('http://18.134.150.58:3007/api/v1/users/signup', data);
                    console.log('SignUp successful ', response.data);
                } catch(error){
                    console.log('SignUp error ', error.message);
                }
        },
         // ````````````````````````````````````````LogOut````````````

         async logOutAction() {

            try {
                const response = await axios.get('http://18.134.150.58:3007/api/v1/users/logout', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('LogOut successfully ', response.data);
                window.location.href='/'
            

            } catch (error) {
                console.log('logOut error ', error.message);
            }
        },
         // ````````````````````````````````````````updateMe action````````````
         async updateMeAction(obj) {
            console.log(obj);
            
            try {
                const response = await axios.patch(`http://18.134.150.58:3007/api/v1/users/updateMe`,obj,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('sucessfully updatedMe ', response.data);
                alert('Updated')
                // window.location.href='/pendingbooking'
                
            } catch (error) {
                console.log(" not updatedMe error ", error.message)
            }
        },

          // ````````````````````````````````````````update Password ````````````
          async updatePasswordAction(obj) {
            console.log(obj);
            
            try {
                const response = await axios.patch(`http://18.134.150.58:3007/api/v1/users/updatePassword`,obj,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('sucessfully updated Password ', response.data);
                alert('Updated')
                // window.location.href='/pendingbooking'
                
            } catch (error) {
                console.log(" not updated Password error ", error.message)
            }

        },
            // ````````````````````````````````````````LogOut````````````

            async getMeAction() {

                try {
                    const response = await axios.get('http://18.134.150.58:3007/api/v1/users/getMe', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log('get Me successfully ', response.data.data);
                    this.getMeObj=response.data.data
                
    
                } catch (error) {
                    console.log('get Me error ', error.message);
                }
            },

            // ````````````````````````````````````````LogOut````````````

            async deleteMeAction() {
                // console.log('hi you are no more manager');
                try {
                    const response = await axios.delete('http://18.134.150.58:3007/api/v1/users/deleteMe', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log('delete me successfully ', response.data.data);
                    alert('deleted')
                    window.location.href='/'
                
    
                } catch (error) {
                    console.log('delete Me error ', error.message);
                }
            },
    }
})





