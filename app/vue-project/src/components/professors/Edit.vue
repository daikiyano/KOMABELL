<template>
  <div class="home">
    <el-tabs @tab-click="handleClick">
    <el-tab-pane label="アカウント情報" name="Profile"></el-tab-pane>
    <el-tab-pane label="スケジュール調整" name="Schedule"></el-tab-pane>
  </el-tabs>
  <component 
      :is="currentView" 
      :professor="this.professor" 
      :labelPosition="this.labelPosition" 
      :user="this.user"
      :Isdisabled="this.Isdisabled"
      @ChangeEditInput="ChangeEditInput"
      @ChangeDisable="ChangeDisable"
      >
      
  </component>            
  </div>
</template>
<script>
import db from '../../../firebase/init.js'
import firebase from 'firebase'
import Profile from './Profile.vue'
import Schedule from './Schedule.vue'

/* eslint-disable no-console */
export default {
  name: "ProfessorEdit",
  components: {
    Profile,
    Schedule
  },
  data () {
    return {
      currentView: 'Profile',
      professor: {},
      user : {},
      labelPosition: 'top',
      Isdisabled : true
    }
  },
  methods: {
    handleClick(tab) {
        console.log(tab.name);
         this.currentView = tab.name
    },
    ChangeDisable(Isdisabled) {
      this.Isdisabled = Isdisabled
    },
   
    ChangeEditInput (UpdateInput) {
      this.professor = UpdateInput
      let currentUser = firebase.auth().currentUser
      let self = this
      db.collection("professors").where("user_id", "==", currentUser.uid)
      .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            db.collection('professors').doc(doc.id).update({
              name: self.professor.name, 
              comment: self.professor.comment
            })
            .then(() => {
              self.$message({
              message: 'プロフィールを更新しました！',
              type: 'success'
            });
              self.Isdisabled = true
            }).catch(err => {
              console.log(err)
            })
          });
        })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
    }
  },
  created(){
    let self = this
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user.uid)
      self.user = user;
      let ref = db.collection('professors').where('user_id', '==',user.uid)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          self.professor = doc.data()
          
        })
        console.log(self.user)
      })
    } else {
      console.log("hey")
    }
});
   
    
}
}

</script>
