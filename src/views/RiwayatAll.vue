<template>
    <dashboard-layout :isDarkMode="isDarkMode">
      <!-- Sidebar content -->
      <template #sidebar>
      
        <SideBar v-if="isLargeScreen" :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode"  />
        <BottomBar v-else/>
      </template>
  
      <!-- Navbar content -->
      <template #navbar>
      
        <NavBar :isDarkMode="isDarkMode" ></NavBar>
      </template>
  
      <!-- Page content -->
      <template #content>
        <BreadRiwayat class=" absolute mt-[-4rem] z-10" style="animation: muncul-kiri-kanan-fade 0.8s;" />
       
        <!-- <TableRiwayat :isDarkMode="isDarkMode"/> -->
        <AttendanceTable ></AttendanceTable>
       
      </template>
    </dashboard-layout>
  </template>
  
  <script>

import AttendanceTable from '../components/AttendanceTable'
import BreadRiwayat from '../components/BreadRiwayat'
import NavBar from '../components/NavBar'
import BottomBar from '../components/BottomBar'


import SideBar from '../components/SideBar'
import DashboardLayout from "@/components/DashboardLayout.vue";
  
  export default {
    components: {
    AttendanceTable,
    BreadRiwayat,
    NavBar,
    BottomBar,
    SideBar,
    DashboardLayout,

},
    computed: {
    isLargeScreen() {
      return window.innerWidth >= 480; 
    },
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
  };
  </script>
  
  <style>
  /* Add any custom CSS styles here */
  </style>