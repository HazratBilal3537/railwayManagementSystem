<template>
 
    <div class="bg-img">
        <div class="card-box">
            <div class="card">
                <div class="image-box">
                    <!-- <img class="img-fluid mb-2" src="../../assets/images/RelwaySign.jpg" alt=""> -->
                </div>
                <div class="passengerDetail">Review</div>
                <div class=" detail-body">
                    <div>Content: <span> {{ ReviewsStore.singlereviewsObject.review }}</span></div>
                    <!-- <div>Active: <span> {{ ReviewsStore.singlereviewsObject.isActive }}</span></div> -->
                    <div>created: <span> {{ formateDate(ReviewsStore.singlereviewsObject.createdAt) }}</span></div>
                    <div>rating: <span> {{ ReviewsStore.singlereviewsObject.rating }}</span></div>
                </div>
            </div>
            <div class="card">
                <div class="passengerDetail">passengerDetail</div>
                <div class=" detail-body">
                    <div>Name: <span> {{ ReviewsStore.passengerDetailGetter?.name }}</span></div>
                    <div>Role: <span> {{ ReviewsStore.passengerDetailGetter?.role }}</span></div>
                    <div>Genger: <span> {{ ReviewsStore.passengerDetailGetter?.gender }}</span></div>
                    <!-- <div>Age: <span> {{ ReviewsStore.passengerDetailGetter?.age }}</span></div> -->
                </div>
            </div>
            <div class="card">
                <div class="trainDetail">TripDetail</div>
                <div class=" detail-body">
                    <div>Title: <span> {{ ReviewsStore.singlereviewsObject.tripDetail?.title }}</span></div>
                    <div>Source: <span> {{ ReviewsStore.singlereviewsObject.tripDetail?.source }}</span></div>
                    <div>Destination: <span> {{ ReviewsStore.singlereviewsObject.tripDetail?.destination }}</span>
                    </div>
                    <!-- <div>Price: <span> {{ ReviewsStore.singlereviewsObject.tripDetail?.price }}</span></div> -->
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>


<script setup>
import { useReviewsStore } from '../../stores/Reviews/Reviews';
import { useRoute } from 'vue-router';
// timestamp function 
function formateDate(d) {

    const date = new Date(d).getDate();
    const month = new Date(d).getMonth();
    const year = new Date(d).getFullYear();

    return `${date}/ ${month}/ ${year}`
}

const ReviewsStore = useReviewsStore();
//`````````````````````````````````````````````` get id from url
const route = useRoute()
const id = route.params.id;

ReviewsStore.singleReview(id)
</script>
<style scoped>
.card-box {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
}

.bg-img {
    background-image: url("../../assets/images/bg-3.jpg");
    /* height: 56rem; */
    /* height: 80vh; */
    width: 100%;
    background-size: cover;

}

.card {
    background: rgba(255, 255, 255, 0.609);
    /* display: flex; */
    /* margin: auto auto; */
    width: 30%;
    /* padding: 1rem 1.5rem; */
    box-shadow: 0 -0.5rem 1rem rgba(0 0 0 / 0.15);
    border-radius: 4px;
}

.card span {
    font-weight: normal;
}

.card div {
    font-weight: 700;
}

.image-box image {
    height: 100%;
    width: 10%;
    background-size: cover;
}

.detail-body {
    padding: 1.5rem;
}

.passengerDetail,
.trainDetail {
    /* margin: 5px auto; */
    /* text-align: center; */
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #64d89d;
    width: 100%;
    ;
    color: white;
    padding: 1rem 1.5rem;
}
</style>