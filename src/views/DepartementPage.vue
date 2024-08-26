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
        <DepartementView :isDarkMode="isDarkMode"/>
      </template>
    </dashboard-layout>
  </template>
  
  <script>
import NavBar from '../components/NavBar'
import BottomBar from '../components/BottomBar'


import SideBar from '../components/SideBar'
import DashboardLayout from "@/components/DashboardLayout.vue";
import DepartementView from '@/components/DepartementView.vue';

  
  export default {
    components: {
    NavBar,
    BottomBar,
    SideBar,
    DashboardLayout,
    DepartementView
},
    computed: {
    isLargeScreen() {
      return window.innerWidth > 480; 
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