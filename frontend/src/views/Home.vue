<template>
    <div>
    <div class="container-fluid">
      <div class="dashboard">
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img src="https://a.storyblok.com/f/39898/1024x1024/dea4e1b62d/vue-js_logo-svg.png" width="40" height="40">
          </a>
          <div>
            <img :src="$auth.user.picture" width="30" height="30">
            <span class="text-muted font-weight-light px-2">{{$auth.user.name}}</span>
            <button type="button" class="btn btn-outline-secondary btn-sm" @click="$auth.logout()">Logout</button>
          </div>
        </nav>

        <br><br>
        App Main Page
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from "lodash";
import io from "socket.io-client";

export default {
  name: 'BlockGame',
  data() {
    return {
    }
	},
}
</script>

<style scoped>
</style>