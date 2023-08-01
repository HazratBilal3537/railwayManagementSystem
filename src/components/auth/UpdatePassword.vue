<template>
    <div class="bg-form ">
        <div class="form col-md-6">
            <div class="title">
                <!-- <img src="../../assets/images/bg-lock.jpg" class="img-fluid" alt=""> -->
            </div>
            <div class="form_body">
                <div class="subtitle"> Update Password</div>

                <div class="input-container ic2 ">
                    <input id="name" class="input" type="text" v-model="passwordCurrent" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="name" class="placeholder">Current Password</label>
                </div>

                <div class="input-container ic2 ">
                    <input id="name" class="input" type="text" v-model="password" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="name" class="placeholder">New Password</label>
                </div>

                <div class="input-container ic2  ">
                    <input id="name" class="input" type="text" v-model="passwordConfirm" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="name" class="placeholder">Confirm Password</label>
                </div>
                <div class="row d-flex justify-content-center">
                    <button type="text" @click="submitForm" class="submit">Update Password</button>
                </div>
                <router-link class="signupBtn" to="/signup">Create acount</router-link>
                <div>
                    <!-- <router-link class="languageView" to="/languageview"> Go to languages</router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/Auth/Auth';
import { RouterLink } from "vue-router";

const authStore = useAuthStore();

const passwordCurrent = ref('');
const password = ref('');
const passwordConfirm = ref('');


const submitForm = async () => {
    const obj = {
        passwordCurrent: passwordCurrent.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value

    }
    await authStore.updatePasswordAction(obj)

}
</script>

<style scoped>
.bg-form {
    background-image: url("../../assets/images/bg-3.jpg");
    height: 80vh;
}

.form_body {
    padding: 30px 40px;
    padding-top: 0;
    margin-top: 40px;
    margin-bottom: 60px;
    border: none !important;
    background-color: transparent;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
}

.form {
    /* background: #1821006b; */
    border-radius: 20px;
    box-sizing: border-box;
    /* width: 30rem; */
    margin: 0.1rem auto;
}

.title {

    width: 100%;
    background-size: cover;

}

.title img {
    border-radius: 1rem;
}

.subtitle {
   color: #000;
    font-family: sans-serif;
    font-size: 24px;
    font-weight: 600;
    padding-top: 1rem;
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
    background-color: #e9eaf7;
    border-radius: 6px;
    border: 0;
    box-sizing: border-box;
    /* color: #eee; */
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
    background-color: rgb(30, 150, 86);
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
    width: max-content;
}

.submit:hover {
    background-color: rgb(7, 217, 112);
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