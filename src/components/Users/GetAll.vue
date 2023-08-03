<template>
  
<div class="table-box ">
  
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sr#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(data, index) in UsersStore.usersObjec.data" :key="index" :class="{ 'gray': index % 2 === 0}">
          <th scope="row">{{ index+1 }}</th>
          <td >{{data.name  }}</td>
          <td>{{data.email  }}</td>
          <td>{{data.role  }}</td>
          <td>{{data.age  }}</td>
          <td>{{data.gender  }}</td>
          <td>{{data.photo  }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </template>

<script setup>
import { useUsersStore } from '../../stores/Users/Users';

// timestamp function 
function formateDate(d) {
  
  const date= new Date(d).getDate();
  const month= new Date(d).getMonth();
  const year= new Date(d).getFullYear();

  return `${date}/ ${month}/ ${year}`
 }

const UsersStore=useUsersStore();

UsersStore.AllUsersAction()


</script>
<style scoped>
/* .move{cursor: context-menu;} */
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
.gray{
  background-color: rgb(59 196 126 / 16%);
}</style>