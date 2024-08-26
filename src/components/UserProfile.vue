<template>
    <div class="container mx-auto px-4 py-8" >
       
    <div class=" grid grid-cols-2 font-pop">
        
        <div class="flex items-center flex-col" style="animation: muncul-kiri-kanan-fade 0.8s;">
            <div class="mr-52">
                <h1 class=" font-pop  mb-10 text-[20px] font-medium" >Personal Information</h1>
                 </div>
            <div class="max-w-full  w-[413px] h-[510px] bg-white shadow-md  rounded-lg ">
                <div class="flex items-center flex-col py-10">
                    <img class="h-[139px] mb-4 rounded-full" src="https://i.pinimg.com/originals/6a/d8/5b/6ad85bc027799f25f39bf594cdf8d537.jpg" alt="">
                    <h2 class="text-[18px] font-medium mb-4">{{ nama }}</h2>    
                    <h2 class="text-[16px] font-medium mb-8">Programming</h2>
                    <!-- <router-link to="/UbahProfile" class="px-5 py-1 flex-shrink-0 rounded-lg text-[#606691] bg-[#606691]/30 mb-7">
                        <h3 class="text-[12px] font-medium">Edit Profile</h3>
                    </router-link> -->
                    <h2 class="text-[16px] mb-3 font-medium">Nomor Induk Karyawan</h2>    
                    <h2 class="text-[18px] mb-2">{{ NIK }}</h2> 
                    <h2 class="text-[16px] mb-3 font-medium">Departement</h2>    
                    <h2 class="text-[18px] mb-2">Vlearn</h2>       
                </div>
            </div>
        </div>
        <div class="flex flex-col max-w-full  w-[682px] h-[348px] bg-white shadow-md  rounded-lg mt-16 " style="animation: muncul-kiri-kanan-fade 1s;">
            <div class="p-4 bg-[#606691] w-full h-[66px] rounded-t-lg text-white">
                <h2 class="text-[20px]">Detail Kontrak</h2>
            </div>
            <div class="flex justify-between flex-row px-4 py-2.5">
                <h3>NIK</h3>
                <h3>{{NIK}}</h3>
            </div>
            <hr>
            <div class="flex justify-between flex-row px-4 py-2.5">
                <h3>Tipe Kerja</h3>
                <h3>Kontrak</h3>
            </div>
            <hr>
            <div class="flex justify-between flex-row px-4 py-2.5">
                <h3>Mulai Kerja</h3>
                <h3>05-03-2024</h3>
            </div>
            <hr>
            <div class="flex justify-between flex-row px-4 py-2.5">
                <h3>Selesai Kerja</h3>
                <h3>05-03-2024</h3>
            </div>
            <hr>
            <div class="flex justify-between flex-row px-4 py-2.5">
                <h3>Departement</h3>
                <h3>VLEARN</h3>
            </div>
            <hr>
            <div class="flex justify-between flex-row px-4 py-2.5">
                <h3>Role</h3>
                <h3>Admin</h3>
            </div>
        </div>
    </div>

</div>
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
      total:localStorage.getItem('total') || '-:-',
      formattedTime: this.getFormattedTime(),
      confirmLeaveEarly:false,
      timeOfDay: timeOfDay,
      jammasuk:localStorage.getItem('jammasuk') || '-:-',
      jamkeluar:localStorage.getItem('jamkeluar') || '-:-',
      absenStatus: 'Absen Masuk',
      idbasen: localStorage.getItem('absenId') || 'Default Value',
      buttonClass: 'flex flex-col items-center space-x-2 text-white shadow-xl font-semibold rounded-xl mt-10 xl:h-[278px] xl:w-[278px] md:w-[278px] md:h-[278px] xxs:w-[200px] xxs:h-[200px] transition-transform hover:scale-105 hover:shadow-3xl transform-gpu bg-[#606691]',
      formattedDate: this.formatDate(now),
      quotes: [
        "Langkah pertama menuju sukses adalah keberanian untuk mencoba",
        "Kegagalan adalah kesempatan untuk mulai lagi, dengan lebih bijaksana",
        "Keberhasilan dimulai dengan tekad untuk mencoba",
        "Jangan menunda-nunda, hari ini adalah hari untuk bertindak",
        "Kemajuan bukanlah tentang seberapa cepat kamu bergerak, tapi seberapa sering kamu tidak berhenti",
        "Tetaplah berfokus pada tujuanmu, meski perjalanan terasa sulit",
        "Jangan biarkan ketakutan menghalangi impianmu, berani melangkah",
        "Semua impian dapat diwujudkan dengan tekad dan usaha yang konsisten",
        "Kesuksesan dimulai dengan satu keputusan berani setiap hari",
        "Jadilah sumber inspirasi bagi dirimu sendiri dan orang lain",
    ],
    nama: localStorage.getItem('nama') || 'Default Value',
    NIK: localStorage.getItem('NomorInduk') || 'Default Value',
    
    userId: localStorage.getItem('id') || 'Default Value',
    currentIndex: 0,
    status:localStorage.getItem('status') || 'Default Value',
    mesage:'',
    message:'',
    open:false,
    open1:false
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
        userId: this.userId, 
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
      console.log('status:', this.status);
      if (this.status === 'Absen Keluar') {
        this.absenStatus = 'Absen Keluar';
        this.buttonClass = 'flex flex-col items-center space-x-2 text-white shadow-2xl font-semibold rounded-xl mt-10 xl:h-[278px] xl:w-[278px] md:w-[278px] md:h-[278px] xxs:w-[200px] xxs:h-[200px] transition-transform hover:scale-105 hover:shadow-3xl transform-gpu bg-[#E96A6A]';
      } else {
        this.absenStatus = 'Absen Masuk';
        this.buttonClass = 'flex flex-col items-center space-x-2 text-white shadow-2xl font-semibold rounded-xl mt-10 xl:h-[278px] xl:w-[278px] md:w-[278px] md:h-[278px] xxs:w-[200px] xxs:h-[200px] transition-transform hover:scale-105 hover:shadow-3xl transform-gpu bg-[#606691]';
      }
    },

    async toggleAbsenStatus() {
      try {
        await this.checkAlreadyLogged(); 
        if (this.isAlreadyLogged) {
       this.message='Anda sudah melakukan Absen hari ini.'

        return;
      }
      
        const endpoint = this.absenStatus === 'Absen Masuk' ? 'masuk' : 'keluar';
        // const formattedJamMasuk = this.formatDate(this.jammasuk);
        // const formattedJamKeluar = this.formatDate(this.jamkeluar);
        const now = new Date();
      
    //   //   if (endpoint === 'keluar' && now.getHours() < 17) {
    //   // this.message = 'Apakah Anda Akan Pulang Cepat?';
    //   // this.open = true;

    //   // // Pause execution until the user responds to the confirmation
    //   // await new Promise((resolve) => {
    //   //   this.$once('confirmed', () => resolve());
    //   // });
    // }


        let payload = {
        userId: '',
        jammasuk: '',
        jamkeluar: null,
        status: '',
      };

    
    
      if (endpoint === 'masuk') {
        payload.userId = this.userId;
        payload.jammasuk = now;
        payload.status = 'Hadir';
      } 
      console.log(this.idbasen);
       
        const response = await axios.post(
          `http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/absen/${endpoint}`,
          endpoint === 'masuk' ? payload : { absenId: this.idbasen, jamkeluar: now }
         
        );
        console.log(response.data); 
      
      

if (this.absenStatus === 'Absen Masuk') {
  localStorage.setItem('absenId', response.data.absenId);
  localStorage.setItem('jammasuk', response.data.jammasuk);
  localStorage.setItem('status', 'Absen Keluar');
  localStorage.removeItem('jamkeluar');
  localStorage.removeItem('total');
  this.message = "Absen Masuk Berhasil";
        this.open=false
        this.open1=true
        setTimeout(() => {
        this.open1=false
      }, 3000);
        setTimeout(() => {
        
          window.location.reload();
        }, 4000);
  this.toggleAbsenStatus
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
  // const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const totalTime = `${hours} jam `;
  localStorage.setItem('total', totalTime);
  this.message = "Absen Keluar Berhasil";
        this.open=false
        this.open1=true
        setTimeout(() => {
        this.open1=false
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
getabsen() {
        axios
          .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/Absen/list`,{
            params: {
            userId: this.userId
          }
          })
          .then((response) => {
            this.absendata = response.data;
          })
          .catch((error) => {
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
