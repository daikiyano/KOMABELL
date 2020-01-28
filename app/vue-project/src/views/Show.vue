<template>
  <div class="home">
   教授名:{{professor.name}}
   <!-- 学部:{{professor.major}} -->
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
  {{time}}
  {{dayOfWeek}}
  {{month}}
  {{date}}th
  </div>
  
</template>
<script>
/* eslint-disable no-console */
export default {
  components: {
   
  },
  data () {
    return {
        professors : [
        {id:1, name:"道重信",major : 1,status:1},
        {id:2, name:"田中勇",major : 2,status:1},
        {id:3, name:"伊藤尚広",major : 7,status:1},
        {id:4, name:"山田隆",major : 4,status:1},
        {id:5, name:"織田信正",major : 5,status:3},
        {id:6, name:"武田震源",major : 7, status:1},
        {id:7, name:"原直樹",major : 16, status:1},
      ],
      professor : [],
      time : "",
      dayOfWeek : "" ,
      month : "",
      date : ""
    }
  },
  mounted () {
      this.getUserDetail()
      this.getNow()
  },
  methods:{
    getUserDetail () {
      const dataId = parseInt(this.$route.params.id,10);
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
    } 
  }
  
}


</script>
