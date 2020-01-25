<template>
<div id="test">
<el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Komazawa App</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Major</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3">About</el-menu-item>
 
</el-menu>
<div class="line"></div>

</div>
</template>
<script>
/* eslint-disable no-console */

  export default {
    name: 'NavBar',
    data() {
      return {
        activeIndex: '1',
       
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>