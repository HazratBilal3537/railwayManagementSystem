<template>
    <div class="header">
        <div class="logo-box">
            <h5 class="manager-heading">Manager&nbsp;Dashboard</h5>
            <!-- <img src="../../assets/images/train_logo.png" alt="" class="img-fluid"> -->
        </div>
        <div class="dropdown py-3">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="30" height="30" class="rounded-circle">
                <span class="d-none d-sm-inline mx-1">{{ authStore.getMeObj.name }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><router-link to="/dashboard/updatepassword" class="dropdown-item hover-btn" href="#">Update Password</router-link></li>
                <li><router-link to="/dashboard/updateme" class="dropdown-item hover-btn" href="#">Profile Update</router-link></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item hover-btn" @click="logOutBtn()" href="#">Sign out</a></li>
            </ul>
        </div>
    </div>
    
</template>
<script setup>
import { useAuthStore } from '../../stores/Auth/Auth';
const authStore = useAuthStore();
// logout function 
function logOutBtn() {
    authStore.logOutAction()
    localStorage.clear();
    sessionStorage.clear()
}
authStore.getMeAction();
</script>

<style scoped>
.header {
    background-color: #3bc47e;
    position: fixed;
    width: 100%;
    /* padding: 0 !important; */
    display: flex;
    justify-content: space-between;
    padding-right: 3rem !important;
    z-index: 2;
    margin-bottom: 3rem;

}

.logo-box {
    width: 5rem;
    align-items: center;
    display: flex;
    padding-left: 3rem;
    color: rgb(255, 255, 255);
    cursor: pointer;
}
.delete-btn:hover{
background-color: rgb(217, 25, 25) !important;
}
.hover-btn:hover{
    background-color: #3bc47e;
}
@media screen and (max-width: 872px) {
    .manager-heading{
    display: none !important;
}
}


</style>