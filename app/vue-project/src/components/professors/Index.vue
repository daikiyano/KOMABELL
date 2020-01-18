<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全学部" name="all">全学部</el-tab-pane>
    <el-tab-pane label="仏教学部" name="buddhist">仏教学部</el-tab-pane>
    <el-tab-pane label="文学部" name="literature">文学部</el-tab-pane>
    <el-tab-pane label="経済学部" name="economics">経済学部</el-tab-pane>
    <el-tab-pane label="法学部" name="law">法学部</el-tab-pane>
    <el-tab-pane label="経営学部" name="business">経営学部</el-tab-pane>
    <el-tab-pane label="医療健康科学部" name="sciences">医療健康科学部</el-tab-pane>
    <el-tab-pane label="GMS学部" name="gms">GMS学部</el-tab-pane>
  </el-tabs>
    <div> 
      <el-table :data="professors"
      :default-sort = "{prop: 'university_major', order: 'ascending'}"
      >
        <el-table-column
          prop="university_major"
          label="学部学科"
        >
          <template scope="scope">
            <span v-if="scope.row.university_major===1">仏教学部禅学科</span>
            <span v-else-if="scope.row.university_major===2">文学部国文学科</span>
            <span v-else-if="scope.row.university_major===3">文学部地理学科</span>
            <span v-else-if="scope.row.university_major===4">文学部社会学科</span>
            <span v-else-if="scope.row.university_major===5">文学部英米文学科</span>
            <span v-else-if="scope.row.university_major===6">文学部歴史学科</span>
            <span v-else-if="scope.row.university_major===7">文学部心理学科</span>
            <span v-else-if="scope.row.university_major===8">経済学部経済学科</span>
            <span v-else-if="scope.row.university_major===9">経済学部商学科</span>
            <span v-else-if="scope.row.university_major===10">経済学部現代応用経済学科</span>
            <span v-else-if="scope.row.university_major===11">法学部法律学科</span>
            <span v-else-if="scope.row.university_major===12">法学部政治学科</span>
            <span v-else-if="scope.row.university_major===13">経営学部経営学科</span>
            <span v-else-if="scope.row.university_major===14">経営学部市場戦略学科</span>
            <span v-else-if="scope.row.university_major===15">医療健康科学部診療放射線技術科学学科</span>
            <span v-else-if="scope.row.university_major===16">GMS学部GMS学科</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="教授名"
        >
        </el-table-column>
        <el-table-column prop="status" label="Status">
          <template scope="scope">
            <span v-if="scope.row.status===1"><el-tag>利用可</el-tag></span>
            <span v-else-if="scope.row.status===2"><el-tag type="info">退室中</el-tag></span>
            <span v-else-if="scope.row.status===3"><el-tag type="danger">会議中</el-tag></span>
          </template>
        </el-table-column>         
        <el-table-column>
          <template scope="scope">
            <el-button type="success" :data="professors" plain @click="getProfessorDetail(scope.row.id); dialogVisible=true">More...</el-button>
          </template>
        </el-table-column>
      </el-table> 
      <!-- Modal   -->
      <el-dialog 
        title="Status"
        :visible.sync="dialogVisible"
        width="90%"
        top="8vh"
        custom-class="modal"
      >   

  <!-- PC -->
        <!-- <span slot="footer" class="dialog-footer"> -->
        <el-row class="dialog-left-height hidden-sm-and-down">
          <el-col :md="14" :lg="14"  class="dialog-left" v-bind:class="[professor.status===1 ? 'dialog-left-color-available' : '',professor.status===2 ? 'dialog-left-color-unavailable' : '',professor.status===3 ? 'dialog-left-color-meeting' : '']">
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
          <el-col  :md="10" :lg="10">
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
        <el-row class="hidden-md-and-up dialog-left-height-sm">
          <el-col :xs="24" :sm="24">
              <!-- v-bind:class="[professor.status===2 ? 'hey' : '']" -->
              <span v-if="professor.status===1"><el-tag>利用可</el-tag></span>
              <span v-else-if="professor.status===2"><el-tag type="info">退室中</el-tag></span>
              <span v-else-if="professor.status===3"><el-tag type="danger">会議中</el-tag></span> 
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
        <el-row class="hidden-md-and-up dialog-left-height-sm">
          <el-col :xs="24" :sm="24">
            {{time}}
            Today {{dayOfWeek}}
            {{month}}
            {{date}}th
          </el-col>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>

<script>

/* eslint-disable no-console */

export default {
    name: 'Index',
    data () {
      return {
        //   Get Data From Firebase
          professors : [
        {id:1, name:"道重信",university_major : 1,status:2},
        {id:2, name:"田中勇",university_major : 2,status:1},
        {id:3, name:"伊藤尚広",university_major : 7,status:2},
        {id:4, name:"山田隆",university_major : 4,status:1},
        {id:5, name:"織田信正",university_major : 5,status:3},
        {id:6, name:"武田震源",university_major : 7, status:1},
        {id:7, name:"原直樹",university_major : 16, status:2},
      ],
      professor : [],
      time : "",
      dayOfWeek : "" ,
      month : "",
      date : "",
      dialogVisible : false,
      activeName: 'first'
     
      }
    },
    methods:{
      getProfessorDetail(id) {
        const dataId = parseInt(id,10);
        const data = this.professors.find(professor => (
          professor.id === dataId  
        ));
        this.professor = data; 
      },
      getNow () {
      const today = new Date();
      this.time = ("0"+today.getHours()).slice(-2) + ":" + ("0"+today.getMinutes()).slice(-2);
      this.date = today.getDate();
      const date = today.getDay();
      this.dayOfWeek = [ "Sun,", "Mon,", "Tue,", "Wen,", "Thur,", "Fry,", "Sat," ][date];
      const month = today.getMonth();
      this.month = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'][month];
    },
    handleClick(tab) {
        console.log(tab.name);
      }
    },
    mounted () {
      this.getNow()
  },
  
}
</script>

<style lang="scss">

$xl: 1920px; 
$lg: 1200px;
$md: 992px; 
$sm: 768px; 



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

