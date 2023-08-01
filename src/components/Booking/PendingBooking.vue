<template>
    <!-- {{ bookingStore.pendingBookingData }} -->
    <div class="table-box ">

    <table class="table px-5">
        <thead>
            <tr>
                <th scope="col">Sr#</th>
                <th scope="col">BookingNo</th>
                <th scope="col">Create Date</th>
                <th scope="col">Updated Date</th>
                <!-- <th scope="col">Enable</th>
                <th scope="col">Active</th>
                <th scope="col">Approve</th> -->
                <th scope="col">Approved</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in bookingStore.pendingBookingData" :key="index"  :class="{ 'gray': index % 2 === 0}">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ data.BookingNo }}</td>
                <td>{{formateDate(data.createdAt) }}</td>
                <td>{{ formateDate(data.updatedAt) }}</td>
                <!-- <td>{{ data.isEnable }}</td>
                <td>{{ data.isActive }}</td>
                <td>{{ data.isApproved }}</td> -->
                <td>
                    <div class="form-check form-switch">
                        <input class="form-check-input " type="checkbox"  @change="updateBooking(data._id)" id="roomVIP">
                    </div>
                </td>
             </tr>
        </tbody>
    </table>
    </div>
</template>


<script setup>
import { useBookingStore } from '../../stores/Booking/Booking';
import {formateDate} from '../../Composable/index'
// const jsDate=formateDate()
const bookingStore = useBookingStore()
bookingStore.PendingBookingAction()


const updateBooking = async (id) => {
   let isApproved= bookingStore.pendingBookingData.find(item=>item._id===id).isApproved=true;
    const obj = {
        _id:id,
        isApproved:isApproved
    }
    
await bookingStore.updateBookingAction(obj)
}
</script>
<style scoped>
.table-box{
    /* text-align: center; */
  padding: 1rem auto;
  border: 1px solid rgb(191, 191, 191);
  border-radius: 8px;
  overflow: scroll;
}
.gray{
  background-color: rgb(59 196 126 / 16%);
}
.form-check-input:checked {
    background-color: #3bc47e;
    border-color: #3bc47e;
}
.form-check-input:focus {
   box-shadow:none
}
</style>