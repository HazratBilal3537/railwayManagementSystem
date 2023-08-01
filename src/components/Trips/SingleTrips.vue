<template>
    <!-- {{ tripsStore.singleTripsObj }} -->

    <!-- <div class="col-md-4">
        <img src="../../assets/images/railway-gcdc853dd6_1280.jpg" class="img-fluid rounded-start" alt="...">
    </div> -->
    <div class="bg-img">
    <div class="card my-4 mx-auto" style="max-width: 95%;">
        <div class="row g-0">
            <div class="col-md-12">
                <div class="card-body">
                    <h5 class="card-title">Trips Detail</h5>
                    <div class="Trips-data">
                        <!-- <div class="trips-item">Train Name: <span>{{tripsStore.singleTripsObj.trainsDetail[0].name }}</span></div> -->
                        <div class="trips-item">TripNo: <span>{{tripsStore.singleTripsObj.TripNo }}</span></div>
                        <div class="trips-item">Title: <span>{{tripsStore.singleTripsObj.title }}</span></div>
                        <div class="trips-item">Source: <span>{{tripsStore.singleTripsObj.source }}</span></div>
                        <div class="trips-item">Destination: <span>{{tripsStore.singleTripsObj.destination }}</span></div>
                        <div class="trips-item">DepartureTime: <span>{{tripsStore.singleTripsObj.departureTime }}</span></div>
                        <div class="trips-item">ArrivalTime: <span>{{tripsStore.singleTripsObj.arrivalTime }}</span></div>
                        <div class="trips-item">Distance: <span>{{tripsStore.singleTripsObj.distance }}</span></div>
                        <div class="trips-item">Price: <span>{{tripsStore.singleTripsObj.price }}</span></div>
                        <div class="trips-item">Shift: <span>{{tripsStore.singleTripsObj.shift }}</span></div>
                        <div class="trips-item">Repeative: <span>{{tripsStore.singleTripsObj.repeative }}</span></div>
                        <!-- <div class="trips-item">StationName: <span>{{tripsStore.singleTripsObj.stationDetail.name }}</span></div> -->
                        <!-- <div class="trips-item">Station Location: <span>{{tripsStore.singleTripsObj.stationDetail.location }}</span></div> -->
                        <!-- <div class="trips-item">Station Country: <span>{{tripsStore.singleTripsObj.stationDetail.country }}</span></div> -->

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useTripsStore } from '../../stores/Trips/Trips';   
import { RouterLink, useRoute } from "vue-router";

const route = useRoute()
const tripsStore = useTripsStore()
//`````````````````````````````````````````````` get id from url
const id = route.params.id;
tripsStore.singleTripsAction(id)

</script>
<style scoped>
.bg-img{
    background-image: url('../../assets/images/bg-New.png');
height: 80vh;
}
.Trips-data{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.trips-item{
    margin: 1rem;
    width:20rem;
    border-bottom: 1.5px solid rgb(96, 218, 69);
}
.Trips-data div{
/* font-size: 1.2rem; */
color: black;
font-weight: 600;
}
.trips-item span{
font-weight: 400;

}
</style>