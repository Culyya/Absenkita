<template>
    <div class="bottom-nav bg-ungu h-[70px] items-center">
      <router-link to="/Dashboard" class="nav-item">
        <img src="../gambar/dashboard.svg" alt="">
      </router-link>
      <router-link to="/Pengajuan" class="nav-item">
        <img class="w-5 h-5" src="../gambar/document.png" alt="">
      </router-link>
      <router-link to="/Riwayat" class="nav-item">
        <img class="w-5 h-5" src="../gambar/user.png" alt="">
      </router-link>
      <div  class="nav-item">
        <button @click="logout" data-collapse-toggle="navbar-hamburger" type="button" class="flex items-center justify-center    focus:outline-none" aria-controls="navbar-hamburger" aria-expanded="false">
          <img class="md:h-[52px] xxs:h-[20px]" src="../gambar/keluar.svg" alt="">
        </button>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'BottomBar',
  
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
    }
  }
};
  </script>
  
  <style scoped>
  .bottom-nav {
    color: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    z-index: 1;
  }
  
  .nav-item {
    text-decoration: none;
    color: #fff;
  }
  </style>
  