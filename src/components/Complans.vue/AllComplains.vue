<template>

    <!-- <div class="card"> -->
    <table class="table">
      <thead>
        {{ complainsStore.complainsObject.data }}
        <tr>
          <th scope="col">Sr#</th>
          <th scope="col">_id</th>
          <th scope="col">complainBy</th>
          <th scope="col">role</th>
          <th scope="col">gender</th>
          <th scope="col">age</th>
          <th scope="col">photo</th>
          <th scope="col">date</th>
          <th scope="col">active</th>
        


          
    
        </tr>
      </thead>
      <tbody>
        <!-- <tr  v-for="(data, index) in UsersStore.usersObjec.data" :key="index"> -->
          <!-- <th scope="row">{{ index+1 }}</th> -->
          <!-- <td>{{ data }}</td> -->
          <!-- <td >{{data.name  }}</td>
          <td>{{data.email  }}</td>
          <td>{{data.role  }}</td>
          <td>{{data.age  }}</td>
          <td>{{data.gender  }}</td>
          <td>{{data.photo  }}</td>
          <td>{{data.Date  }}</td>
          <td>{{data.active  }}</td> -->
        <!-- </tr> -->
        
      </tbody>
    </table>
    <!-- </div> -->
    </template>

<script setup>
import { useComplainsStore } from '../../stores/Complains/complains';


const complainsStore=useComplainsStore();

complainsStore.AllComplainsAction()
</script>