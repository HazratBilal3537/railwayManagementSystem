import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/',
          name: "home",
          component: () => import('../views/Auth/LoginVue.vue')
        },
        {
          path: '/signup',
          name: "signup",
          component: () => import('../views/Auth/SignUpView.vue')
        },
        {
          path: '/dashboard',
          name: "dashboard",
          // redirect:'/stations',
          component: () => import('../views/DashBoard/DashBoardView.vue'),
          children:[
            {
              path: 'allusers',
              name: "Allusers",
              component: () => import('../views/Users/AllUsersView.vue')
            },
            {
              path: 'passengerbooking',
              name: "Passengerbooking",
              component: () => import('../views/Booking/PassengerBookingView.vue')
            },
            {
              path: 'createbooking',
              name: "createbooking",
              component: () => import('../views/Booking/CreateBookingView.vue')
            },
            {
              path: 'updatebooking/:id',
              name: "updatebooking",
              component: () => import('../views/Booking/UpdateBookingView.vue')
            },
            {
              path: 'pendingbooking',
              name: "pendingbooking",
              component: () => import('../views/Booking/PendingBookingView.vue')
            },
            {
              path: 'SeeOneBooking/:id',
              name: "SeeOneBooking",
              component: () => import('../views/Booking/SeeOneBookingView.vue')
            },
            {
              path: 'allcomplans',
              name: "allcomplans",
              component: () => import('../views/ComplainsView.vue/AllComplainsView.vue')
            },
            {
              path: 'reviews',
              name: "reviews",
              component: () => import('../views/Reviews/ReviewsView.vue')
            },
            {
              path: 'singlereview/:id',
              name: "reviewdetail",
              component: () => import('../views/Reviews/SingleReviewView.vue')
            },
            {
              path: 'transactions',
              name: "transactions",
              component: () => import('../views/Transactions/TransactionsView.vue')
            },
            {
              path: 'stations',
              name: "stations",
              component: () => import('../views/Stations/StationsView.vue')
            },
            {
              path: 'updatestation',
              name: "Updatestation",
              component: () => import('../views/Stations/UpdateStationView.vue')
            },
            {
              path: 'trains',
              name: "trains",
              component: () => import('../views/Trains/TrainsView.vue')
            },
            {
              path: 'updatetrain/:id',
              name: "updatetrain",
              component: () => import('../views/Trains/UpdateTrainView.vue')
            },
            {
              path: 'seeonetrain/:id',
              name: "seeonetrain",
              component: () => import('../views/Trains/SeeOneTrainView.vue')
            },
            {
              path: 'createtrain',
              name: "createtrain",
              component: () => import('../views/Trains/CreateTrainView.vue')
            },
            {
              path: 'updateme',
              name: "UpdateMe",
              component: () => import('../views/Auth/UpdateMeView.vue')
            },
            {
              path: 'updatepassword',
              name: "UpdatePassword",
              component: () => import('../views/Auth/UpdatePasswordView.vue')
            },
            {
              path: 'alltrips',
              name: "AllTrips",
              component: () => import('../views/Trips/AllTripsView.vue')
            },
            {
              path: 'singletrip/:id',
              name: "SinglTrip",
              component: () => import('../views/Trips/SingleTripsView.vue')
            },
            {
              path: 'updatetrips/:trip*',
              name: "UpdateTrips",
              component: () => import('../views/Trips/UpdateTripsView.vue')
            },
            {
              path: 'createtrips',
              name: "CreateTrips",
              component: () => import('../views/Trips/CreateTripsView.vue')
            },
            {
              path: 'alltickets',
              name: "AllTickets",
              component: () => import('../views/Tickets/AllTicketsView.vue')
            },
          ]
        },
        
        
        
  ]
})

export default router
