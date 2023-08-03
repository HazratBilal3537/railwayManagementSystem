<template>
    <div class="form_body">
        <div class="form">
            <div class="title">Login</div>
            <div class="subtitle">{{ authStore.loginError }}</div>
            
            <div class="input-container ic2">
                <input id="email" class="input" type="text" v-model="email" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
            </div>
            <div class="input-container ic2">
                <input v-if="showPassword" id="" class="input" type="text" v-model="password" placeholder=" " />
                <input v-else id="" class="input" type="password" v-model="password" placeholder=" " />
                 <input class="button" @click="toggleShow" type="checkbox"><label for="passworid"  ></label>
        
                <div class="cut cut-short"></div>
                <label for="password" class="placeholder">password</label>
            </div>
            <button type="text" @click="submitForm" class="submit">Login</button>
            <router-link class="signupBtn" to="/signup">Create acount</router-link>
            <div>
                <!-- <router-link class="languageView" to="/languageview"> Go to languages</router-link> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/Auth/Auth';
import { RouterLink } from "vue-router";

const showPassword=ref(false)

function toggleShow() { 
    showPassword.value=!showPassword.value
 }
const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const submitForm = async () => {
    const obj = {
        email: email.value,
        password: password.value
    }
    await authStore.loginAction(obj);

}
</script>

<style scoped>
.form_body {
    align-items: center;
    background-image: url("../../assets/images/railwayImage.jpg");
    /* opacity; */
    display: flex;
    justify-content: center;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}

.form {
    background: #1821007a;
    border-radius: 20px;
    box-sizing: border-box;
    height: 500px;
    padding: 20px;
    width: 320px;
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
    color: #fb0000;
    font-family: sans-serif;
    font-size: 16px;
    /* font-weight: 600; */
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
.languageView{
    margin-top: 1rem;
    text-decoration: none;
    display: inline-block;
    color: rgb(218, 244, 21);  
}
</style>