<template>
  <div class="home">
    
    
    <div> 
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全学部" name="all">全学部</el-tab-pane>
    <el-tab-pane label="仏教学部" name="1">仏教学部</el-tab-pane>
    <el-tab-pane label="文学部" name="2">文学部</el-tab-pane>
    <el-tab-pane label="経済学部" name="3">経済学部</el-tab-pane>
    <el-tab-pane label="法学部" name="4">法学部</el-tab-pane>
    <el-tab-pane label="経営学部" name="5">経営学部</el-tab-pane>
    <el-tab-pane label="医療健康科学部" name="6">医療健康科学部</el-tab-pane>
    <el-tab-pane label="GMS学部" name="7">GMS学部</el-tab-pane>
  </el-tabs>
  <el-input
      v-model="search"
      placeholder="教授を検索"
    />
      <el-table 
      :data="professors.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      :default-sort = "{prop: 'major', order: 'ascending'}"
      >
        <el-table-column
          prop="major"
          label="学部学科"
        >
          <template scope="scope">
            <span v-if="scope.row.major===1">仏教学部禅学科/仏教学科</span>
            <span v-else-if="scope.row.major===2">文学部国文学科</span>
            <span v-else-if="scope.row.major===3">文学部地理学科</span>
            <span v-else-if="scope.row.major===4">文学部社会学科</span>
            <span v-else-if="scope.row.major===5">文学部英米文学科</span>
            <span v-else-if="scope.row.major===6">文学部歴史学科</span>
            <span v-else-if="scope.row.major===7">文学部心理学科</span>
            <span v-else-if="scope.row.major===8">経済学部経済学科</span>
            <span v-else-if="scope.row.major===9">経済学部商学科</span>
            <span v-else-if="scope.row.major===10">経済学部現代応用経済学科</span>
            <span v-else-if="scope.row.major===11">法学部法律学科</span>
            <span v-else-if="scope.row.major===12">法学部政治学科</span>
            <span v-else-if="scope.row.major===13">経営学部経営学科</span>
            <span v-else-if="scope.row.major===14">経営学部市場戦略学科</span>
            <span v-else-if="scope.row.major===15">医療健康科学部診療放射線技術科学学科</span>
            <span v-else-if="scope.row.major===16">GMS学部GMS学科</span>
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
import db from '../../../firebase/init.js'


export default {
  name: 'Index',
  components: {
    Dialog,
  }, 
  data () {
    return {
      professors : [
        // {id:1, name:"道重信",first_furigana: "", last_furigana: "",major : 1,major_group : 1,status:2},
        // {id:2, name:"田中勇",first_furigana: "", last_furigana: "",major : 2,major_group : 2,status:1},
        // {id:3, name:"伊藤尚広",first_furigana: "", last_furigana: "",major : 7,major_group : 2,status:2},
        // {id:4, name:"山田隆",first_furigana: "", last_furigana: "",major : 2,major_group : 2,status:1},
        // {id:5, name:"織田信正",first_furigana: "", last_furigana: "",major : 5,major_group : 2,status:3},
        // {id:6, name:"武田震源",first_furigana: "", last_furigana: "",major : 7,major_group : 2, status:1},
        // {id:7, name:"原直樹",first_furigana: "", last_furigana: "",major : 16,major_group : 7, status:2},
      ],
      professor : {},
      dialogVisible : false,
      activeName: 'first',
      search: ''
    }
  },
  methods:{
    getProfessorDetail(id) {
      const data = this.professors.find(professor => (
        professor.id === id  
      ));
      this.professor = data; 
    },
    handler(changeVisivle) {
      this.dialogVisible = changeVisivle
    },
    handleClick(tab) {
      if(tab.name === "all") {
        this.professors.length = 0
        db.collection('professors').get()  
        .then(snapshot => {
          snapshot.forEach(doc => {
          let professor = doc.data()
          professor.id = doc.id
          this.professors.push(professor)
        })
      })
      } else {
        const majorGroup = parseInt(tab.name,10);
        let ref = db.collection('professors').where('major_group', '==',majorGroup)
        ref.get().then(snapshot => {
          snapshot.forEach(doc => {
            let professor = doc.data()
            professor.id = doc.id
            this.professors.length = 0
            this.professors.push(professor)
          })
        })
      }
    }
  },
  created() {    
    db.collection('professors').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      let professor = doc.data()
      professor.id = doc.id
      this.professors.push(professor)    
      })
    })
  }
}
</script>

<style lang="scss">

$xl: 1920px; 
$lg: 1200px;
$md: 992px; 
$sm: 768px; 





</style>

