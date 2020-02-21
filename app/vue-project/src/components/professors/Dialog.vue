<template>
  <div>

      <el-dialog 
        title="Status"
        :visible.sync="dialogVisible"
        width="90%"
        top="8vh"
        custom-class="modal"
        :before-close="hideModal"
      >   

  <!-- PC -->
        <!-- <span slot="footer" class="dialog-footer"> -->
        <el-row class="hidden-xs-only dialog-left-height" style="width: 100%;">
          <el-col  :sm="14" :md="14" :lg="14"  class="dialog-left" v-bind:class="[professor.status===1 ? 'dialog-left-color-available' : '',professor.status===2 ? 'dialog-left-color-unavailable' : '',professor.status===3 ? 'dialog-left-color-meeting' : '']">
              <el-row>
                <!-- :gutter="20" -->
                <el-col>
                  <!-- :offset="4" -->
                  <div class="status-block" v-on:click="clickStatus">
                    <el-avatar :size="350" class="status-round" v-bind:class="[professor.status===1 ? 'status-round-color-available' : '',professor.status===2 ? 'status-round-color-unavailable' : '',professor.status===3 ? 'status-round-color-meeting' : '']">
                      <i v-if="professor.status===1" class="el-icon-user"></i>
                      <i v-if="professor.status===2" class="el-icon-user"></i>
                      <i v-if="professor.status===3" class="el-icon-user"></i>             
                    </el-avatar>
                  </div>
                    <div class="status-span-box-pc">
                      <span class="status-span-pc" v-if="professor.status===1">利用可</span>
                      <span class="status-span-pc" v-else-if="professor.status===2">退室中</span>
                      <span class="status-span-pc" v-else-if="professor.status===3">会議中</span> 
                   </div> 
                </el-col>
              </el-row>
              <div class="status-block">
              <p style="font-size: 30px;">
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
                <br>  
               
                {{professor.name}}
              </p>  
              </div>  
          </el-col>
          <el-col :sm="10" :md="10" :lg="10">
            <div class="dialog-right-height-pc"> 
              <p style="font-size: 80px;">{{time}}
              <p style="font-size: 30px; border-bottom: solid 2px black; display: inline-block; text-align: center;"><i class="el-icon-watch"></i>Today{{dayOfWeek}}
                {{month}}
                {{date}}th
                
              </p>
            </div>
          </el-col>
        </el-row>

<!-- スマホ -->
        <el-row class="hidden-sm-and-up dialog-left-height-sm">

          <el-col :xs="24" :sm="24" v-bind:class="[professor.status===1 ? 'dialog-top-color-available-sm' : '',professor.status===2 ? 'dialog-top-color-unavailable-sm' : '',professor.status===3 ? 'dialog-top-color-meeting-sm' : '']">
            <el-row>
                <!-- :gutter="20" -->
                <el-col style="height: 260px;">
                  <!-- :offset="4" -->
                  <div class="status-block-sm" v-on:click="clickStatus">
                    <el-avatar :size="200" class="status-round-sm" v-bind:class="[professor.status===1 ? 'status-round-color-available-sm' : '',professor.status===2 ? 'status-round-color-unavailable-sm' : '',professor.status===3 ? 'status-round-color-meeting-sm' : '']">
                      <i v-if="professor.status===1" class="el-icon-user"></i>
                      <i v-if="professor.status===2" class="el-icon-user"></i>
                      <i v-if="professor.status===3" class="el-icon-user"></i>             
                    </el-avatar>
                  </div>
                    <div class="status-span-box-sm">
                      <span class="status-span-sm" v-if="professor.status===1">利用可</span>
                      <span class="status-span-sm" v-else-if="professor.status===2">退室中</span>
                      <span class="status-span-sm" v-else-if="professor.status===3">会議中</span> 
                   </div> 
               </el-col>
                
              <div style="font-size: 18px; color:white; text-align: center;">
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
                {{professor.name}} 
              </div>    
              </el-row>
               
          </el-col>
        </el-row>
        <el-row class="hidden-sm-and-up dialog-left-height-sm">
          <el-col :xs="24" :sm="24">
            <div class="dialog-right-height-sm"> 
            <p style="font-size: 30px;">{{time}}</p>
             <p style="font-size: 20px; border-bottom: solid 2px black; display: inline-block;"><i class="el-icon-watch"></i>Today {{dayOfWeek}}
            {{month}}
            {{date}}th
            </p>
           </div>
          </el-col>
        </el-row>
      </el-dialog>
    
  </div>
</template>
<script>
/* eslint-disable no-console */

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
      dayOfWeek : "",
      month : "",
      date : ""
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
    },
    hideModal() {
      this.$emit('changeVisivle', false)
    },
    clickStatus() {
      this.$emit('changeStatus')
    }
  },
  mounted () {
      this.getNow()
  }
  
}


</script>
 

 <style lang="scss">
$pc: 1024px; // PC
$tab: 680px; // タブレット
$sp: 767px;  // スマホ

@mixin pc {
  @media (max-width: ($pc)) {
    @content;
  }
}

@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}



 .modal{
  height:85%;
}
.el-dialog__headerbtn {
  z-index: 10;
}

.el-dialog__body {
  // @include pc {
  // };
  height:100%;
  width:100%;
  position: relative;
  top: -84px;
  @include sp {
    width:100%;
  position: relative;
  left: -20px;
  };
   
    .dialog-left-height {
      height:100%;
      @include sp {
       height:50%;
      }
        .dialog-left {
          height:100%;
          position: relative;
          left: -20px;
          color: white;
          .status-block {
            display: flex; 
            justify-content: center;
            padding-top: -20px;
            .status-round {
              margin-top: 60px;
              
              .el-icon-user {
                font-size: 200px;
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
      position: relative;
      left: -20px;
    }
}


// スマホ

.dialog-top-color-available-sm {
  background-color: rgb(83, 168, 255);
  height: 100%;
  width: 100%;
  .status-round-color-available-sm {
    background-color: rgb(121, 187, 255);
  }
}
.dialog-top-color-unavailable-sm {
  background-color:gray;
  height: 100%;
  width: 100%;
  .status-round-color-unavailable-sm {
    background-color:#909399;   
  } 
}
.dialog-top-color-meeting-sm {
  background-color:#FF0033;        
  height: 100%;
  width: 100%;
  .status-round-color-meeting-sm {
    background-color:#F56C6C;   
  }
}

.dialog-left-height-sm {
  height: 55%;
  width: 100%;
  .status-block-sm {
    display: flex; 
    justify-content: center;
    height: 100%;
    .status-round-sm {
      margin: auto;
      font-size: 100px;
    }
  }
  .status-span-box-sm {
    text-align:center;
    color: white;
    

    .status-span-sm {
      position: relative; 
      top: -90px; 
      font-size: 30px;
    }
  }
    
}
.dialog-right-height-sm {

      height:100%;
      text-align: center;
    }

  



</style>


