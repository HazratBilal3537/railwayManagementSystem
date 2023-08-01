<template>
    <!-- {{ stationsStore.stationsObject.station[0] }} -->
    <!-- {{ userStore.usersObjec}} -->
    {{stationName}}
    <!-- {{stationsStore.stationsObject.station[0]._id}} -->
    <!-- {{ stationsStore.stationsObject.station[0].servantDetail }} -->

    <div class="container-fluid px-1 pt-1 mt-1 mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-8 col-lg-9 col-md-9 col-11 text-center">
                <h3>👀********🐱‍🏍</h3>
                <div class="card mt-2 px-5">
                    <h5 class="text-center my-4">Update station</h5>
                    <form class="form-card" onsubmit="event.preventDefault()">

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-1">Name<span class="text-danger"> *</span></label> <input
                                    type="text" id="fname" name="fname" placeholder="Enter your first name"
                                   v-model="stationsStore.stationsObject.station[0].name" > </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-1">location<span class="text-danger"> *</span></label> <input
                                    type="text" id="Source" name="Source" placeholder="Enter your last name"
                                    v-model="stationsStore.stationsObject.station[0].location"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label
                                    class="form-control-label px-1">country<span class="text-danger"> *</span></label>
                                <input type="text" id="country" name="country" placeholder="" v-model="stationsStore.stationsObject.station[0].country">
                            </div>
                         
                        </div>
                       
                        <!-- ``````````````````````````` Driver and security````````````````````````` -->

                        <div class="row justify-content-between text-start">
                            <div class="form-group col-sm-6 flex-column "> <label
                                    class="form-control-label px-1">Driver<span class="text-danger"> *</span></label>
                                    <select v-model="driver" class="form-select">
                                    <template v-for="data in userStore.usersObjec.data"  >
                                       
                                        <option v-if="data.role=='driver'" :value="data._id">{{data.name}}</option >

                                    </template>
                                </select>
                            </div>

                            <div class="form-group col-sm-6 flex-column "> <label
                                    class="form-control-label px-1">Security<span class="text-danger"> *</span></label>
                                    <select v-model="security" class="form-select">
                                        <template v-for="data in userStore.usersObjec.data" >
                                            <option v-if="data.role=='security'"  :value="data._id">{{data.name}}</option>
                                    </template>
                                </select>
                            </div>

                        </div>


                        <!-- ``````````````````````````` managerID and engineersId````````````````````````` -->

                        <div class="row justify-content-between text-start my-3">
                            <div class="form-group col-sm-6 flex-column "> <label
                                    class="form-control-label px-1">manager<span class="text-danger"> *</span></label>
                                <select v-model="manager" class="form-select">
                                    <option v-for="data in stationsStore.stationsObject.station[0].servantDetail" :value="data._id" >
                                        <span v-if="data.role=='manager'">{{data.name}}</span>
                                    
                                    </option>
                                </select>
                            </div>

                            <div class="form-group col-sm-6 flex-column "> <label
                                    class="form-control-label px-1">engineersId<span class="text-danger"> *</span></label>
                                    <select v-model="engineer" class="form-select">
                                        <template  v-for="data in userStore.usersObjec.data" key="data.id">
                                            <option v-if="data.role=='engineer'" :value="data._id">
                                            
                                                {{data.name}}
                                            </option>
                                       </template>
                                    
                                </select>
                            </div>
                        </div>

                        <!-- ```````````````````````````````````` is active ````````` -->
                        <div class="row justify-content-between text-start">
                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="stationsStore.stationsObject.station[0].isActive" id="Active">
                                    <label class="form-check-label" for="Active">Active</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="stationsStore.stationsObject.station[0].security" id="Internet">
                                    <label class="form-check-label" for="Internet">Security</label>
                                </div>
                            </div>

                        </div>
                       
                        <div class="row justify-content-between text-start">
                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="stationsStore.stationsObject.station[0].canteen" id="goodsTaker">
                                    <label class="form-check-label" for="goodsTaker">Canteen</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="stationsStore.stationsObject.station[0].restRoom" id="firstAid">
                                    <label class="form-check-label" for="firstAid">RestRoom</label>
                                </div>
                            </div>

                            <div class="form-group col-sm-4 flex-column ">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" v-model="stationsStore.stationsObject.station[0].emergencyRoom" id="familySeats">
                                    <label class="form-check-label" for="familySeats">EmergencyRoom</label>
                                </div>
                            </div>

                        </div>

                        <div class="row justify-content-center">
                            <div class="form-group col-sm-6 mt-4"> <button @click="updateForm()" type="submit" class="btn-block ">Request for
                                    Update</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStationsStore } from '../../stores/Stations/Stations';
import { useUsersStore } from '../../stores/Users/Users';
import { ref } from 'vue';
const stationsStore = useStationsStore();
const userStore=useUsersStore();
// ```````````call for gell all user api```````
userStore.AllUsersAction()
stationsStore.getStationsAction()
let driver=ref()
let security=ref()
let manager=ref('')
let engineer=ref('')


const servantIds= ref([])

const updateForm = async () => {
    
    servantIds.value.push(driver.value)
    servantIds.value.push(security.value)
    servantIds.value.push(manager.value)

    const obj = {
        id:stationsStore.stationsObject.station[0]._id,
        name: stationsStore.stationsObject.station[0].name,
        location: stationsStore.stationsObject.station[0].location,
        country:stationsStore.stationsObject.station[0].country,
        servantIds:servantIds.value,
        engineer:engineer.value,
        isActive:stationsStore.stationsObject.station[0].isActive,
        security:stationsStore.stationsObject.station[0].security,
        canteen:stationsStore.stationsObject.station[0].canteen,
        restRoom:stationsStore.stationsObject.station[0].restRoom,
        emergencyRoom:stationsStore.stationsObject.station[0].emergencyRoom,


    }
    await stationsStore.updateStationAction(obj);
   console.log(obj);

    // name.value = "";
    // countryName.value="";
    // languageSymbol.value = "";
    // isActive.value = "";
    // isEnable.value = "";

   
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
.card label{
    text-align: left;
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
    text-transform: uppercase;
    font-size: 15px !important;
    font-weight: 400;
    height: 43px;
    cursor: pointer;
    border-radius: 100px !important;
    box-shadow: 0px 6px 16px -1px rgba(19, 0, 0, 0.5);
    background-color: #3bc47e;

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

textarea[data-v-d394cde1],
button[data-v-d394cde1] {
    border-radius: 59px !important;

}
</style>