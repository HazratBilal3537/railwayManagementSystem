<template>
       
    <asyncShowUers></asyncShowUers>
    </template>
    
    
    <script setup>
    import { defineAsyncComponent } from 'vue';
  
    // Async component
    const asyncShowUers=defineAsyncComponent(()=>
    import('../../components/auth/UpdateMe.vue')
    );
    
    
    
    </script>
    
    <style scoped></style>