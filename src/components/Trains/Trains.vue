<template>
<div class="table-box ">

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sr#</th>
          <th scope="col">Name</th>
          <th scope="col">RoomVIP</th> 
          <th scope="col">Boxes</th>
          <th scope="col">FamilySeats</th> 
          <th scope="col">TotalSeats</th>
          <th scope="col">EngineerName</th> 
          <th scope="col">Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in trainsStore.allTrainsObject.data" :key="index" :class="{ 'gray': index % 2 === 0}">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ data.name }}</td>
          <td>{{ available(data.roomVIP )}}</td> 
          <td>{{ data.boxes }}</td>
          <td>{{ available(data.familySeats )}}</td>
          <td>{{ data.totalSeats }}</td>
          <td >{{ data.engineerDetail[0].name }}</td>
          <td ><div :style="{backgroundColor:data.color, color:'white',width:'1.5rem',height:'1.5rem',borderRadius:'100px'}"></div></td>
        </tr>
  
      </tbody>
    </table>
    </div>
  </template>
  
  <script setup>
  import { useTrainsStore } from '../../stores/Trains/Tranins';
  import router from '../../router/index'
  import { ref } from 'vue';


  /////////// color train function
  // function trainColor(val){
  //   let value= val.toLowerCase()
  //   console.log(value);
  //   return this.value=bgColor.value
  // }

  //  available or not functin
function available(val){
    return val? 'Available':'Not-Available'
}
  
  const trainsStore = useTrainsStore();

  
  trainsStore.getTrainsAction()

  </script>
  <style scoped>
  .table-box{
  padding: 1rem auto;
  border: 1px solid rgb(191, 191, 191);
  border-radius: 8px;
  overflow-x: scroll;
  /* cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>") 16 0,auto;  */
}
.table>:not(caption)>*>* {
    padding: 1rem 0.5rem;
}
  button{
    border-radius: 5px;
    border: none;
    padding: .7rem 1.5rem;
  }
  .gray{
  background-color: rgb(59 196 126 / 16%);
}
</style>