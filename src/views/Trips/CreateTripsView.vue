<template>
       
    <asyncShowUers></asyncShowUers>
    </template>
    
    
    <script setup>
    import { defineAsyncComponent } from 'vue';
 
    // Async component
    const asyncShowUers=defineAsyncComponent(()=>
    import('../../components/Trips/CreateTrips.vue')
    );
    
    
    
    </script>
    
    <style scoped></style>