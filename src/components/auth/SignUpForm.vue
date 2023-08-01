<template>
    <div class="form_body">
        <div class="form">
            <div class="title">Create</div>
            <div class="subtitle">your account!</div>

            <div class="input-container ic2">
                <input id="name" class="input" type="text" v-model.trim="user_input.name" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="name" class="placeholder">Name</label>
            </div>

            <div class="input-container ic2">
                <input id="email" class="input" type="text" v-model="user_input.email" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
            </div>
            <div class="input-container ic2">
                <input id="password" class="input" type="password" v-model="user_input.password" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="password" class="placeholder">password</label>
            </div>

            <div class="input-container ic2">
                <input id="Cpassword" class="input" type="password" v-model="user_input.passwordConfirm" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="Cpassword" class="placeholder">Confirm password</label>
            </div>

            <div class="input-container ic2">
                <input id="age" class="input" type="number" v-model="user_input.age" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="age" class="placeholder">age</label>
            </div>

            <div class="input-container ic2">

                <select v-model="user_input.role" class="form-select mb-2" aria-label="">
                    <option value="admin">admin</option>
                    <option value="manager">manager</option>
                    <option value="passenger">passenger</option>
                    <option value="driver">driver</option>
                    <option value="security">security</option>
                </select>
            </div>



            <div class="input-container ic2 text-light">

                <label for="gender">gender</label>

                <div style="display: flex;">
                    <input id="how-video" name="how" type="radio" value="male"  v-model="user_input.gender" />
                    <label for="how-video" class="ms-1">male</label>


                    <input class="ms-2" id="how-blogs" name="how" type="radio" value='female' v-model="user_input.gender" />
                    <label for="how-blogs" class="ms-1">female </label>
                </div>
            </div>

            <button type="text" @click="submitdata" class="submit">Create acount</button>
            <router-link class="signupBtn" to="/">Login</router-link>
            <div>
                <router-link class="languageView" to="/languageview"> Go to languages</router-link>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/Auth/Auth';
import { RouterLink } from "vue-router";

const authStore = useAuthStore();


const user_input = ref({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: '',
    age: '',
    gender: ''
});

const submitdata = async () => {
    if (!user_input.value.name || !user_input.value.email) {
        return alert('please Enter Correct Value')
    }
    await authStore.signUpAction(user_input.value);

}
</script>

<style scoped>
.form_body {
    align-items: center;
    background-image: url("../../assets/images/RelwaySign.jpg");
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
    width: 500px;
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
    color: #fffdfe;
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