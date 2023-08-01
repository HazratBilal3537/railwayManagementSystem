<template>
    <div class="container-fluid px-1 py-1 mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-8 col-lg-9 col-md-9 col-11 text-center">
                <!-- <h3>Add New Train</h3> -->
                <div class="card">
                    <h5 class="text-center mb-4">Add New Train</h5>
                    <form class="form-card" onsubmit="event.preventDefault()">

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Name<span class="text-danger">
                                        *</span></label> <input type="text" id="fname" name="fname" placeholder=""
                                    v-model="name"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Source<span class="text-danger">
                                        *</span></label> <input type="text" id="Source" name="Source" placeholder=""
                                    v-model="source"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Destination<span class="text-danger">
                                        *</span></label>
                                <input type="text" id="destination" name="destination" placeholder="" v-model="destination">
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">TotalSeats<span class="text-danger">
                                        *</span></label>
                                <input type="text" id="totalSeats" name="totalSeats" placeholder="" v-model="totalSeats">
                            </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label ps-2  text-start">Boxes<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="boxes"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label  ps-2 text-start">Color<span class="text-danger">
                                        *</span></label> <input type="text" id="job" name="job" placeholder=""
                                    v-model="color"> </div>
                        </div>

                        <!-- ``````````````````````````` Driver and security````````````````````````` -->

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column text-start "> <label
                                    class="form-control-label ps-2 ">Driver<span class="text-danger"> *</span></label>
                                <select v-model="driver" class="form-select">
                                    <option v-for="data in userStore.usersObjec.data" :value="data._id">

                                        <span v-if="data.role == 'driver'">{{ data.name }}</span>

                                    </option>
                                </select>
                            </div>

                            <div class="form-group col-sm-6 flex-column text-start "> <label
                                    class="form-control-label ps-2 ">Security<span class="text-danger"> *</span></label>
                                <select v-model="security" class="form-select">
                                    <option v-for="data in userStore.usersObjec.data" :value="data._id">

                                        <span v-if="data.role == 'security'">{{ data.name }}</span>

                                    </option>
                                </select>
                            </div>

                        </div>

                        <!-- ``````````````````````````` stationId and engineersId````````````````````````` -->
                        <div class="row justify-content-between text-left my-3">
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
                        </div>

                        <!-- ```````````````````````````````````` is active ````````` -->
                        <div class="row justify-content-between text-start">
                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" v-model="isActive" id="Active">
                                    <label class="form-check-label" for="Active">Active</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" v-model="Internet" id="Internet">
                                    <label class="form-check-label" for="Internet">Internet</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input " type="checkbox" v-model="airCondition"
                                        id="airCondition">
                                    <label class="form-check-label" for="airCondition">AirCondition</label>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-between text-start">
                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" v-model="goodsTaker" id="goodsTaker">
                                    <label class="form-check-label" for="goodsTaker">GoodsTaker</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" v-model="firstAid" id="firstAid">
                                    <label class="form-check-label" for="firstAid">FirstAid</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" v-model="familySeats" id="familySeats">
                                    <label class="form-check-label" for="familySeats">FamilySeats</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" v-model="roomVIP" id="roomVIP">
                                    <label class="form-check-label" for="roomVIP">RoomVIP</label>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="row justify-content-between text-left">
                            <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label text-start">photo<span class="text-danger"> *</span></label> <input
                                    type="file" id="ans" name="ans" placeholder="" @change="imageAction()"> </div>
                        </div> -->
                        <div class="row justify-content-center">
                            <div class="form-group col-sm-6 mt-4"> <button @click="createTrain()" type="submit"
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
import { useTrainsStore } from '../../stores/Trains/Tranins';
import { RouterLink } from "vue-router";
import { useStationsStore } from '../../stores/Stations/Stations';
import { useUsersStore } from '../../stores/Users/Users';
const userStore = useUsersStore();
userStore.AllUsersAction()

const stationsStore = useStationsStore();
stationsStore.getStationsAction()


const trainStore = useTrainsStore();

// declaration variables
const name = ref('')
const source = ref('')
const destination = ref('')
const totalSeats = ref('')
const boxes = ref('')
const color = ref('')
const driver = ref('')
const security = ref('')
const stationId = ref('')
const engineer = ref('')


let isActive = ref(true)
let airCondition = ref(true)
let goodsTaker = ref(true)
let Internet = ref(true)
let firstAid = ref(true)
let familySeats = ref(true)
let roomVIP = ref(true)

const servantIds = ref([])

async function createTrain() {
    servantIds.value.push(driver.value)
    servantIds.value.push(security.value)

    const obj = {
        name: name.value,
        source: source.value,
        destination: destination.value,
        totalSeats: totalSeats.value,
        boxes: boxes.value,
        color: color.value,
        stationId: stationId.value,
        engineersId: engineer.value,
        isActive: isActive.value,
        airCondition: airCondition.value,
        goodsTaker: goodsTaker.value,
        Internet: Internet.value,
        firstAid: firstAid.value,
        familySeats: familySeats.value,
        roomVIP: roomVIP.value,
        servantIds: servantIds.value,
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
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),0 3px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.3s ease-in-out;
}

.btn-block:hover {
    /* color: #fff !important; */
    background-color:#0c5f34;
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

}</style>