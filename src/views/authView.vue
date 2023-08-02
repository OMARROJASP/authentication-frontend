<template>
    <div class="container">
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
 
  <button type="submit" class="btn btn-primary mt-2">Submit</button>

</form>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref("");
const password = ref("");
</script>

<style lang="scss" scoped>

</style>