<template>
    <div>
      <div :class="sidebarClasses" >  
      <div  :class="{'flex flex-row  mr-[50px]':isOpen}">
      <img  @click="toggleSidebar" class="w-[45px] mt-8 mb-5 cursor-pointer" :class="{'mr-4':isOpen}"   src="../gambar/Logo.png"  alt="">
      <span :class="{'hidden': !isOpen}" class=" mt-12 font-pop font-medium text-[18px]">AbsenKita</span> 
      </div>
      <hr class="mb-5 mr-2" :style="{ width: isOpen ? '180px' : '51px' }">
        <ul :class="{'mr-[40px]':isOpen}">
          <li  class="flex  mb-8 cursor-pointer"  v-if="role === 1">
            <router-link to="/Admin" class="nav-item mr-3">
              <div :class="{'flex flex-row ':isOpen}">
              <img :class="{'mr-4':isOpen}" src="../gambar/dashboard.svg" alt="">
              <span :class="{'hidden': !isOpen}"   class="font-pop font-medium text-[16px]">Dashboard</span>
             </div>
            </router-link>
          </li>
          <li  class="flex  mb-8 cursor-pointer">
            <router-link to="/Dashboard" class="nav-item mr-3">
              <div :class="{'flex flex-row ':isOpen}">
              <img :class="{'mr-4':isOpen}" class="w-5 h-5" src="../gambar/attendance.png" alt="">
              <span :class="{'hidden': !isOpen}"   class="font-pop font-medium text-[16px]">Absensi</span>
             </div>
            </router-link>
          </li>
          <li  class="flex  mb-8 cursor-pointer"  v-if="role === 1">
            <router-link to="/Module" class="nav-item mr-3">
              <div :class="{'flex flex-row ':isOpen}">
              <img :class="{'mr-4':isOpen}" class="w-5 h-5" src="../gambar/cube.png" alt="">
              <span :class="{'hidden': !isOpen}"   class="font-pop font-medium text-[16px]">Module</span>
             </div>
            </router-link>
          </li>
          <li  class="flex  mb-8 cursor-pointer"  v-if="role === 2">
            <router-link to="/Pengajuan" class="nav-item mr-3">
              <div :class="{'flex flex-row ':isOpen}">
              <img :class="{'mr-4':isOpen}" class="w-5 h-5" src="../gambar/document.png" alt="">
              <span :class="{'hidden': !isOpen}"   class="font-pop font-medium text-[16px]">Permohonan</span>
             </div>
            </router-link>
          </li>
        <li class="flex  mb-8 cursor-pointer" >
            <router-link to="/Riwayat" class="nav-item mr-3">
              <div :class="{'flex flex-row ':isOpen}">
              <img :class="{'mr-4':isOpen}" class="w-5 h-5" src="../gambar/user.png" alt="">
              <span :class="{'hidden': !isOpen}" class="font-pop font-medium text-[16px]">Profile</span>
             </div>
            </router-link>
          </li>
          <li  class="flex  mb-8 cursor-pointer" >
            <div class="nav-item mr-3">
              <div @click="logout" :class="{'flex flex-row ':isOpen}">
             <img :class="{'mr-4':isOpen}" src="../gambar/keluar.svg" alt="">
             <span :class="{'hidden': !isOpen}" class="font-pop font-medium text-[16px]">Keluar Akun</span>
            </div>
          </div>
          </li>
          <!-- <li  class="flex  mb-8 cursor-pointer" v-if="role === 1" >
            <router-link to="/MasterData" class="nav-item mr-3" >
              <div :class="{'flex flex-row ':isOpen}">
             <img :class="{'mr-4':isOpen}" src="../gambar/md.png" alt="">
             <span :class="{'hidden': !isOpen}" class="font-pop font-medium text-[16px]">Master Data</span>
            </div>
           </router-link>
          </li> -->
         
          <!-- <li  class="flex  cursor-pointer" :class="{'mr-[30px]':isOpen}">
           
           <div :class="{'flex  flex-row ':isOpen}">
             <button @click="logout">
          <img :class="{'mr-4':isOpen}" src="../gambar/keluar.svg" alt="">
         </button>
          <span :class="{'hidden': !isOpen}" class="font-pop font-medium text-[16px]">Keluar Akun</span>
         </div>
      
       </li> -->
          <!-- <li  class="flex  mb-8 cursor-pointer">
            <router-link to="/Admin" class="nav-item mr-3" >
              <div :class="{'flex flex-row ':isOpen}">
             <img :class="{'mr-4':isOpen}" src="../gambar/calender.svg" alt="">
             <span :class="{'hidden': !isOpen}" class="font-pop font-medium text-[16px]">Kalender</span>
            </div>
           </router-link>
          </li> -->
        </ul>
        
        <!-- <div class="flex mt-[23rem] mb-5 cursor-pointer mr-3" :class="{'mr-[30px]':isOpen}">
              <div :class="{'flex flex-row ':isOpen}">
             <img  :class="{'mr-4':isOpen}" src="../gambar/terang.svg" alt="">
             <span :class="{'hidden': !isOpen}" class="font-pop font-medium text-[16px]">Terang Mode</span>
          </div>
          </div>

          <hr class="mb-5 mr-2" :style="{ width: isOpen ? '180px' : '51px' }">

          <div class="flex  mb-8 cursor-pointer mr-3" :class="{'mr-[40px]':isOpen}">
              <div :class="{'flex flex-row ':isOpen}">
                <button @click="toggleDarkMode">
             <img :class="{'mr-4':isOpen}"  src="../gambar/gelap.svg" alt="">
            </button>
             <span :class="{'hidden': !isOpen}" class="font-pop font-medium text-[16px]">Gelap Mode</span>
            </div>
          </div> -->
          
         
      </div>
      <div :class="contentClasses">
          <router-view></router-view>
      </div>
    </div>
    
  </template>
  
  <script>

  export default {
    name: "SideBar",
    data() {
      return {
        isOpen: localStorage.getItem("sidebarIsOpen") === "true" || false,
        role: parseInt(localStorage.getItem("role")) ,
        darkMode: localStorage.getItem("darkMode") === "true" || false,
      };
    },
    props: {
    isDarkMode: Boolean,
  },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
        localStorage.setItem("sidebarIsOpen", this.isOpen);
      },
      toggleDarkMode() {
      this.$emit('toggleDarkMode'); 
      localStorage.setItem("darkMode", this.darkMode);
    },
    logout() {
      localStorage.clear()
      this.$router.push('/');
    },
    },
    computed: {
      sidebarClasses() {
        return {
          'w-[79px]': !this.isOpen,
          'w-[243px]': this.isOpen,
          'bg-ungu': true,
          'text-white': true,
          'flex':true,
          'flex-col':true,
          'relative':true,
          'items-center':true,
          'h-full': true,
          'z-10':true,
          'transition-all': true,
          'custom-shadow': !this.isDarkMode,
          'custom-shadow1': this.isDarkMode,
          'cursor-pointer' : true
        };
      },
      contentClasses() {
        return {
          'ml-[79px]': !this.isOpen,
          'ml-[243px]': this.isOpen,
          'transition-all': true,
        };
      },
    
    },
  };
  </script>
  
  <style>

  .sidebar-enter-active, .sidebar-leave-active {
    transition: all 0.5s ease-in-out;
  }
  
  .sidebar-enter, .sidebar-leave-to {
    opacity: 0;
    transform: translateX(-10px);
    
  }

  .custom-shadow {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  }
  .custom-shadow1 {
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.452);
  }

  .router-link-active {
   color: #ffed89;
  }
  
  </style>
  