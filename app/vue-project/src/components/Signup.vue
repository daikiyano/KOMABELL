<template>
  <div class="signup">
    <h2>Sign up</h2>
    <el-input placeholder="Please input" v-model="username"></el-input>
    <el-input placeholder="Please input password" v-model="password" show-password></el-input>
    <button @click="signUp"> Rregister</button>
    <p>Do you have account?
      <router-link to="/signin">sign in now!!</router-link>
    </p>
  </div>
</template>


<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account:', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weigh: normal;
}
ul{
  list-style-type: none;
  padding: 0;
}
li {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup{
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
