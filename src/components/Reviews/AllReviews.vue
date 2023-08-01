<template>
  <!-- {{ ReviewsStore.reviewsObject.data.length }} -->
  <!-- <div v-if="ReviewsStore.reviewsObject.data?.length > 0"> -->
    <div class="table-box text-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr#</th>
            <th scope="col">Passenger&nbsp;Name</th>
            <th scope="col">Role</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Rating</th>
            <th scope="col">UpdateDate</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in ReviewsStore.reviewsObject.data" :key="index" :class="{ 'gray': index % 2 === 0 }">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ data.passengerDetail.name }}</td>
            <td>{{ data.passengerDetail.role }}</td>
            <td>{{ formateDate(data.createdAt) }}</td>
            <td>{{ data.rating }}</td>
            <td>{{ formateDate(data.updatedAt) }}</td>
            <td><button @click="singleReview(data._id)">See&nbsp;more</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  <!-- </div> -->

  <!-- <div v-else>
    <h1 class="text-center">No Review Yet 😒</h1>
  </div> -->
</template>


<script setup>
import { useReviewsStore } from '../../stores/Reviews/Reviews';
import router from '../../router';
// timestamp function 
function formateDate(d) {

  const date = new Date(d).getDate();
  const month = new Date(d).getMonth();
  const year = new Date(d).getFullYear();

  return `${date}/ ${month}/ ${year}`
}

/////////// see one reviewdetail function
function singleReview(id) {
  router.push('/dashboard/singlereview/' + id)
}
const ReviewsStore = useReviewsStore();
ReviewsStore.AllReviewsAction()
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
  font-weight: normal;
}

.passengerDetail,
.trainDetail {
  margin: 5px auto;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
}
tbody button {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #3bc47e;
  border: none;
  color: white;
}
tbody button:hover {
  /* border:1px solid green; */
  background-color: rgb(44, 162, 26);
  color: #ffffff;
  transform: scale(1.07);
}
.gray {
  background-color: rgb(59 196 126 / 16%);
}
.table-box {
  padding: 1rem auto;
  border: 1px solid rgb(191, 191, 191);
  border-radius: 8px;
  overflow-x: scroll;
}
</style>