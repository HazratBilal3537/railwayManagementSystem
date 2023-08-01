<template>
 <table class="table">
    <thead>
      <tr >
        <th scope="col">id</th>
        <th scope="col">passengerId</th>
        <th scope="col">Station Id</th>
        <th scope="col">trainId</th>
        <th scope="col">distance</th>
        <th scope="col">distancePrize</th>
        <th scope="col">goods</th>
        <th scope="col">goodsPrize</th>
        <th scope="col">totalPrize</th>
        <th scope="col">active</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in bookingStore.seeOneBookingObj" :key="index">
        <td>{{ data._id }}</td>
        <td>{{ data.passengerId }}</td>
        <td>{{ data.stationId }}</td>
        <td>{{ data.trainId }}</td>
        <td>{{ data.distance }}</td>
        <td>{{ data.distancePrize }}</td>
        <td>{{ data.goods }}</td>
        <td>{{ data.goodsPrize }}</td>
        <td>{{ data.totalPrize }}</td>
        <td>{{ data.isActive }}</td>
      </tr>

    </tbody>
  </table>
</template>
<script setup>

import { useBookingStore } from '../../stores/Booking/Booking';
import { RouterLink,useRoute } from "vue-router";


const route=useRoute()
const bookingStore = useBookingStore();
//`````````````````````````````````````````````` get id from url
const id = route.params.id;

  bookingStore.seeOneBookingAction(id)


</script>

