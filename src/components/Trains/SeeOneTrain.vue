<template>
    <!-- <h1>one page of see</h1> -->
    {{ trainStore.seeOneTrainObj.train }}
    <div class="card" v-for="(data, index) in  trainStore.seeOneTrainObj.train" :key="index">
        <div class="image-box">
                    <img class="img-fluid mb-2" src="../../assets/images/RelwaySign.jpg" alt="">
                </div>
        <div>
            <div>id: <span> {{ data._id }}</span></div>
            <div>name: <span> {{ data.name }}</span></div>
            <div>source: <span> {{ data.source }}</span></div>
            <div>destination: <span> {{ data.destination }}</span></div>
            <div>roomVIP: <span> {{ data.roomVIP }}</span></div>
            <div>familySeats: <span> {{ data.familySeats }}</span></div>
            <div>totalSeats: <span> {{ data.totalSeats }}</span></div>
            <div>boxes: <span> {{ data.boxes }}</span></div>
            <div>firstAid: <span> {{ data.firstAid }}</span></div>
            <div>color: <span> {{ data.color }}</span></div>
            <div>Internet: <span> {{ data.Internet }}</span></div>
            <div>goodsTaker: <span> {{ data.goodsTaker }}</span></div>
            <div>airCondition: <span> {{ data.airCondition }}</span></div>
            <div>Active: <span> {{ data.isActive }}</span></div>
            <div>photo: <span> {{ data.photo }}</span></div>
            <hr>
            <div class="stationDetail">stationDetail</div>

            <!-- <div>id: <span> {{ data.stationDetail._id }}</span></div> -->
            <!-- <div>Name: <span> {{ data.stationDetail.name }}</span></div> -->
            <!-- <div>location: <span> {{ data.stationDetail.location }}</span></div> -->
            <!-- <div>country: <span> {{ data.stationDetail.country }}</span></div> -->
            <hr>

            <div class="engineerDetail">engineerDetail</div>

            <div>id: <span> {{ data.engineerDetail[0]._id }}</span></div>
            <div>Name: <span> {{ data.engineerDetail[0].name }}</span></div>
            <div>role: <span> {{ data.engineerDetail[0].role }}</span></div>
            <div>gender: <span> {{ data.engineerDetail[0].gender }}</span></div>
            <div>age: <span> {{ data.engineerDetail[0].age }}</span></div>
            <hr>
            <div class="servantDetail">ServantDetail</div>
            <div v-for="item in trainStore.seeOneTrainObj.train[0].servantDetail">
                <div>id: <span> {{ item._id }}</span></div>
                <div>Name: <span> {{ item.name }}</span></div>
                <div>Role: <span> {{ item.role }}</span></div>
                <div>Genger: <span> {{ item.gender }}</span></div>
                <div>age: <span> {{ item.age }}</span></div>
                <hr>

            </div>

        </div>
    </div>
    <!-- </div> -->
</template>

<script setup>
import { useTrainsStore } from '../../stores/Trains/Tranins';
import { RouterLink, useRoute } from "vue-router";
const trainStore = useTrainsStore();
const route = useRoute()

const id = route.params.id;
trainStore.seeOneTrainAction(id)
</script>
<style scoped>
.card {
    background: rgba(255, 255, 255, 0.609);
    /* display: flex; */
    margin: 3rem auto;
    width: 30%;
    padding: 1.5rem;
    box-shadow: 0 -0.5rem 1rem rgba(0 0 0 / 0.15);
    border-radius: 4px;
}

.card span {
    font-weight: normal;
    margin-left: 5px;
}

.card div {
    font-weight: 700;
}

.stationDetail,
.servantDetail,
.engineerDetail {
    margin: 5px auto;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
}
</style>