<template>
    <div style="display: flex; flex-wrap: wrap;">
        <!-- {{ transactonsStore.transactionsObject.data }} -->
        <div class="card" v-for="(data, index) in transactonsStore.transactionsObject.data" :key="index">
            <div>
                <div class="text-center fs-5 fw-bold">#Sr:<span> {{ index + 1 }}</span></div>
                <div> <span> id:</span> {{ data._id }}</div>
                <div> <span> carNo:</span> {{ data.carNo }}</div>
                <div> <span> status:</span> {{ data.status }}</div>
    
                <hr>
                <div class="passengerDetail">passengerDetail</div>

                <div> <span> id:</span> {{ data.passengerDetail._id }}</div>
                <div> <span> Name:</span> {{ data.passengerDetail.name }}</div>
                <div> <span> Role:</span> {{ data.passengerDetail.role }}</div>

                <div> <span> Genger:</span> {{ data.passengerDetail.gender }}</div>
                <div> <span> Age:</span> {{ data.passengerDetail.age }}</div>

                <hr>
                <div class="BookingDetail">BookingDetail</div>

                <div> <span> id:</span> {{ data.bookingDetail._id }}</div>
                <div> <span> distance:</span> {{ data.bookingDetail.distance }}</div>
                <div> <span> goods:</span> {{ data.bookingDetail.goods }}</div>
                <div> <span> totalPrize:</span> {{ data.bookingDetail.totalPrize }}</div>
                <div> <span> trianId:</span> {{ data.bookingDetail.trianId }}</div>
                <div> <span> stationId:</span> {{ data.bookingDetail.stationId }}</div>

            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script setup>
import { useTransactonsStore } from '../../stores/Transactions/Transations';


const transactonsStore = useTransactonsStore();

transactonsStore.allTransactionsActions()
</script>
<style scoped>
.card {
    background: rgba(255, 255, 255, 0.609);
    /* display: flex; */
    margin: 3rem auto;
    width: 30%;
    padding: 1.5rem;
    box-shadow: 0 -0.5rem 1rem rgba(0 0 0 / 0.15);
    border-radius: 4px;
}

.card span {
    font-weight: 700;
}

.passengerDetail,
.BookingDetail {
    margin: 5px auto;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
}
</style>