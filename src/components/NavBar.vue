<template>
  <template v-if="isLargeScreen">
  <nav class="z-10 md:bg-transparent " style="animation: muncul-kiri-kanan-fade 0.8s;">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:px-14 xl:py-4 xxs:px-6 xxs:py-4">
      <div></div>
      <div class="relative flex flex-row justify-center items-center rounded-full xxs:bg-white md:pt-2 md:pb-2  lg:w-[131px] lg:h-[60px] md:w-[115px] md:h-[50px] xxs:w-[87px] xxs:h-[40px]" :class="isDarkMode ? 'bg-[#2F2F2F] shadow-md shadow-gray-100/10' : 'shadow-md shadow-gray-950/20'">
        <img class="lg:h-[52px] md:h-[40px] xxs:h-[27px] rounded-full shadow-lg" :src="profilePicturePath" alt="Profile Picture">
        <button @click="toggleModal" data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center ml-2 text-sm text-gray-500 rounded-lg focus:outline-none" aria-controls="navbar-hamburger" aria-expanded="false">
          <img class="md:h-[45px] xxs:h-[20px]" src="../gambar/settings.svg"  alt="">
          
        </button>
  
        <div v-if="isModalOpen" class="absolute mt-[12rem] z-50 flex items-end justify-end mr-14">
          <div class="w-[180px] p-4 rounded-lg shadow-md" :class="isDarkMode ? 'bg-[#2F2F2F] shadow-lg shadow-gray-100/10' : 'bg-white'">
            <ul class="font-pop font-[500] text-[16px]" :class="{'text-white': isDarkMode}">
              <li class="mb-2">
                <router-link to="/Profile" class="">Profile</router-link >
              </li>
              <li class=" cursor-pointer" @click="logout">
               Keluar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
</template>
<div class="mb-4" v-else></div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    isDarkMode: Boolean,
  },
  data() {
    return {
      isModalOpen: false,
      userId:'',
    
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('nama');
      localStorage.removeItem('NomorInduk');
      localStorage.removeItem('sidebarIsOpen');
      localStorage.removeItem('darkMode');
      localStorage.removeItem('jammasuk');
      localStorage.removeItem('jamkeluar');
      localStorage.removeItem('role');
      localStorage.removeItem('total');
      localStorage.removeItem('gambar');
      localStorage.removeItem('status');
      localStorage.removeItem('absenId');
      this.$router.push('/');
    },
  },
  computed: {
    isLargeScreen() {
      return window.innerWidth > 480; 
    },
    profilePicturePath() {
    
      const pp = localStorage.getItem('gambar');
      return pp ? require(`../../public/File/${pp}`) : ('https://i.pinimg.com/originals/6a/d8/5b/6ad85bc027799f25f39bf594cdf8d537.jpg');
    },
  },
  mounted() {
    this.userId = localStorage.getItem('id')
   },
}
</script>
