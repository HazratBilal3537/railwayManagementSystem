<template>
    <div class="container-fluid px-1 py-1 mx-auto bg-image">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-8 col-lg-9 col-md-9 col-11 text-center">
                <!-- <h3>Add New Train</h3> -->
                <div class="card">
                    <h5 class="text-center mb-4">Update Trips</h5>
                    <form class="form-card" @submit.prevent="submit">
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">TripNo<span class="text-danger">
                                        *</span></label> <input type="text" id="fname" name="fname" placeholder=""
                                    v-model="trip.TripNo"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-1 text-start pb-2">Train<span class="text-danger"> *</span></label>
                                <select v-model="trainId" class="form-select pt-4" style="margin-top: -2px; padding-top: 0.6rem !important;">
                                    <template  v-for="data in trainsStore.allTrainsObject.data" key="data.id">
                                            <option :value="data._id">{{data.name}}
                                            </option>
                                       </template>
                                </select>
                            </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Title<span class="text-danger">
                                        *</span></label> <input type="text" id="fname" name="fname" placeholder=""
                                    v-model="trip.title"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Source<span class="text-danger">
                                        *</span></label> <input type="text" id="Source" name="Source" placeholder=""
                                    v-model="trip.source"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Destination<span class="text-danger">
                                        *</span></label>
                                <input type="text" id="destination" name="destination" placeholder=""
                                    v-model="trip.destination">
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">DepartureTime<span class="text-danger">
                                        *</span></label>
                                <input type="text" id="totalSeats" name="totalSeats" placeholder=""
                                    v-model="trip.departureTime">
                            </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">ArrivalTime<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="trip.arrivalTime"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label  ps-2 text-start">Distance<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="trip.distance"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Price<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="trip.price"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label  ps-2 text-start">Shift<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="trip.shift"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Station Id<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model=stationId disabled> </div>
              
                        </div>

                     
                        <!-- ``````````````````````````` repetative and isActive````````````````````````` -->
                        <div class="ps-3 row text-start">
                            <div class="form-group col-sm-3 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox"
                                        v-model="trip.isActive" id="goodsTaker">
                                    <label class="form-check-label" for="goodsTaker">Active</label>
                                </div>
                            </div>
                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox"
                                        v-model="trip.repeative" id="firstAid">
                                    <label class="form-check-label" for="firstAid">Repeative</label>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="form-group col-sm-6 mt-4"> <button @click="updateTrips()" type="submit"
                                    class="btn-block"> Update Trips</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTripsStore } from '../../stores/Trips/Trips';
import { RouterLink, useRoute } from "vue-router";
import { useTrainsStore } from '../../stores/Trains/Tranins';
const trainsStore = useTrainsStore();

const trainId=ref('')
const route = useRoute();
let tripsStore = useTripsStore()
// console.log(trainId);
//`````````````````````````````````````````````` get id from url
const trip = JSON.parse(route.params.trip);
// const obje=(JSON.parse(trip))

// tripsStore.singleTripsAction(id)

// ``````````````````````````````````station id
let stationId = sessionStorage.getItem('stationId')

  
async function updateTrips() {

    const obj = {
        _id:trip._id,
        TripNo:trip.TripNo,
        trainId:trainId.value,
        title: trip.title,
        source: trip.source,
        destination: trip.destination,
        departureTime: trip.departureTime,
        arrivalTime: trip.arrivalTime,
        distance: trip.distance,
        price: trip.price,
        shift: trip.shift,
        isActive: trip.stationDetail.name,
        isActive: trip.isActive,
        repeative: trip.repeative,
        stationId:stationId,
    }
    console.log(obj);
    await tripsStore.updateTripsAction(obj)

}


</script>

<style scoped>
.bg-image {
    background-image: url('../../assets/images/bg-New.png');
}

.card {
    padding: 30px 40px;
    /* margin-bottom: 60px; */
    border: none !important;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}

.blue-text {
    color: #00BCD4
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
    font-weight: 300
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
}

.btn-block:hover {
    color: #fff !important;
    background: #347855 !important;

}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

textarea[data-v-d394cde1],
button[data-v-d394cde1] {
    border-radius: 59px !important;

}
</style>