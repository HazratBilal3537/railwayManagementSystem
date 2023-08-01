<template>
{{ trainStore.singleTrainObj }}
<div class="container-fluid px-1 py-1 mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-8 col-lg-9 col-md-9 col-11 text-center">
                <!-- <h3>Add New Train</h3' > -->
                <div class="card">
                    <h5 class="text-center mb-4">Update Train</h5>
                    <form class="form-card" onsubmit="event.preventDefault()">

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">Name<span class="text-danger"> *</span></label> <input
                                    type="text" id="fname" name="fname" placeholder=""
                                   v-model="trainStore.singleTrainObj.name" > </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">Source<span class="text-danger"> *</span></label> <input
                                    type="text" id="Source" name="Source" placeholder=""
                                    v-model="trainStore.singleTrainObj.source"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">Destination<span class="text-danger"> *</span></label>
                                <input type="text" id="destination" name="destination" placeholder="" v-model="trainStore.singleTrainObj.destination">
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">TotalSeats<span class="text-danger"> *</span></label>
                                <input type="text" id="totalSeats" name="totalSeats" placeholder="" v-model="trainStore.singleTrainObj.totalSeats">
                            </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">Boxes<span class="text-danger"> *</span></label> <input
                                    type="text" id="job" name="job" placeholder="" v-model="trainStore.singleTrainObj.boxes"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-3">Color<span class="text-danger"> *</span></label> <input
                                    type="text" id="job" name="job" placeholder="" v-model="trainStore.singleTrainObj.color"> </div>
                        </div>

                       <!-- ``````````````````````````` Driver and security````````````````````````` -->

                       <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column "> <label
                                    class="form-control-label px-3">Driver<span class="text-danger"> *</span></label>
                                    <select v-model="driver" class="form-select">
                                    <option v-for="data in userStore.usersObjec.data" :value="data._id" >
                                       
                                        <span v-if="data.role=='driver'">{{data.name}}</span>

                                    </option>
                                </select>
                            </div>

                            <div class="form-group col-sm-6 flex-column "> <label
                                    class="form-control-label px-3">Security<span class="text-danger"> *</span></label>
                                    <select v-model="security" class="form-select">
                                        <option v-for="data in userStore.usersObjec.data" :value="data._id" >
                                       
                                            <span v-if="data.role=='security'">{{data.name}}</span>

                                    </option>
                                </select>
                            </div>

                        </div>

                        <!-- ``````````````````````````` stationId and engineersId````````````````````````` -->
                        <div class="row justify-content-between text-left my-3">
                            <div class="form-group col-sm-6 flex-column "> <label
                                    class="form-control-label px-3">stationId<span class="text-danger"> *</span></label>
                                <select v-model="trainStore.singleTrainObj.stationId" class="form-select">
                                    <option selected :value="trainStore.singleTrainObj._id">{{ trainStore.singleTrainObj.name }}</option>
                                
                                </select>
                            </div>

                            <div class="form-group col-sm-6 flex-column "> <label
                                    class="form-control-label px-3">engineersId<span class="text-danger"> *</span></label>
                                    <select v-model="trainStore.singleTrainObj.engineer" class="form-select">
                                        <option v-for="data in userStore.usersObjec.data" :value="data._id" key="data.id">
                                       
                                        <span v-if="data.role=='engineer'" >{{data.name}}</span>
                                    
                                    </option>
                                </select>
                            </div>
                        </div>

                        <!-- ```````````````````````````````````` is active ````````` -->
                        <div class="row justify-content-between text-start">
                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="trainStore.singleTrainObj.isActive" id="Active">
                                    <label class="form-check-label" for="Active">Active</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="trainStore.singleTrainObj.Internet" id="Internet">
                                    <label class="form-check-label" for="Internet">Internet</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="trainStore.singleTrainObj.airCondition" id="airCondition">
                                    <label class="form-check-label" for="airCondition">airCondition</label>
                                </div>
                            </div>
                        </div>
                       
                        <div class="row justify-content-between text-start">
                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="trainStore.singleTrainObj.goodsTaker" id="goodsTaker">
                                    <label class="form-check-label" for="goodsTaker">goodsTaker</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="trainStore.singleTrainObj.firstAid" id="firstAid">
                                    <label class="form-check-label" for="firstAid">firstAid</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="trainStore.singleTrainObj.familySeats" id="familySeats">
                                    <label class="form-check-label" for="familySeats">familySeats</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="trainStore.singleTrainObj.roomVIP" id="roomVIP">
                                    <label class="form-check-label" for="roomVIP">roomVIP</label>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">photo<span class="text-danger"> *</span></label> <input
                                    type="file" id="ans" name="ans" placeholder="" @change="imageAction()"> </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="form-group col-sm-6 mt-4"> <button @click="updateTrain()" type="submit" class="btn-block btn-primary">Request for
                                    update Train</button> </div>
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
import { RouterLink,useRoute } from "vue-router";
import { useUsersStore } from '../../stores/Users/Users';
const userStore=useUsersStore()
userStore.AllUsersAction()

const trainStore=useTrainsStore()
const route=useRoute()
//`````````````````````````````````````````````` get id from url
const id = route.params.id;
trainStore.singleTrainAction(id)

const servantIds= ref([])
let driver=ref('')
let security=ref('')

const updateTrain= async ()=>{
    servantIds.value.push(driver.value)
    servantIds.value.push(security.value)

    const obj={
        _id:trainStore.singleTrainObj._id,
        name:trainStore.singleTrainObj.name,
        source:trainStore.singleTrainObj.source,
        destination:trainStore.singleTrainObj.destination,
        totalSeats:trainStore.singleTrainObj.totalSeats,
        boxes:trainStore.singleTrainObj.boxes,
        color:trainStore.singleTrainObj.color,
        stationId:trainStore.singleTrainObj.stationId,
        engineersId:trainStore.singleTrainObj.engineer,
        isActive:trainStore.singleTrainObj.isActive,
        airCondition:trainStore.singleTrainObj.airCondition,
        goodsTaker:trainStore.singleTrainObj.goodsTaker,
        Internet:trainStore.singleTrainObj.Internet,
        firstAid:trainStore.singleTrainObj.firstAid,
        familySeats:trainStore.singleTrainObj.familySeats,
        roomVIP:trainStore.singleTrainObj.roomVIP,
        servantIds:servantIds.value,
    }
    // console.log(obj);
    await trainStore.updateTrainAction(obj)
}


</script>

<style scoped>
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-image: url("https://i.imgur.com/GMmCQHC.png");
    background-repeat: no-repeat;
    background-size: 100% 100%
}

.card {
    padding: 30px 40px;
    margin-top: 60px;
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
    text-transform: uppercase;
    font-size: 15px !important;
    font-weight: 400;
    height: 43px;
    cursor: pointer
}

.btn-block:hover {
    color: #fff !important
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}
</style>