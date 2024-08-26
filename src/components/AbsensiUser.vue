<template>
  <div class="flex flex-col justify-center items-center " :class="{'text-white':isDarkMode}"  dark: darkMode >
 
    <div class="relative bg-ungu xl:p-4 md:p-2 xxs:p-4 xl:rounded-full xxs:rounded-md xxs:mt-6 " :class="isDarkMode ? ' shadow-md shadow-gray-100/20' : 'shadow-md shadow-gray-900/20'" style="animation: muncul-kiri-kanan-fade 0.8s;">
      <transition name="fade" mode="out-in">
        <h1 :key="currentIndex" class="font-pop font-light xl:text-[18px] md:text-[12px] xxs:text-[10px] text-white text-center tracking-wide ml-3 mr-3">
          {{ currentQuote }}
        </h1>
      </transition>
    </div>
 

    <div class="xl:mt-10 xxs:mt-4 font-pop font-regular text-center" style="animation: muncul-kiri-kanan-fade 0.8s;">
      <h1 class="xl:text-[32px] md:text-[24px] xxs:text-[23px] text-[#373636]" :class="{'text-white':isDarkMode}">Selamat {{timeOfDay}},{{nama}}</h1>
      <h2 class="xl:text-[40px] md:text-[24px] xxs:text-[29px] font-light text-[#373636]" :class="{'text-white':isDarkMode}">{{ formattedTime   }}</h2>
      <h3 class="md:text-[18px] xxs:text-[13px] font-light font-mutiara text-[#373636]" :class="{'text-white':isDarkMode}"  >{{ formattedDate }}</h3>
    </div>
  <!-- Button to open the photo capture form -->
  <div class="mt-4" style="animation: muncul-kiri-kanan-fade 1s;">
      <button @click="openPhotoCapture" :disabled="isAlreadyLogged" :class="buttonClass + (isDarkMode ? ' shadow-gray-100/30' : '')">
        <img class="xl:h-[127px] md:h-[75px] xxs:h-[70px] xl:mt-14 xxs:mt-12 mb-7" src="../gambar/touch.png" alt="">
        <span class="xl:text-[24px] md:text-[18px] xxs:text-[16px] font-pop font-light">{{ absenStatus }}</span>
      </button>
    </div>

    <!-- Photo capture modal -->
    <transition>
      <div v-if="photoCaptureOpen" class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50 font-pop font-regular">
        <div class="flex flex-col items-center p-10 bg-[#fff] rounded-xl">
          <video ref="video" class="mb-4" autoplay></video>
          <button @click="takePhoto" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Ambil Foto</button>
          <canvas ref="canvas" class="mb-4" style="display:none;"></canvas>
          <img ref="photo" class="mb-4" style="display:none;" />
          <button @click="submitAbsen" class="bg-green-500 text-white px-4 py-2 rounded">Kirim Absen</button>
          <button @click="closePhotoCapture" class="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-2">Batal</button>
        </div>
      </div>
    </transition>
  <h1 class="text-center mt-6">{{ message }}</h1>
  <div>
   
  
   
    <div  class="flex flex-row text-[#373636] justify-between xl:w-[760px] md:w-[400px] xxs:w-[260px] xl:ml-7 xxs:ml-1 xl:mt-14 md:mt-4 xxs:mt-5 text-center" style="animation: muncul-kiri-kanan-fade 1s;" >
      <div class="flex flex-col"  >
        <img class="xl:h-[64px] xl:w-[64px]  md:h-[42px] xxs:h-[41p] xxs:w-[41px]" src="../gambar/back-in-time.png" alt="">
        <span class="xl:text-[24px] md:text-[24px] xxs:text-[17px] font-pop font-light  mt-3">{{ formatDate1(jammasuk) }}</span>
        <span class="text-[14px] font-pop font-semibold  mt-1">Masuk</span>
      </div>
      <div class="flex flex-col">
        <img class="xl:h-[64px] xl:w-[64px]  md:h-[42px] xxs:h-[41p] xxs:w-[41px]" src="../gambar/clock.png" alt="">
        <span class="text-[24px] md:text-[24px] xxs:text-[17px] font-pop font-light  mt-3">{{ formatDate1(jamkeluar) }}</span>
        <span class="text-[14px] font-pop font-semibold  mt-1">Keluar</span>
      </div>
      <div class="flex flex-col">
        <img class=" xl:h-[64px] xl:w-[64px]  md:h-[42px] xxs:h-[41px] xxs:w-[41px]" src="../gambar/check.png" alt="">
        <span class="text-[24px] md:text-[24px] xxs:text-[17px] font-pop font-light  mt-3">{{ total }}</span>
        <span class="text-[14px] font-pop font-semibold  mt-1">Kerja</span>
      </div>
    </div>
  </div>
</div>

<!-- <transition>
    <div
      class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50 font-pop font-regular"
      v-if="open"
    >
      <div class="p-10 bg-[#fff]  rounded-xl">
          {{ message }}
          <div class="mt-4">
            <button @click="confirmLeaveEarly = true; open = false; $emit('confirmed')" class="bg-blue-500 text-white px-4 py-2 rounded">
              Ya, Pulang Cepat
            </button>
            <button @click="open = false" class="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2">
              Tidak, Tetap Di Tempat
            </button>
          </div>
      </div>
    </div>
  </transition> -->

  <!-- </div> -->
  <transition>
    <div
      class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50 font-pop font-regular"
      v-if="open1"
    >
      <div class="flex flex-col items-center justify-center p-10 bg-[#fff]  rounded-xl">
        <img src="../gambar/checked.png" class="w-16 h-16 mb-10" alt="">
          {{ message }}
          </div>
      </div>
  </transition> 
</template>

<script>
import axios from 'axios';

export default {
  name: "AbsensiUser",
  data() {
    const now = new Date();
    const timeOfDay = this.getTimeOfDay(now);
    return {
      isAlreadyLogged: false,
      total: localStorage.getItem('total') || '-:-',
      formattedTime: this.getFormattedTime(),
      confirmLeaveEarly: false,
      timeOfDay: timeOfDay,
      jammasuk: localStorage.getItem('jammasuk') || '-:-',
      jamkeluar: localStorage.getItem('jamkeluar') || '-:-',
      absenStatus: 'Absen Masuk',
      idbasen: localStorage.getItem('absenId') || 'Default Value',
      buttonClass: 'flex flex-col items-center space-x-2 text-white shadow-xl font-semibold rounded-xl mt-10 xl:h-[278px] xl:w-[278px] md:w-[278px] md:h-[278px] xxs:w-[200px] xxs:h-[200px] transition-transform hover:scale-105 hover:shadow-3xl transform-gpu bg-[#606691]',
      formattedDate: this.formatDate(now),
      masuk: new Date().toLocaleDateString('en-CA'),
      quotes: [
        // Your quotes...
      ],
      nama: localStorage.getItem('nama') || 'Default Value',
      userId: localStorage.getItem('id') || 'Default Value',
      currentIndex: 0,
      status: localStorage.getItem('status') || 'Default Value',
      mesage: '',
      message: '',
      open: false,
      open1: false,
      photoCaptureOpen: false,
      photo: null,
    };
  },
  computed: {
    currentQuote() {
      return this.quotes[this.currentIndex];
    }
  },
  mounted() {
    setInterval(() => {
      this.formattedTime = this.getFormattedTime();
    }, 1000);
    setInterval(this.changeQuote, 10000);
    this.getabsen();
    this.initCamera();
  },
  created() {
    this.AbsenStatus();
  },
  props: {
    isDarkMode: Boolean,
  },
  methods: {
    async checkAlreadyLogged() {
      try {
        const response = await axios.get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/Absen/check`, {
          params: {
            userId: this.userId
          },
        });
        this.mesage = response.data;
        this.isAlreadyLogged = response.data.jamkeluar !== null;
      } catch (error) {
        console.error(error);
      }
    },
    getTimeOfDay(date) {
      const hours = date.getHours();
      let timeOfDay;

      if (hours >= 1 && hours < 11) {
        timeOfDay = 'Pagi';
      } else if (hours >= 11 && hours < 16) {
        timeOfDay = 'Siang';
      } else if (hours >= 16 && hours < 19) {
        timeOfDay = 'Sore';
      } else {
        timeOfDay = 'Malam';
      }

      return timeOfDay;
    },
    formatDate1(date) {
      if (!date || isNaN(new Date(date))) {
        return '-:-'; 
      }
      const options = { hour: '2-digit', minute: '2-digit' };
      return new Date(date).toLocaleTimeString('id-ID', options);
    },
    getFormattedTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
     
      const formattedHours = hours > 9 ? hours : `0${hours}`;
      const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`;
     
      return `${formattedHours}:${formattedMinutes}`;
    },
    formatDate(date) {
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('id-ID', options);
    },
    changeQuote() {
      this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
    },
    AbsenStatus() {
      if (this.status === 'Absen Keluar') {
        this.absenStatus = 'Absen Keluar';
        this.buttonClass = 'flex flex-col items-center space-x-2 text-white shadow-2xl font-semibold rounded-xl mt-10 xl:h-[278px] xl:w-[278px] md:w-[278px] md:h-[278px] xxs:w-[200px] xxs:h-[200px] transition-transform hover:scale-105 hover:shadow-3xl transform-gpu bg-[#E96A6A]';
      } else {
        this.absenStatus = 'Absen Masuk';
        this.buttonClass = 'flex flex-col items-center space-x-2 text-white shadow-2xl font-semibold rounded-xl xl:mt-10 md:mt-4 xl:h-[278px] xl:w-[278px] md:w-[228px] md:h-[200px] xxs:w-[200px] xxs:h-[200px] transition-transform hover:scale-105 hover:shadow-3xl transform-gpu bg-[#606691]';
      }
    },
    async toggleAbsenStatus() {
      if (!this.photo) {
        this.message = 'Silakan ambil foto terlebih dahulu.';
        return;
      }
      
      try {
        await this.checkAlreadyLogged(); 
        if (this.isAlreadyLogged) {
          this.message = 'Anda sudah melakukan Absen hari ini.';
          return;
        }
        
        const endpoint = this.absenStatus === 'Absen Masuk' ? 'masuk' : 'keluar';
        const now = new Date();
      
        let payload = {
          userId: '',
          jammasuk: '',
          jamkeluar: null,
          status: ''
          // photo: this.photo,
        };
        
        if (endpoint === 'masuk') {
          payload.userId = this.userId;
          payload.jammasuk = now;
          payload.status = 'Hadir';
        }

        const response = await axios.post(
          `http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/absen/${endpoint}`,
          endpoint === 'masuk' ? payload : { absenId: this.idbasen, jamkeluar: now }
        );

        if (this.absenStatus === 'Absen Masuk') {
          localStorage.setItem('absenId', response.data.absenId);
          localStorage.setItem('jammasuk', response.data.jammasuk);
          localStorage.setItem('status', 'Absen Keluar');
          localStorage.removeItem('jamkeluar');
          localStorage.removeItem('total');
          this.message = "Absen Masuk Berhasil";
          this.open = false;
          this.open1 = true;
          setTimeout(() => {
            this.open1 = false;
          }, 3000);
          setTimeout(() => {
            window.location.reload();
          }, 4000);
          this.absenStatus = 'Absen Keluar';
          this.buttonClass = 'flex flex-col items-center space-x-2 text-white shadow-2xl font-semibold rounded-xl mt-10 xl:h-[278px] xl:w-[278px] md:w-[278px] md:h-[278px] xxs:w-[200px] xxs:h-[200px] transition-transform hover:scale-105 hover:shadow-3xl transform-gpu bg-[#E96A6A]';
        } else {
          localStorage.removeItem('absenId');
          localStorage.removeItem('status');
          localStorage.setItem('jamkeluar', response.data.jamkeluar);
          const jamMasuk = new Date(response.data.jammasuk);
          const jamKeluar = new Date(response.data.jamkeluar);
          const timeDifference = jamKeluar - jamMasuk;
          const hours = Math.floor(timeDifference / (1000 * 60 * 60));
          const totalTime = `${hours} jam `;
          localStorage.setItem('total', totalTime);
          this.message = "Absen Keluar Berhasil";
          this.open = false;
          this.open1 = true;
          setTimeout(() => {
            this.open1 = false;
          }, 3000);
          setTimeout(() => {
            window.location.reload();
          }, 4000);
          this.absenStatus = 'Absen Masuk';
          this.buttonClass = 'flex flex-col items-center space-x-2 text-white shadow-2xl font-semibold rounded-xl mt-10 xl:h-[278px] xl:w-[278px] md:w-[278px] md:h-[278px] xxs:w-[200px] xxs:h-[200px] transition-transform hover:scale-105 hover:shadow-3xl transform-gpu bg-[#606691]';
        }
      } catch (error) {
        console.error('Error during Axios request:', error);
      }
    },
    async submitAbsen() {
      await this.toggleAbsenStatus();
      this.closePhotoCapture();
    },
    openPhotoCapture() {
      this.photoCaptureOpen = true;
      this.initCamera();
    },
    closePhotoCapture() {
      this.photoCaptureOpen = false;
      this.photo = null;
    },
    takePhoto() {
      const canvas = this.$refs.canvas;
      const photo = this.$refs.photo;
      const video = this.$refs.video;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      photo.src = canvas.toDataURL('image/png');
      photo.style.display = 'block';
      this.photo = photo.src;
    },
    initCamera() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          const video = this.$refs.video;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error('Error accessing camera: ', err);
        });
    },
    getabsen() {
      axios
        .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/Absen/list`, {
          params: {
            userId: this.userId
          }
        })
        .then(response => {
          this.absendata = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
