<template>
  <div>

      <el-dialog 
        title="Status"
        :visible.sync="dialogVisible"
        width="90%"
        top="8vh"
        custom-class="modal"
      >   

  <!-- PC -->
        <!-- <span slot="footer" class="dialog-footer"> -->
        <el-row class="hidden-xs-only dialog-left-height">
          <el-col  :sm="14" :md="14" :lg="14"  class="dialog-left" v-bind:class="[professor.status===1 ? 'dialog-left-color-available' : '',professor.status===2 ? 'dialog-left-color-unavailable' : '',professor.status===3 ? 'dialog-left-color-meeting' : '']">
              <el-row>
                <!-- :gutter="20" -->
                <el-col>
                  <!-- :offset="4" -->
                  <div class="status-block">
                    <el-avatar :size="350" class="status-round" v-bind:class="[professor.status===1 ? 'status-round-color-available' : '',professor.status===2 ? 'status-round-color-unavailable' : '',professor.status===3 ? 'status-round-color-meeting' : '']">
                      <i v-if="professor.status===1" class="el-icon-user"></i>
                      <i v-if="professor.status===2" class="el-icon-user"></i>
                      <i v-if="professor.status===3" class="el-icon-user"></i>             
                    </el-avatar></div>
                    <div class="status-span-box-pc">
                      <span class="status-span-pc" v-if="professor.status===1">利用可</span>
                      <span class="status-span-pc" v-else-if="professor.status===2">退室中</span>
                      <span class="status-span-pc" v-else-if="professor.status===3">会議中</span> 
                   </div> 
                </el-col>
              </el-row>
              <div class="status-block">
              <p style="font-size: 30px;">
                <span v-if="professor.university_major===1">仏教学部禅学科</span>
                <span v-else-if="professor.university_major===2">文学部国文学科</span>
                <span v-else-if="professor.university_major===3">文学部地理学科</span>
                <span v-else-if="professor.university_major===4">文学部社会学科</span>
                <span v-else-if="professor.university_major===5">文学部英米文学科</span>
                <span v-else-if="professor.university_major===6">文学部歴史学科</span>
                <span v-else-if="professor.university_major===7">文学部心理学科</span>
                <span v-else-if="professor.university_major===8">経済学部経済学科</span>
                <span v-else-if="professor.university_major===9">経済学部商学科</span>
                <span v-else-if="professor.university_major===10">経済学部現代応用経済学科</span>
                <span v-else-if="professor.university_major===11">法学部法律学科</span>
                <span v-else-if="professor.university_major===12">法学部政治学科</span>
                <span v-else-if="professor.university_major===13">経営学部経営学科</span>
                <span v-else-if="professor.university_major===14">経営学部市場戦略学科</span>
                <span v-else-if="professor.university_major===15">医療健康科学部診療放射線技術科学学科</span>
                <span v-else-if="professor.university_major===16">グローバルメディアスタディーズ学部グローバルメディアスタディーズ学科</span>  
                <br>  
               
                {{professor.name}}
              </p>  
              </div>  
          </el-col>
          <el-col :sm="10" :md="10" :lg="10">
            <div class="dialog-right-height-pc"> 
              <p style="font-size: 80px;">{{time}}
              <p style="font-size: 30px; border-bottom: solid 2px black; display: inline-block;"><i class="el-icon-watch"></i>Today{{dayOfWeek}}
                {{month}}
                {{date}}th
                
              </p>
            </div>
          </el-col>
        </el-row>

<!-- スマホ -->
        <el-row class="hidden-sm-and-up dialog-left-height-sm">
          <el-col :xs="24" :sm="24" v-bind:class="[professor.status===1 ? 'dialog-left-color-available' : '',professor.status===2 ? 'dialog-left-color-unavailable' : '',professor.status===3 ? 'dialog-left-color-meeting' : '']">
              <span v-if="professor.status===1">利用可</span>
              <span v-else-if="professor.status===2">退室中</span>
              <span v-else-if="professor.status===3">会議中</span> 
                {{professor.name}}
              <span v-if="professor.university_major===1">仏教学部禅学科</span>
              <span v-else-if="professor.university_major===2">文学部国文学科</span>
              <span v-else-if="professor.university_major===3">文学部地理学科</span>
              <span v-else-if="professor.university_major===4">文学部社会学科</span>
              <span v-else-if="professor.university_major===5">文学部英米文学科</span>
              <span v-else-if="professor.university_major===6">文学部歴史学科</span>
              <span v-else-if="professor.university_major===7">文学部心理学科</span>
              <span v-else-if="professor.university_major===8">経済学部経済学科</span>
              <span v-else-if="professor.university_major===9">経済学部商学科</span>
              <span v-else-if="professor.university_major===10">経済学部現代応用経済学科</span>
              <span v-else-if="professor.university_major===11">法学部法律学科</span>
              <span v-else-if="professor.university_major===12">法学部政治学科</span>
              <span v-else-if="professor.university_major===13">経営学部経営学科</span>
              <span v-else-if="professor.university_major===14">経営学部市場戦略学科</span>
              <span v-else-if="professor.university_major===15">医療健康科学部診療放射線技術科学学科</span>
              <span v-else-if="professor.university_major===16">グローバルメディアスタディーズ学部グローバルメディアスタディーズ学科</span>        
          </el-col>
        </el-row>
        <el-row class="dialog-left-height-sm">
          <el-col :xs="24" :sm="24">
            {{time}}
            Today {{dayOfWeek}}
            {{month}}
            {{date}}th
          </el-col>
        </el-row>
      </el-dialog>
    
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Dialog',
  props: {
    'dialogVisible': {
       type: Boolean,
       required: true
    },
    'professor': {
       type: Object,
       required: true
    }
  },
  data () {
    return {
      time : "",
      dayOfWeek : "" ,
      month : "",
      date : "",
      
      
    }
  },
  methods:{
    getNow () {
      const today = new Date();
      this.time = ("0"+today.getHours()).slice(-2) + ":" + ("0"+today.getMinutes()).slice(-2);
      this.date = today.getDate();
      const date = today.getDay();
      this.dayOfWeek = [ "Sun,", "Mon,", "Tue,", "Wen,", "Thur,", "Fry,", "Sat," ][date];
      const month = today.getMonth();
      this.month = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'][month];
    }
  },
  mounted () {
      this.getNow()
  }
  
}


</script>
 

 <style lang="scss">
 .modal{
  height:85%;
}


.el-dialog__headerbtn {
  z-index: 10;
}

.el-dialog__body {
  height:100%;
  position: relative;
  top: -84px;
    .dialog-left-height-sm {
      height:50%;
    }
    .dialog-left-height {
      height:100%;
        .dialog-left {
          height:100%;
          position: relative;
          left: -20px;
          color: white;
          .status-block {
            display: flex; 
            justify-content: center;
            .status-round {
              margin-top:60px;
              .el-icon-user {
                font-size:200px;
                padding-top: 50px;
              }
              
            }
          }
          .status-span-box-pc {
            text-align:center;
            .status-span-pc {
              position: relative; 
              top: -100px; 
              font-size: 40px;
            }
          }
        } 
        .dialog-left-color-available {
          background-color: rgb(83, 168, 255);
          .status-round-color-available {
            background-color: rgb(121, 187, 255);
          }
        }
        .dialog-left-color-meeting {
          background-color:#FF0033;
          .status-round-color-meeting {
              background-color:#F56C6C;   
          }
        }   
        .dialog-left-color-unavailable {
          background-color:gray;
          .status-round-color-unavailable {
              background-color:#909399;   
          }               
        }
    }
    .dialog-right-height-pc {
      height:100%;
      text-align: center;
    }
}



</style>

