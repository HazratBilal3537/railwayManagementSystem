<template>
       
    <asyncShowUers></asyncShowUers>
    </template>
    
    
    <script setup>
    import { defineAsyncComponent } from 'vue';
  
    // Async component
    const asyncShowUers=defineAsyncComponent(()=>
    import('../../components/Booking/PendingBooking.vue')
    );
    
    
    
    </script>
    
    <style scoped></style>