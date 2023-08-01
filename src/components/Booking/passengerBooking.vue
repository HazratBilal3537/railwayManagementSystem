<template>
  <!-- {{  bookingStore.allBookingData.booking }} -->
  <div class="table-box ">
  <table class="table" >
    <thead> 
      <tr>
        <th scope="col">Sr#</th>
        <th scope="col">Name</th>
        <th scope="col">BookingNo</th>
        <!-- <th scope="col">Role</th> -->
        <th scope="col">Gender</th>
        <!-- <th scope="col">Age</th> -->
        <th scope="col">Station&nbsp;Name</th>
        <th scope="col">TripNo</th>
        <th scope="col">Titile</th>
        <th scope="col">Source</th>
        <th scope="col">Destination</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in bookingStore.allBookingData.booking" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ data.userDetail.name }}</td>
        <td>{{ data.BookingNo }}</td>
        <!-- <td>{{ data.userDetail.role }}</td> -->
        <td>{{ data.userDetail.gender }}</td>
        <!-- <td>{{ data.userDetail.age }}</td> -->
        <td>{{ data.stationDetail.name }}</td>
        <td>{{ data.tripDetail.TripNo }}</td>
        <td>{{ data.tripDetail.title }}</td>
        <td>{{ data.tripDetail.source }}</td>
        <td>{{ data.tripDetail.destination }}</td>
        <td>{{ data.tripDetail.price }}</td>
      </tr>
    </tbody>
  </table>
 
  </div>
</template>
<script setup>
import { useBookingStore } from '../../stores/Booking/Booking';
import router from '../../router/index'

/////////// see one booking function
function OneBookingDetail(id) {
  router.push('/SeeOneBooking/' + id)
}

const bookingStore = useBookingStore();
/////////// delete booking function
 function deleteBooking(id) {
  bookingStore.deleteBookingAction(id)
}


bookingStore.AllBookingAction()
</script>
<style scoped>
.table-box {
  padding: 1rem auto;
  border: 1px solid rgb(191, 191, 191);
  border-radius: 8px;
  /* overflow-x: hidden; */
overflow-x: scroll;
/* z-index: -11; */

}

</style>