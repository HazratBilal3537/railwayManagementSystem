<template>
  <div class="header">
    <Header></Header>
  </div>
  <div class="container-fluid px-0 ">
    <div class="row flex-nowrap gx-0 ">
      <div class="sideBar col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

        <SideBar></SideBar>
      </div>
<!-- button on small scrrem for side bar -->
      <button class="btn sideModel " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample">
        <i class="bi bi-justify fs-3"></i>
      </button>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-white" id="offcanvasExampleLabel">Hello &nbsp;Manager</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <SideBar></SideBar>
        </div>
      </div>
      <div class="col view-body" style="margin-top: 5rem; padding-left: 2rem;padding-right: 2rem;">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
      
      
<script setup>
import { RouterLink, useRoute, RouterView } from "vue-router";
import SideBar from "./SideBar.vue";
import Header from "./Header.vue";

</script>
<style scoped>
.sideModel {
  /* position: none; */
  display: none;
}
.offcanvas-start{
  width: 260px;
  background-color: #258925;
}

@media screen and (max-width: 872px) {
  .sideBar {
    display: none !important;
  }

  .sideModel {
    left: 0%;
    display: inline-block;
    position: fixed;
    top: 0.6rem;
    z-index: 1000;
    width: 8rem;
  }
  .view-body{
    padding-left: 0.3rem !important ;
    padding-right: 0.4rem !important;
  }
}
</style>