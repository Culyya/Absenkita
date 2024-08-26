
  <template>
  <h1 class="font-pop font-medium text-[20px] xl:mt-[10px] mb-4  " style="animation: muncul-kiri-kanan-fade 0.8s;">Riwayat Absensi</h1>
  <div class="grid grid-rows-1 grid-flow-col gap-0">
    <div class="flex flex-row max-w-full">
      <div class=" flex md:flex-row xxs:flex-col  mb-4 " style="animation: muncul-kiri-kanan-fade 0.8s;">
        <div class=" grid md:gap-6  md:grid-cols-2 xxs:gap-2 xxs:grid-cols-1 font-pop font-medium ">
        <div class="max-w-full xl:w-[278px] md:w-[200px] xxs:w-[300px] h-[115px] bg-white shadow-md rounded-lg mr-[3rem] mb-1 p-3" >
        <h3 class="text-[13px]  mb-1 text-[#373636]">Total Jam Kerja </h3>
        <h1 class="xl:text-[26px] md:text-[16px] xl:mb-1 md:mb-4 text-[#373636]">0 Jam</h1>
        <router-link to="/Riwayat/Rekapitulasi">
        <button class="w-[96px] h-[25px] flex-shrink-0 rounded-lg text-[#21B115] bg-green-400/30 ">
          <h3 class="xl:text-[12px] md:text-[10px]">Lihat Detail</h3>
        </button>
      </router-link>
        </div>
        <div class="max-w-full  xl:w-[278px] md:w-[200px] xxs:w-[300px] h-[115px] bg-white shadow-md rounded-lg p-3">
          <h3 class="text-[13px]  mb-1 text-[#373636]">Total Kehadiran</h3>
          <h1 class="xl:text-[26px] md:text-[16px] xl:mb-1 md:mb-4 text-[#373636]">{{ absendata.length }} Hari</h1>
          <button class="w-[96px] h-[25px] flex-shrink-0 rounded-lg text-[#21B115] bg-green-400/30 ">
            <h3 class="xl:text-[12px] md:text-[10px]">Lihat Detail</h3>
          </button>
        </div>
        <div class="max-w-full  xl:w-[278px] md:w-[200px] xxs:w-[300px] h-[115px] bg-white shadow-md rounded-lg p-3 ">
          <h3 class="text-[13px]  mb-1 text-[#373636]">Total Perizinan </h3>
          <h1 class="xl:text-[26px] md:text-[16px] xl:mb-1 md:mb-4 text-[#373636]">{{ permohonanData.length }}</h1>
          <router-link to="/permohonan" class=" flex-shrink-0 rounded-lg text-[#EFB812] ">
            <h3 class="xl:text-[12px] md:text-[10px] bg-[#FDEFC7] w-[96px] h-[25px] p-1 text-center  rounded-lg ">Lihat Detail</h3>
          </router-link>
        </div>
        <div class="max-w-full  xl:w-[278px] md:w-[200px] xxs:w-[300px] h-[115px] bg-white shadow-md rounded-lg p-3">
          <h3 class="xl:text-[13px]   text-[#373636]">Total Tidak Hadir </h3>
          <h1 class="xl:text-[26px] md:text-[16px] xl:mb-1 md:mb-4 text-[#373636]">0 </h1>
          <button class="w-[96px] h-[25px] flex-shrink-0 rounded-lg text-[#ED4747] bg-[#FCC1C3] ">
            <h3 class="xl:text-[12px] md:text-[10px]">Lihat Detail</h3>
          </button>
        </div>
        </div>
        <div class=" bg-white shadow-md  xl:w-[1051px] md:w-[800px] md:h-[260px] xxs:w-[300px] xxs:h-[550px]    rounded-lg  md:mt-0 xxs:mt-4 p-6">
          <div class="flex md:flex-row  xxs:flex-col-reverse md:justify-between xxs:justify-center xxs:items-center font-pop ">
            <div class="">
              <h1 class="text=[20px] font-medium mb-4">Selamat Pagi, {{nama}}!</h1>
              <h2 class="text=[14] font-regular mb-5">Hari ini {{formattedDate}}</h2>
    
              <p class=" italic font-light mb-10">“Setiap pagi adalah kesempatan baru untuk <br> menciptakan sesuatu yang luar biasa”</p>
              <!-- <button class="w-[96px] h-[25px] flex-shrink-0 rounded-lg text-[#606691] bg-[#606691]/50 ">
                <h3 class="text-[12px] font-medium">Lihat Detail</h3>
              </button> -->
            </div>
            <div class="flex flex-col justify-center items-center  md:ml-[11rem] ">
            <img class="h-[120px] w-[120px] mb-4 rounded-full" src="https://i.pinimg.com/originals/6a/d8/5b/6ad85bc027799f25f39bf594cdf8d537.jpg" alt="">
            <h1 class="text-center text-[12px] mb-4">{{ nama }}</h1>
            <p class="text-center xl:text-[12px] md:text-[10px]">Programming - Vlearn - SWD</p>
            </div>
          </div>
        </div>
        </div>
        
    </div>
    
    
  </div>
  <div class="flex flex-row justify-between mb-4 font-medium font-pop" style="animation: muncul-kiri-kanan-fade 1s;">
  <h1 class="">Riwayat  Pengajuan</h1>
  <!-- <h1 class="mr-[16rem]">Statistik Absensi</h1> -->
</div>
  <div class=" mb-24" style="animation: muncul-kiri-kanan-fade 1s;">
    <!-- <div class="md:w-full md:mr-8 xxs:w-[300px] xxs:h-[300px]"> -->
      <tablebar/>
    <!-- </div> -->
       <!-- <div class="flex flex-col  justify-center items-center bg-white shadow-md md:w-[525px] xxs:w-[300px] rounded-lg">
        <DoughnutChart class="md:w-[300px] " />
        <h1 class="mt-6 mb-4 font-medium"> Statistik ini memaparkan data absensi user</h1>
       </div> -->
       <!-- <tablebar1/> -->
    
  </div>

   




 
  

  </template>
    


<script>
 import axios from 'axios';

import tablebar from './TablePermohonanOne.vue'
// import tablebar1 from './TableRekap.vue'
// import  DoughnutChart from "../components/DoughnutChart.vue"
export default {
  data() {
    const now = new Date();
    const timeOfDay = this.getTimeOfDay(now);
  
  return {
    permohonanData: [], 
    userId: localStorage.getItem('id') || 'Default Value',
    absendata:[],
    timeOfDay: timeOfDay,
    nama: localStorage.getItem('nama') || 'Default Value',
    formattedDate: this.formatDate(now),
  };
},
  components: {
    tablebar,
    // DoughnutChart
    // tablebar1,
  },
  methods: {
        formatDate(date) {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(date).toLocaleDateString('id-ID', options);
    },
      getPermohonan() {
        axios
          .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/permohonan/list`,
          {
            params:{
              userId:this.userId
            }
          })
          .then((response) => {
            this.permohonanData = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
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
      getabsen() {
          axios
            .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/absen`,{
              params:{
                userId:this.userId
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

    mounted() {
      this.getPermohonan();
      this.getabsen();
    },
}
</script>