<template>
  <div class="home">
    <el-tabs @tab-click="handleClick">
    <el-tab-pane label="アカウント情報" name="Profile"></el-tab-pane>
    <el-tab-pane label="スケジュール調整" name="Schedule"></el-tab-pane>
  </el-tabs>
  <component :is="currentView"></component>
    <el-card style="width:80%; margin: 0 auto; background-color: rgba(0, 0, 0, 0);" class="box-card">
      <el-form :label-position="labelPosition" label-width="100px">
        <!-- <el-input :disabled="true" v-model="professor.major"></el-input> -->
        <el-form-item label="学部学科">
        <span v-if="professor.major===1">仏教学部禅学科</span>
        <span v-else-if="professor.major===2">文学部国文学科</span>
         <span v-else-if="professor.major===3">文学部地理学科</span>
          <span v-else-if="professor.major===4">文学部社会学科</span>
          <span v-else-if="professor.major===5">文学部英米文学科</span>
                <span v-else-if="professor.major===6">文学部歴史学科</span>
                <span v-else-if="professor.major===7">文学部心理学科</span>
                <span v-else-if="professor.major===8">経済学部経済学科</span>
                <span v-else-if="professor.major===9">経済学部商学科</span>
                <span v-else-if="professor.major===10">経済学部現代応用経済学科</span>
                <span v-else-if="professor.major===11">法学部法律学科</span>
                <span v-else-if="professor.major===12">法学部政治学科</span>
                <span v-else-if="professor.major===13">経営学部経営学科</span>
                <span v-else-if="professor.major===14">経営学部市場戦略学科</span>
                <span v-else-if="professor.major===15">医療健康科学部診療放射線技術科学学科</span>
                <span v-else-if="professor.major===16">グローバルメディアスタディーズ学部グローバルメディアスタディーズ学科</span>
                 </el-form-item>
        <el-form-item label="教授名">
          <el-input placeholder="Please input" v-model="professor.name"></el-input>
        </el-form-item>
        <el-form-item label="メールアドレス">
          <el-input placeholder="Please input" v-model="user.email"></el-input>
        </el-form-item>
        <el-button type="success">Success</el-button>
      </el-form>
    </el-card>                

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
        professor : [],
        user : [],
        labelPosition: 'top',
         currentView: 'Profile' 
    }
  },
  methods: {
    handleClick(tab) {
        console.log(tab.name);
         this.currentView = tab.name
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
