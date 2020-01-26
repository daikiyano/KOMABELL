<template>
  <div class="home">
    
    
    <div> 
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
  <el-input
      v-model="search"
      placeholder="教授を検索"
    />
      <el-table 
      :data="professors.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
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
        <el-table-column
      align="right">
      <template slot="header">
       
      </template>
      </el-table-column>  
      </el-table> 
      <!-- Modal   -->
      <Dialog :dialogVisible="this.dialogVisible" :professor="this.professor" 
      @changeVisivle="handler"
      />
    </div>
  </div>
  
</template>

<script>

/* eslint-disable no-console */
import Dialog from './Dialog.vue'

export default {
    name: 'Index',
    components: {
      Dialog,
    }, 
    data () {
      return {
        //   Get Data From Firebase
          professors : [
        {id:1, name:"道重信",university_major : 1,status:2},
        {id:2, name:"田中勇",university_major : 2,status:1},
        {id:3, name:"伊藤尚広",university_major : 7,status:2},
        {id:4, name:"山田隆",university_major : 2,status:1},
        {id:5, name:"織田信正",university_major : 5,status:3},
        {id:6, name:"武田震源",university_major : 7, status:1},
        {id:7, name:"原直樹",university_major : 16, status:2},
      ],
      professor : {},
      dialogVisible : false,
      activeName: 'first',
      search: ''

     
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
      handler(changeVisivle) {
      this.dialogVisible = changeVisivle
      },
      handleClick(tab) {
        let MajorCategory = []
        for (let i in this.professors) {
          let professor = this.professors[i]
          if(tab.name === "buddhist") {
            if (professor.university_major===1) {
              MajorCategory.push(professor)
            }
          } else if (tab.name === "literature") {
            if (professor.university_major===2) {
              MajorCategory.push(professor)
            }
          }
        }
        this.professors.length = 0
        this.professors = MajorCategory  
      }
    }  
}
</script>

<style lang="scss">

$xl: 1920px; 
$lg: 1200px;
$md: 992px; 
$sm: 768px; 





</style>

