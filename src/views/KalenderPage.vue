<template>
    <dashboard-layout :isDarkMode="isDarkMode">
        <!-- Sidebar content -->
        <template #sidebar>
          <SideBar v-if="isLargeScreen" :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode"  />
          <BottomBar v-else/>
        </template>
    
        <!-- Navbar content -->
        <template #navbar>
          <NavBar :isDarkMode="isDarkMode" />
        </template>
    
        <!-- Page content -->
        <template #content>
          <KalenderBar/>
        </template>
      </dashboard-layout>
  </template>

  <script>
  



import KalenderBar from '../components/KalenderBar'
import NavBar from '../components/NavBar'
import BottomBar from '../components/BottomBar'


import SideBar from '../components/SideBar'
import DashboardLayout from "@/components/DashboardLayout.vue";

  
  export default {
    components: {
    KalenderBar,
     
      NavBar,
        BottomBar,
        SideBar,
        DashboardLayout,
    },
    data() {
      return {
        isDarkMode: false,
      };
    },
    computed: {
    isLargeScreen() {
      return window.innerWidth >= 480; 
    },
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
  };
  </script>
  
  <style scoped>
/* Style for the rounded event cells */
.fc-daygrid-day {
  border-radius: 10px; /* Adjust the value to control the roundness of the cells */
  overflow: hidden; /* Ensures content doesn't overflow rounded corners */
}
.rounded-event {
  background-color: #007BFF; /* Change the background color to your preference */
  color: #fff; /* Set the text color */
  padding: 5px; /* Adjust padding as needed */
}
</style>