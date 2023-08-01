<template>
  <div class="table-box ">

    <table class="table">
      <thead>
        <!-- {{ tripsStore.allTripsData }} -->
        <tr>
          <th scope="col">Sr#</th>
          <th scope="col">Train Name#</th>
          <th scope="col">TripNo</th>
          <th scope="col">Title</th>
          <th scope="col">Source</th>
          <th scope="col">Destination</th>
          <th scope="col">DepartureTime</th>
          <th scope="col">ArrivalTime</th>
          <th scope="col">Distance</th>
          <th scope="col">Manage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in tripsStore.allTripsData" :key="index" :class="{ 'gray': index % 2 === 0 }">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ data.trainsDetail[0].name }}</td>
          <td>{{ data.TripNo }}</td>  
          <td>{{ data.title }}</td>
          <td>{{ data.source }}</td>
          <td>{{ data.destination }}</td>
          <td>{{ data.departureTime }}</td>
          <td>{{ data.arrivalTime }}</td>
          <td>{{ data.distance }}</td>
          <td>
            <div class="dropdown">
              <button class="btn btn-toggle p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <!-- <li><button class="dropdown-item" @click="singleTripDetail(data._id)">More Detail</button></li> -->
                <li><button class="dropdown-item" @click="updateTrips(data)">Update</button></li>
                <li><button class="dropdown-item delete-btn" @click="delleteTrip(data._id)">Delete</button></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useTripsStore } from '../../stores/Trips/Trips';
import router from '../../router';
import { useStationsStore } from '../../stores/Stations/Stations';
const stationsStore = useStationsStore();
stationsStore.getStationsAction()
// console.log(stationsStore.singleStationObj._id);
const tripsStore = useTripsStore()
// single Trip 
function singleTripDetail(id) {
  router.push('/dashboard/singletrip/' + id)
}
// update Trips funciton
const updateTrips = (id) => {
  // const tripObj=tripsStore.allTripsData.find(item=>item._id===id);
  const obj = JSON.stringify(id);
  router.push(`/dashboard/updatetrips/${obj}`)
}
// Delete function for trips 
const delleteTrip = (id) => {
  tripsStore.deleteTripsAction(id)
}


tripsStore.AllTripsAction()
</script>

<style scoped>
.table-box {
  padding: 1rem auto;
  border: 1px solid rgb(191, 191, 191);
  border-radius: 8px;
  /* overflow-x: hidden; */
}

.gray {
  background-color: rgb(59 196 126 / 16%);
}

.btn-check:focus+.btn,
.btn:focus {
  outline: 0;
  box-shadow: none;
}

.delete-btn:hover {
  background-color: rgb(217, 25, 25) !important;
}

.dropdown-item:focus,
.dropdown-item:hover {
  color: #ffffff;
  background-color: #3bc47e;
}</style>