<template>
    <div class="container-fluid px-1 py-1 mx-auto bg-form">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-8 col-lg-9 col-md-9 col-11 text-center">
                <!-- <h3>Add New Train</h3> -->
                <div class="card">
                    <div class="img-box">
                        <img src="../../assets/images/railwayImage.jpg" class=" rounded-circle profile-img" alt="">
                    </div>
                    <form class="form-card" onsubmit="event.preventDefault()">

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2 text-start">Name<span class="text-danger">
                                        *</span></label> <input type="text" id="fname" name="fname" placeholder=""
                                    v-model="authStore.getMeObj.name"> </div>
                       
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Email<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="authStore.getMeObj.email" disabled> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">age<span class="text-danger">
                                        *</span></label>
                                <input type="text" id="destination" disabled name="destination" placeholder=""
                                    v-model="authStore.getMeObj.age">
                            </div>
                            
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Role<span class="text-danger">
                                        *</span></label>
                                <input type="text" id="totalSeats" name="totalSeats" placeholder="" disabled
                                    v-model="authStore.getMeObj.role">
                            </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Gender<span class="text-danger">
                                        *</span></label> <input type="text" id="Source" name="Source" placeholder=""
                                    v-model="authStore.getMeObj.gender" disabled> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label  ps-2 text-start">Id<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="authStore.getMeObj._id" disabled> </div>
                        </div>
                        <div class="row">
                         <div class="d-flex mt-4 button-bottom flex-wrap justify-content-center">
                            <!-- <button class="cancel-btn">Cancel</button> -->
                          <button class="mx-sm-3 mx-md-3 border-0 shadow-sm update-btn"  @click="submitForm" >Update Name</button>
                          <button class="delete-btn border-0 shadow-sm" @click=authStore.deleteMeAction()>Delete Acount</button>
                         </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '../../stores/Auth/Auth';
import { RouterLink } from "vue-router";


const authStore = useAuthStore();

const submitForm = async () => {
    const obj = {
        name: authStore.getMeObj.name,
       
    }
    await authStore.updateMeAction(obj)

}
</script>

<style scoped>
.bg-form {
    background-image: url("../../assets/images/bg-3.jpg");
    /* height: 80vh; */
}

.card {
    padding: 30px 40px;
    padding-top: 0;
    margin-top: 40px;
    margin-bottom: 60px;
    border: none !important;
    background-color: transparent;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2)
}
@media screen and (max-width: 400px) {
   .card{
    padding: 5px 5px;
   }
.img-box {
    height: 150px !important;
    width: 150px !important;
}
}


.blue-text {
    color: #00BCD4
}

.img-box {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    /* margin-bottom: 2rem; */

}

.profile-img {

    max-width: 100%;
    height: 100%;
    border: 5px solid #08bb5c;
    margin-top: -3rem;
    /* box-sizing: border-box; */
}


.form-control-label {
    margin-bottom: 0
}

.form-select {
    padding-top: .5rem !important;
    padding-bottom: .5rem !important;
}

.form-check-input:checked {
    background-color: #3bc47e;
    border-color: #3bc47e;
}

input,
textarea,
button {
    padding: 8px 15px;
    border-radius: 5px !important;
    margin: 5px 0px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-size: 18px !important;
    font-weight: 300;
    caret-color: #08bb5c;
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #00BCD4;
    outline-width: 0;
    font-weight: 400
}

.btn-block {
    color: #032E3B;
    border-radius: 50px;
    background: linear-gradient(360deg, #24D276 0%, #28FE8C 100%);
    /* padding: 14px 30px; */
    font-size: 14px !important;
    font-weight: 500;
    text-transform: uppercase;
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-family: Rubik, sans-serif;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.3s ease-in-out;
}

.btn-block:hover {
    /* color: #fff !important; */
    background-color: #0c5f34;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}
button{
    transition: all .5s;
}

textarea[data-v-d394cde1],
button[data-v-d394cde1] {
    border-radius: 59px !important;

}
.cancel-btn{
    background-color: #08bb5c;
    color: white;
    font-weight: 400;

}
.delete-btn{
    color: red;
    font-weight: 400;

}
.delete-btn:hover{
background-color: red;
color: white};
.button-bottom{
    flex-wrap: wrap !important;
    background-color: red !important;
    justify-content: space-evenly;
}
.button-bottom button{
width: max-content;
margin-left: .8rem;
margin-right: .8rem;

}
.update-btn{
    color: #08bb5c;
    font-weight: 400;

}
.update-btn:hover{
background-color: #08bb5c;
color: white;
}
    </style>