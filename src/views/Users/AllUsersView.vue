<template>
       <Suspense>
        <template #default>
    <asyncShowUers></asyncShowUers>
</template>
<template #fallback>
   <h1>Looding...</h1>
</template>
</Suspense>
    </template>
    
    <script setup>
    import { defineAsyncComponent } from 'vue';
 
    // Async component
    const asyncShowUers=defineAsyncComponent(()=>
    import('../../components/Users/GetAll.vue')
    );
    
    
    
    </script>
    
    <style scoped></style>



<!-- <template> -->
    <!-- <Suspense> -->
        <!--````````````````` component with nested async dependencies -->
        <!-- <asyncShowUers /> -->

        <!-- ``````````````loading state via #fallback slot -->
   <!--     <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

 <script setup>
import { defineAsyncComponent } from 'vue';

//`````````````` Async component
const asyncShowUers = defineAsyncComponent(() =>
    import('../Users/AllUsersView.vue')
);
</script> -->
