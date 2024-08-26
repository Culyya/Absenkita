<template>

    <div class="flex h-screen " :class="isDarkMode ? 'bg-[#1C1E20]' : 'bg-[#FAFBFD]'"  >
      <!-- Sidebar -->
        <slot name="sidebar"></slot>
     
  
      <div class="flex-1 flex flex-col overflow-hidden " v-if="isLargeScreen">
        <!-- Navbar -->
        <slot name="navbar" ></slot>
        
       
  
        <!-- Page Content -->
        <main class="flex-1 overflow-x-hidden overflow-y-auto xl:px-16 xxs:px-6 py-0">
          <slot name="content"></slot>
        </main>
       
      </div>

      <div class="" v-else>
        <!-- Navbar -->
        <slot name="navbar" ></slot>
        
       
  
        <!-- Page Content -->
        <main class="flex-1 overflow-x-hidden overflow-y-auto xl:px-16 xxs:px-6 py-4">
          <slot name="content"></slot>
        </main>
       
      </div>
    
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardLayout',
    props: {
    isDarkMode: Boolean,
  },
  computed: {
    isLargeScreen() {
      return window.innerWidth > 480; 
    },
  },
  }


  </script>
  
  <style>
  /* Add any custom CSS styles here */
  </style>
  