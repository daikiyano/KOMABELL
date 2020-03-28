<template>
<div>
    <el-card style="width:60%; margin: 0 auto; background-color: rgba(0, 0, 0, 0);" class="box-card">
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
          <el-input placeholder="Please input"  
            @input="updateNameInput" 
            v-model="professor.name">
          </el-input>
        </el-form-item>
          <p v-if="feedback">{{ feedback }}</p>
        <!-- <el-form-item label="メールアドレス">
          <el-input placeholder="Please input" v-model="user.email"></el-input>
        </el-form-item> -->
        <el-form-item label="コメント">
          <el-input
            type="textarea"
            :rows="10"
            placeholder="Please input"
            @input="updateCommentInput" 
            v-model="professor.comment">
          </el-input>
        </el-form-item>
        <el-button @click="ChangeEditInput" type="success" :disabled="this.Isdisabled == true">更新</el-button>
      </el-form>
    </el-card>                

</div>
</template>
<script>
/* eslint-disable no-console */

// import db from '../../../firebase/init.js'
// import firebase from 'firebase'

export default {
  name: 'Profile',
  props: {
    'professor': {
       type: Object,
       required: true
    },
    'labelPosition': {
       type: String,
       required: true

    },
    'user': {
       type: Object,
       required: true

    },
    'Isdisabled': {
       type: Boolean,
       required: true
    }
  },
  data () {
    return {
      feedback: null,
      oldName : this.professor.name,
      oldComment : this.professor.name,
      disabled : null
    }
  },
  methods:{
    ChangeEditInput () {
      if(this.professor.name){
        this.$emit('ChangeEditInput',this.professor)
        this.feedback = null
      } else {
        this.feedback = "名前を入力してください"
      }
    },
    updateNameInput (input) {
      if (input!==this.oldName)
        this.$emit('ChangeDisable',false)
    },
    updateCommentInput (input) {
      if (input!==this.oldComment)
        this.$emit('ChangeDisable',false)
    }
   
  },
  mounted () {
     
     
  },
  created(){
   
  } 
}


</script>
 

 <style lang="scss">


</style>


