<template>
    <div class="station-box">
        <div class="row">
            <div class="image-box col-md-4 ">
                <img class="img-fluid " style="border-radius: 5px;" src="../../assets/images/railway-gcdc853dd6_1280.jpg" alt="">
            </div>
            <div class="table-section col-md-8 ">
                <h3 class="">Servents Detail</h3>
                <div class="table-box">
                    <table class="table ">
                        <thead>
                            <tr>
                                <th scope="col"> Name</th>
                                <th scope="col">Role</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, index) in  stationsStore.singleStationObj.servantDetail" :key="index"
                                :class="{ 'gray': index % 2 === 0 }">
                                <td>{{ data.name }}</td>
                                <td>{{ data.role }}</td>
                                <td>{{ data.gender }}</td>
                                <td>{{ data.age }}</td>
                            </tr>
                            <tr v-for="(data, index) in  stationsStore.singleStationObj.engineerDetail"
                                :key="index">
                                <td>{{ data.name }}</td>
                                <td>{{ data.role }}</td>
                                <td>{{ data.gender }}</td>
                                <td>{{ data.age }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <h4 class=" mt-4">Station Detail</h4>
        <div class="table-box">
            <table class="table">

                <thead>
                    <tr>
                        <th scope="col"> Name</th>
                        <!-- <th scope="col">Active</th> -->
                        <th scope="col">location</th>
                        <th scope="col">Security</th>
                        <th scope="col">HelpRoom</th>
                        <th scope="col">Country</th>
                        <th scope="col">RestRoom</th>
                        <th scope="col">Canteen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in  stationsStore.stationsObject.station" :key="index">
                        <td>{{ data.name }}</td>
                        <!-- <td>{{ data.isActive }}</td> -->
                        <td>{{ data.location }}</td>
                        <td>{{ available(data.security) }}</td>
                        <td>{{ available(data.emergencyRoom) }}</td>
                        <td>{{ data.country }}</td>
                        <td>{{ available(data.restRoom) }}</td>
                        <td>{{ available(data.canteen) }}</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div class="row text-center">
             <div class=" mx-auto">
                <router-link to="/dashboard/updatestation" class="nav-link btn-block">Update Station</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStationsStore } from '../../stores/Stations/Stations';
const stationsStore = useStationsStore();
stationsStore.getStationsAction()


// security available or not functin
function available(val){
    return val? 'Available':'Not-Available'
}
</script>

<style scoped>

.station-box {
    padding: 1rem;
    background-color: #f4f4f4;
}

.card {
    background: rgba(255, 255, 255, 0.609);
    /* display: flex; */
    margin: 3rem auto;
    width: 80%;
    padding: 1.5rem;
    box-shadow: 0 -0.5rem 1rem rgba(0 0 0 / 0.15);
    border-radius: 4px;
}

.table-box {
    padding: 1rem auto;
    border: 1px solid rgb(191, 191, 191);
    border-radius: 8px;
    overflow-x: scroll;
}

.card span {
    font-weight: normal;
}

.card div {
    font-weight: 700;
}

.image-box image {
    height: 100%;
    width: 10%;
    background-size: cover;

}
@media screen and (max-width: 1250px) {
    .image-box {
    display: none !important;

}
.table-section{
    width: 100%;
}
}

.engineerDetail,
.servantDetail {
    margin: 5px auto;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
}

.gray {
    background-color: rgb(59 196 126 / 16%);
}

.updateBtn a {
    text-decoration: none;

}
.btn-block {
    text-transform: uppercase;
    font-size: 15px !important;
    font-weight: 400;
    /* height: 43px; */
    cursor: pointer;
    margin: 3rem auto;
    width: fit-content;
    color: white;
    background-color:#3bc47e;
    border-radius: 5rem;
    box-shadow: 0px 6px 16px -1px rgba(19, 0, 0, 0.5)
}
.btn-block:hover {
    background-color:#08713a !important;
    color: #fff !important;
}
</style>