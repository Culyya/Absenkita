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
        <AbsensiUser :isDarkMode="isDarkMode"/>
      </template>
    </dashboard-layout>
  </template>
  
  <script>
import NavBar from '../components/NavBar'
import BottomBar from '../components/BottomBar'
import AbsensiUser from '../components/AbsensiUser'

import SideBar from '../components/SideBar'
import DashboardLayout from "@/components/DashboardLayout.vue";
  
  export default {
    components: {
    NavBar,
    BottomBar,
    AbsensiUser,
    SideBar,
    DashboardLayout,
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