<template>
  <div v-if="ticketsStore.allTicketsObj.length > 0">
    <div class="table-box ">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr#</th>
            <th scope="col">TicketNo</th>
            <th scope="col">price</th>
            <th scope="col">station&nbsp;Name</th>
            <th scope="col">Booking&nbsp;No</th>
            <th scope="col">Passenger&nbsp;Name</th>
            <th scope="col">TripNo</th>
            <th scope="col">Trip&nbsp;title</th>
            <th scope="col">Distance</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in ticketsStore.allTicketsObj" :key="index" :class="{ 'gray': index % 2 === 0 }">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ data.TicketNo }}</td>
            <td>{{ data.price }}</td>
            <td>{{ data.stationDetail.name }}</td>
            <td>{{ data.bookingDetail.BookingNo }}</td>
            <td>{{ data.passengerDetail.name }}</td>
            <td>{{ data.tripDetail.TripNo }}</td>
            <td>{{ data.tripDetail.title }}</td>
            <td>{{ data.tripDetail.distance }}</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-toggle p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <!-- <li><button class="dropdown-item" @click="singleTripDetail(data._id)">More Detail</button></li> -->
                  <li><button class="dropdown-item" @click="updateTrips(data._id)">Update</button></li>
                  <li><button class="dropdown-item delete-btn" @click="delleteTicket(data._id)">Delete</button></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    <div v-else>
      <h1 class="text-center">NO DATA FOUND 😒</h1>
    </div>
  </template>
  <script setup>
  import { useTicketsStore } from '../../stores/Tickets/Tickets';
  import router from '../../router';
  const ticketsStore = useTicketsStore()
    //`````````````````````````````` single Trip 
    // function singleTripDetail(id) {
    //       router.push('/singletrip/' + id)
    //     }

  //```````````` Delete function for trips 
  const delleteTicket = (id) => {
    ticketsStore.deleteTicketAction(id)
  }

ticketsStore.getAllTicketsAction()
  
  </script>
  
  <style scoped>
  .table-box {
    padding: 1rem auto;
    border: 1px solid rgb(191, 191, 191);
    border-radius: 8px;
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