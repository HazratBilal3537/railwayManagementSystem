<template>
    <div class="form_body">
        <div class="form">
            <div class="title">Update</div>
            <div class="subtitle">booking</div>

            <div class="input-container ic2">
                <input id="passengerId" class="input" type="text" v-model="BookingStore.singleBookingObj.passengerId" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="passengerId" class="placeholder">passengerId</label>
            </div>

            <div class="input-container ic2">
                <input id="trainId" class="input" type="text" v-model="BookingStore.singleBookingObj.trainId" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="trainId" class="placeholder">trainId</label>
            </div>

            <div class="input-container ic2">
                <input id="stationId" class="input" type="text" v-model="BookingStore.singleBookingObj.stationId" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="stationId" class="placeholder">stationId</label>
            </div>

            <div class="input-container ic2">
                <input id="goods" class="input" type="text" v-model="BookingStore.singleBookingObj.goods" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="goods" class="placeholder">goods</label>
            </div>

            <div class="input-container ic2">
                <input id="distance" class="input" type="text" v-model="BookingStore.singleBookingObj.distance" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="distance" class="placeholder">distance</label>
            </div>

            <div class="form-check form-switch ic2">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked v-model="BookingStore.singleBookingObj.isActive">
                <label class="form-check-label text-white" for="flexSwitchCheckChecked">Active</label>
            </div>


            <button type="text" @click="submitForm" class="submit">Update</button>
            <router-link class="signupBtn" to="/signup">Create acount</router-link>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBookingStore } from '../../stores/Booking/Booking';
import { RouterLink,useRoute } from "vue-router";


const route=useRoute()
const BookingStore = useBookingStore();
//`````````````````````````````````````````````` get id from url
const id = route.params.id;

BookingStore.singleBookingAction(id)




const submitForm = async () => {
    const obj = {
        id:id,
        passengerId: BookingStore.singleBookingObj.passengerId,
        trainId: BookingStore.singleBookingObj.trainId,
        stationId: BookingStore.singleBookingObj.stationId,
        goods: BookingStore.singleBookingObj.goods,
        distance: BookingStore.singleBookingObj.distance,
        isActive: BookingStore.singleBookingObj.isActive
    }
    await BookingStore.updateBookingAction(obj);

    // email.value = "";
    // password.value = "";
}
</script>

<style scoped>
.form_body {
    align-items: center;
    background-image: url("../../assets/images/updateTran.jpg");
    /* opacity; */
    display: flex;
    justify-content: center;
    /* height: 100vh; */
    background-repeat: no-repeat;
    background-size: cover;
}

.form {
    background: #1821006b;
    border-radius: 20px;
    box-sizing: border-box;
    /* height: 500px; */
    padding: 20px;
    width: 420px;
    margin: 4.1rem auto;
}

.title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
    text-align: center;
}

.subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}

.input-container {
    height: 50px;
    position: relative;
    width: 100%;
}

.ic1 {
    margin-top: 40px;
}

.ic2 {
    margin-top: 30px;
}

.input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}

.cut {
    background-color: #15172b00;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
}

.cut-short {
    width: 50px;
}

.input:focus~.cut,
.input:not(:placeholder-shown)~.cut {
    transform: translateY(8px);
}

.placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
}

.input:focus~.placeholder,
.input:not(:placeholder-shown)~.placeholder {
    transform: translateY(-40px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown)~.placeholder {
    color: #808097;
}

.input:focus~.placeholder {
    color: #dc2f55;
}

.submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    /* outline: 0; */
    text-align: center;
    width: 100%;
}

.submit:active {
    background-color: #06b;
}

.signupBtn {
    margin-top: 1rem;
    text-decoration: none;
    display: inline-block;
    color: white;
}

.languageView {
    margin-top: 1rem;
    text-decoration: none;
    display: inline-block;
    color: rgb(218, 244, 21);
}
</style>