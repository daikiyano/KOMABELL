<template>
  <div id="app">

    <NavBar/>
    <router-view/>

  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
  data () {
    return {
      
    }
  },
  methods:{
    
  }
  
}


</script>


<style>
html {
background-color: rgba(0, 0, 0, 0);
}
</style>
