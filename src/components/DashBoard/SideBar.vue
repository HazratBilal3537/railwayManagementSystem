<template>
    <!-- side bar for large scrren -->
    <div class="sideBar w-100 d-flex flex-column align-items-center pt-2 text-white min-vh-100">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li class="nav-item">
                <router-link to="/dashboard/allusers" class="nav-link px-0"><i class="bi bi-person-lines-fill pe-2"></i> All
                    Users</router-link>
            </li>
            <li class="nav-item">
                <!-- <router-link to="/allcomplans" class="nav-link px-0">  All Complains</router-link> -->
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/reviews" class="nav-link px-0"><i class="bi bi-chat-quote-fill"></i> All
                    Reviews</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/stations" class="nav-link px-0"><i class="bi bi-houses"></i>
                    Stations</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/passengerbooking" class="nav-link px-0"><i class="bi bi-people-fill"></i>
                    Passenger Booking</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/pendingbooking" class="nav-link px-0"><i class="bi bi-bookmarks-fill"></i>
                    Pending Booking</router-link>
            </li>

            <li class="nav-item">
                <router-link to="/dashboard/trains" class="nav-link px-0"><i class="bi bi-train-front-fill"></i> All Trains</router-link>
            </li>
            <li>
                <!-- <router-link to="/dashboard/createtrain" class="nav-link px-0"><i class="bi bi-train-lightrail-front"></i>
                    Create Trains</router-link> -->
            </li>
            <li>
                <router-link to="/dashboard/alltrips" class="nav-link px-0"><i class="bi bi-train-lightrail-front"></i> All
                    Trips</router-link>
            </li>
            <li>
                <!-- <router-link to="/dashboard/createtrips" class="nav-link px-0"><i class="bi bi-train-lightrail-front"></i>
                    Create Trips</router-link> -->
            </li>
            <li>
                <router-link to="/dashboard/alltickets" class="nav-link px-0"><i class="bi bi-train-lightrail-front"></i>
                    All Tickets</router-link>
            </li>
        </ul>
    </div>

    <!-- sidebar for small sfcreen   -->

    <div class="sideModel w-100 d-flex flex-column align-items-center pt-2 text-white min-vh-100">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li class="nav-item">
                <router-link to="/dashboard/allusers" class="nav-link px-0"><i class="bi bi-person-lines-fill pe-2"></i> All
                    Users</router-link>
            </li>
            <li class="nav-item">
                <!-- <router-link to="/allcomplans" class="nav-link px-0">  All Complains</router-link> -->
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/reviews" class="nav-link px-0"><i class="bi bi-chat-quote-fill"></i> All
                    Reviews</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/stations" class="nav-link px-0"><i class="bi bi-houses"></i>
                    Stations</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/passengerbooking" class="nav-link px-0"><i class="bi bi-people-fill"></i>
                    Passenger Booking</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/pendingbooking" class="nav-link px-0"><i class="bi bi-bookmarks-fill"></i>
                    Pending Booking</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/trains" class="nav-link px-0"><i class="bi bi-train-front-fill"></i> All Trains</router-link>
            </li>
            <li>
                <!-- <router-link to="/dashboard/createtrain" class="nav-link px-0"><i class="bi bi-train-lightrail-front"></i>
                    Create Trains</router-link> -->
            </li>
            <li>
                <router-link to="/dashboard/alltrips" class="nav-link px-0"><i class="bi bi-train-lightrail-front"></i> All
                    Trips</router-link>
            </li>
            <li>
                <!-- <router-link to="/dashboard/createtrips" class="nav-link px-0"><i class="bi bi-train-lightrail-front"></i>
                    Create Trips</router-link> -->
            </li>
            <li>
                <router-link to="/dashboard/alltickets" class="nav-link px-0"><i class="bi bi-train-lightrail-front"></i>
                    All Tickets</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sideModel {
    display: none !important;
}

/* @media screen and (max-width: 872px) {
    .sideBar{
    display: none !important;
}
} */
.nav-link {
    /* display: block; */
    padding: 0.5rem 1rem;
    color: #ffffff;
    text-decoration: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
}
.nav-pills {
    position: fixed;
    top: 5rem;
}
a.router-link-active {
    /* color: red; */
    width: 100%;
    background-color: #3bc47e;
}

ul li {
    width: 100%;
}

ul li a {
    padding-left: 2rem !important;
    padding-right: 4rem !important
}

@media screen and (max-width: 1500px) {
    ul li a {
        padding-left: 2rem !important;
        padding-right: 3rem !important
    }
}

@media screen and (max-width: 1404px) {
    ul li a {
        padding-left: 2rem !important;
        padding-right: 1rem !important
    }
}

@media screen and (max-width: 1215px) {
    ul li a {
        padding-left: 1rem !important;
        padding-right: 0rem !important
    }

    @media screen and (max-width: 1200px) {
        ul li a {
            padding-left: 2rem !important;
            padding-right: 4rem !important
        }
    }

    @media screen and (max-width: 1000px) {
        ul li a {
            padding-left: 2rem !important;
            padding-right: 2rem !important
        }
    }
}</style>