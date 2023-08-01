<template>
    {{ stationsStore.singleStationObj }}
    <div class="container-fluid px-1 py-1 mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-8 col-lg-9 col-md-9 col-11 text-center">
                <!-- <h3>Add New Train</h3> -->
                <div class="card">
                    <h5 class="text-center mb-4">Add New Trip</h5>
                    <form class="form-card" onsubmit="event.preventDefault()">

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Title<span class="text-danger">
                                        *</span></label> <input type="text" id="fname" name="fname" placeholder=""
                                    v-model="title"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">TripNo<span class="text-danger">
                                        *</span></label> <input type="text" id="Source" name="Source" placeholder=""
                                    v-model="tripNo"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Source<span class="text-danger">
                                        *</span></label>
                                <input type="text" id="destination" name="destination" placeholder="" v-model="source">
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Destination<span class="text-danger">
                                        *</span></label>
                                <input type="text" id="totalSeats" name="totalSeats" placeholder="" v-model="destination">
                            </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">DepartureTime<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="departureTime"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label  ps-2 text-start">ArrivalTime<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="arrivalTime"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Distance<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="distance"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label  ps-2 text-start">Shift<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="shift"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Price<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="price">
                            </div>

                            <div class="form-group col-sm-6 flex-column text-start "> <label
                                    class="form-control-label ps-2 ">Station<span class="text-danger"> *</span></label>
                                <select v-model="driver" class="form-select">
                                    <option :value="stationsStore.singleStationObj._id"> {{
                                        stationsStore.singleStationObj.name }}</option>
                                </select>
                            </div>
                        </div>

                        <!-- ``````````````````````````` Driver and security````````````````````````` -->

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column text-start "> <label
                                    class="form-control-label ps-2 ">Driver<span class="text-danger"> *</span></label>
                                <!-- <select v-model="driver" class="form-select">
                                    <option v-for="data in userStore.usersObjec.data" :value="data._id">

                                        <span v-if="data.role == 'driver'">{{ data.name }}</span>

                                    </option>
                                </select> -->
                            </div>

                            <div class="form-group col-sm-6 flex-column text-start "> <label
                                    class="form-control-label ps-2 ">Security<span class="text-danger"> *</span></label>
                                <!-- <select v-model="security" class="form-select">
                                    <option v-for="data in userStore.usersObjec.data" :value="data._id">

                                        <span v-if="data.role == 'security'">{{ data.name }}</span>

                                    </option>
                                </select> -->
                            </div>

                        </div>

                        <!-- ``````````````````````````` stationId and engineersId````````````````````````` -->
                        <!-- <div class="row justify-content-between text-left my-3">
                            <div class="form-group col-sm-6 flex-column text-start "> <label
                                    class="form-control-label ps-2 ">StationId<span class="text-danger"> *</span></label>
                                <select v-model="stationId" class="form-select">
                                    <option selected :value="stationsStore.stationsObject.station[0]._id">{{
                                        stationsStore.stationsObject.station[0].name }}</option>

                                </select>
                            </div>

                            <div class="form-group col-sm-6 flex-column text-start "> <label
                                    class="form-control-label ps-2 ">EngineersId<span class="text-danger"> *</span></label>
                                <select v-model="engineer" class="form-select">
                                    <option v-for="data in userStore.usersObjec.data" :value="data._id">

                                        <span v-if="data.role == 'engineer'">{{ data.name }}</span>

                                    </option>
                                </select>
                            </div>
                        </div> -->

                        <!-- ```````````````````````````````````` is active ````````` -->
                        <div class="row justify-content-start text-start">
                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" v-model="isActive" id="Active">
                                    <label class="form-check-label" for="Active">Active</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" v-model="repeative" id="Internet">
                                    <label class="form-check-label" for="Internet">repeative</label>
                                </div>
                            </div>
                        </div>


                        <!-- <div class="row justify-content-between text-left">
                            <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label text-start">photo<span class="text-danger"> *</span></label> <input
                                    type="file" id="ans" name="ans" placeholder="" @change="imageAction()"> </div>
                        </div> -->
                        <div class="row justify-content-center">
                            <div class="form-group col-sm-6 mt-4"> <button @click="createTrps()" type="submit"
                                    class="btn-block">Request for
                                    Add Train</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStationsStore } from '../../stores/Stations/Stations';
const stationsStore = useStationsStore();
stationsStore.getStationsAction()

// declaration variables
const title = ref('');
const tripNo = ref('');
const source = ref('');
const destination = ref('');
const departureTime = ref('');
const arrivalTime = ref('');
const distance = ref('');
const price = ref('');
const shift = ref('');
const repeative = ref('');
const isActive = ref('');
const stationId = ref('');
const trainsId = ref('');
const trainsDetail = [];

async function createTrps() {


    const obj = {

    }
    // console.log(obj);
    await trainStore.createTrainAction(obj)
}


</script>

<style scoped>
.card {
    padding: 30px 40px;
    /* margin-top: 60px; */
    margin-bottom: 60px;
    border: none !important;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2)
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

textarea[data-v-d394cde1],
button[data-v-d394cde1] {
    border-radius: 59px !important;

}
</style>