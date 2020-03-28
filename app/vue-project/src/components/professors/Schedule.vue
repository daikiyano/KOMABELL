<template>
<div>
    <el-card style="width:80%; margin: 0 auto; background-color: rgba(0, 0, 0, 0);" class="box-card">
      <h1>スケジュール</h1>
      <div class="block">
        <el-form :label-position="labelPosition" ref="form" label-width="120px">
<el-form-item label="日付">
    <el-date-picker
      v-model="value3"
      type="date"
      placeholder="Pick a day">
    </el-date-picker><br>
   
   </el-form-item>
  <el-form-item label="日時">
     <el-time-picker
    v-model="value3"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
  </el-form-item>

  </el-form>
  </div>
    </el-card>                

  <!-- <FullCalendar defaultView="dayGridMonth" 
  :plugins="calendarPlugins" 
  :weekends="true"
  :events="[
    { title: 'ミーティング', date: '2020-02-01'},
    { title: '生産管理論講義 3-232', date: '2020-02-02' }
  ]"
  @dateClick="dateClick" 
  
  /> -->

</div>
</template>
<script>
// <link href='fullcalendar/core/main.css' rel='stylesheet' />
// <link href='fullcalendar/timeline/main.css' rel='stylesheet' />
/* eslint-disable no-console */
// import FullCalendar from '@fullcalendar/vue'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timelinePlugin from '@fullcalendar/timeline';



export default {
  name: 'Profile',
  // components: {
  //   FullCalendar // make the <FullCalendar> tag available
  // },
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

    }
  },
  data () {
    return {
    

    }
  },
  methods:{
    dateClick(arg) {
    console.log(arg.date)
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


