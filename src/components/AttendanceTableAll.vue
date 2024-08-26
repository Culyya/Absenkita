<template>
  <div class="" style="animation: muncul-kiri-kanan-fade 1s;">
    <div class="flex flex-row justify-between font-pop mb-5">
      <h1 class="font-medium text-[20px]">Keseluruhan Presensi</h1>
      <button
      class="w-[120px] h-[30px] p-1 mr-4 rounded-lg text-white bg-[#606691]"
      @click="open = true"
    >
      <div class="flex flex-row justify-center">
        <h3 class="text-[12px] font-medium">Filter</h3>
      </div>
    </button>
    </div>

    <!-- Filter and Sort Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-16 flex items-center justify-end z-50 top-[-16rem]"
    >
      <div class="modal bg-white rounded-lg shadow-lg p-4 w-52">
        <!-- Filter Checkboxes -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Filter by Category:</label
          >
          <div class="mt-1">
            <label for="cuti" class="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="cuti"
                v-model="selectedStatus"
                value="Hadir"
                class="h-5 w-5 text-blue-500 rounded-md border-gray-300 focus:ring-blue-400"
              />
              <span class="ml-2 text-sm text-gray-700">Hadir</span>
            </label>
            <label for="sakit" class="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="sakit"
                v-model="selectedStatus"
                value="Tidak Hadir"
                class="h-5 w-5 text-blue-500 rounded-md border-gray-300 focus:ring-blue-400"
              />
              <span class="ml-2 text-sm text-gray-700">Tidak Hadir</span>
            </label>
            <label for="izin" class="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="izin"
                v-model="selectedStatus"
                value="Cuti"
                class="h-5 w-5 text-blue-500 rounded-md border-gray-300 focus:ring-blue-400"
              />
              <span class="ml-2 text-sm text-gray-700">Cuti</span>
            </label>
          </div>
        </div>

        <!-- Sort Radiobuttons -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Sort by:</label
          >
          <div class="mt-1">
            <label for="asc" class="flex items-center cursor-pointer">
              <input
                type="radio"
                id="asc"
                v-model="selectedSort"
                value="asc"
                class="h-5 w-5 text-blue-500 rounded-full border-gray-300 focus:ring-blue-400"
              />
              <span class="ml-2 text-sm text-gray-700">Ascending</span>
            </label>
            <label for="desc" class="flex items-center cursor-pointer">
              <input
                type="radio"
                id="desc"
                v-model="selectedSort"
                value="desc"
                class="h-5 w-5 text-blue-500 rounded-full border-gray-300 focus:ring-blue-400"
              />
              <span class="ml-2 text-sm text-gray-700">Descending</span>
            </label>
          </div>
        </div>

        <!-- Apply Button -->
        <!-- <button @click="applyFilters" class="bg-blue-500 text-white px-4 py-2 rounded-md">Apply</button> -->

        <!-- Close Modal Button -->
        <button
          @click="closeModal"
          class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mt-2"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Table -->
    <div
      class="first-letter:relative overflow-x-auto border sm:rounded-lg bg-[#FAFBFD] font-pop font-medium"
      style="animation: muncul-kiri-kanan-fade 1s;" >
      <table
        class="min-w-full text-sm text-left text-gray-600  dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 border-b bg-[#64707628] dark:bg-gray-700 dark:text-gray-400 text-[14px]"
        >
          <tr class="text-[#868686]">
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center font-medium">
              No
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center font-medium">
              Nama
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center font-medium">
                Jam &amp; Tanggal Masuk
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center font-medium">
                Jam &amp; Tanggal keluar
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center font-medium">Status</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b dark:bg-gray-800 dark:border-gray-700 text-[16px]"
            v-for="(abse,index) in filteredEntries"
            :key="abse.absenId"
          >

          <td class="px-6 py-4">
              <h2> {{ index + 1}}</h2>
            
            </td>
            <td class="px-6 py-4">
              <h2> {{ abse.User.Nama}}</h2>
            
            </td>
            <td class="px-6 py-4">
              <h2 > {{ formatDate(abse.jammasuk) }}</h2>
            
            </td>
            <td class="px-6 py-4">
              <h2>{{ abse.jamkeluar ? formatDate(abse.jamkeluar) : '-:-' }}</h2>

            
            </td>

            <td class="py-4">
              <button
                class="w-[118px] h-[30px] flex-shrink-0 rounded-lg ml-4"
                :class="{
                  'text-[#21B115] bg-[#82C97C]/30':
                  abse.status === 'Hadir' || abse.status === 'Cuti',
                  'text-[#FF0000] bg-[#FF0000]/30':
                  abse.status === 'Tidak Hadir',
                }"
              >
                <h3 class="text-[12px] font-medium">{{ abse.status }}</h3>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <transition>
    <div
      class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50 font-pop font-regular"
      v-if="open"
    >
   
    <div class="bg-white px-10 py-10 rounded-lg gap-6">
      <h1 class="mb-4">Filter Rekap Absensi</h1>
    <hr class="mb-4">
    <label for="month">Bulan</label>
    <select v-model="selectedMonth" class="rounded-lg ml-4 mr-6" id="month">
      <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
    </select>

    <label for="year">Tahun</label>
    <select v-model="selectedYear" class="ml-4 rounded-lg" id="year">
      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
    </select>

   
  
        <div class="flex justify-end mt-4">
          <button
            class="mt-5 bg-[#606691] px-5 py-3 rounded-md"
            @click="open = false"
          >
            <h1 class="text-[12px] text-white">Cancel</h1>
          </button>
          <button
            class="ml-4 mt-5 bg-[#82C97C] px-[2rem] py-3 rounded-md"
            @click="applyFilter"
          >
            <h1 class="text-[12px] text-white">Submit</h1>
          </button>
        </div>
      </div>
    </div>
  </transition>
  <transition>
  <div
  class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto font-pop font-regular"
  v-if="open2"
>
  <div class="min-w-[614px] bg-[#fff] px-12 py-10 rounded-xl shadow-lg font-medium" 
  >
  
    <!-- <div class="mb-8">
      <img src="../gambar/labtech.svg" alt="">
      <h1>Rekap Absensi Karyawan</h1>
      <div class="flex flex-row">
        <h2>Periode</h2>
        <h2 class="ml-10">{{abse.jammasuk}}</h2>
        <p>To</p>
        <h2>{{abse.jammasuk}}</h2>
      </div>
      <div class="flex flex-row">
        <h2>NIK    :</h2>
        <h2>{{abse1.Nomorinduk}}</h2>
      </div>
      <div class="flex flex-row">
        <h2>Nama    :</h2>
        <h2>{{abse1.nama}}</h2>
      </div>
      <div class="flex flex-row">
        <h2>Departement    :</h2>
        <h2>{{abse1.departementId}}</h2>
      </div>
      <div class="flex flex-row">
        <h2>Nama    :</h2>
        <h2>Surya Tirta Chandra</h2>
      </div>
    </div> -->
    <div
    class="first-letter:relative overflow-x-auto border sm:rounded-lg bg-[#FAFBFD] font-pop"
  >
    <table
      class="min-w-full text-sm text-left text-gray-500 ] dark:text-gray-400"
     >
      <thead
        class="text-xs text-gray-700 border-b bg-[#64707628] dark:bg-gray-700 dark:text-gray-400 text-[14px]"
      >
        <tr class="text-[#868686]">
        <th scope="col" class="px-2 py-3 font-medium">No</th>
        <th scope="col" class="px-2 py-3 font-medium">Nama</th>
          <th scope="col" class="px-6 py-3 font-medium">Tanggal</th>
          <th scope="col" class="px-14 py-3">
            <div class="flex items-center font-medium text-center">Jam</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center font-medium">Total Jam kerja</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center font-medium">Absen</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center font-medium">Hari kerja</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center font-medium">Overtime</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black"
          v-for="(data,index) in absendata.data" :key="data.absenId" >
          
          <td class="px-3 py-4">{{ index + 1 }}</td>
          <td class="px-3 py-4">{{ data.User.Nama }}</td>
            <td class="px-3 py-4">{{data.absenId }}</td>
          <td scope="row" class=" flex flex-row px-4 py-4">
            <h2>   {{ formatDate(data.jammasuk) }}</h2>
            <p class="mr-2 ml-2">To</p>
            <h2>{{ formatDate(data.jamkeluar) }}</h2>
          </td>
          <td class="px-6 py-4 text-center">{{ data.status }}</td>
          <td class="px-6 py-4 text-center">{{ data.Nomorinduk }}</td>
          <td class="px-6 py-4 text-center">{{ data.Nomorinduk }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    <div class="flex justify-end">
      <button
        class="mt-5 bg-[#606691] px-5 py-3 rounded-md"
        @click="open2 = false"
      >
        <h1 class="text-[12px] text-white">Cancel</h1>
      </button>
      <button
        class="ml-4 mt-5 bg-[#82C97C] px-[2rem] py-3 rounded-md"
        @click="open2 = false" type="submit"
      >
        <h1 class="text-[12px] text-white">Submit</h1>
      </button>
    </div>
  </div>
  
</div>
</transition>
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
 
  data() {
    return {
      open: false,
      open2: false,
      open1:false,
      message:'',
      isModalOpen: false,
      selectedStatus: [], // Filter selection
      selectedSort: "asc", // Sort selection
      selectedDate1: new Date().toLocaleDateString('en-CA'),
      selectedDate2: new Date().toLocaleDateString('en-CA'), 
      absendata:[],
      bulan:'',
      month:'',
      bulan1: new Date().getMonth(),
      absendata2:[],
      userId: localStorage.getItem('id') || 'Default Value',
      selectedMonth: new Date().getMonth() + 1, // Default to the current month
      selectedYear: new Date().getFullYear(), // Default to the current year
      months: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ],
      years: [2022, 2023, 2024], // You can customize the list of years
    };
  },
  computed: {
    filteredEntries() {
      let filtered = this.absendata;

      if (this.selectedStatus.length > 0) {
        filtered = filtered.filter((abse) =>
          this.selectedStatus.includes(abse.status)
        );
      }

      if (this.selectedSort === "asc") {
        return filtered.sort((a, b) => a.jammasuk.localeCompare(b.jammasuk));
      } else {
        return filtered.sort((a, b) => b.jammasuk.localeCompare(a.jammasuk));
      }
    },
  },
  methods: {
    formatDate(date) {
  try {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };

    const formattedDate = new Date(date).toLocaleDateString('id-ID', options);
    return formattedDate;
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
},
applyFilter() {
  this.getBetween(this.selectedMonth,this.selectedYear)
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    applyFilters() {
      this.closeModal();
    },
    getInitialDate() {
      return new Date().toISOString().split("T")[0];
    },
    getabsen() {
          axios
            .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/absen/all`,{
            
            })
            .then((response) => {
              this.absendata = response.data;
            })
            .catch((error) => {
              console.log(error);
              this.message="Data Tidak Ditemukan"
               this.open1=true
               setTimeout(() => {        
                this.open1=false
              }, 3000); 
            });
        },
        getBetween() {
          const baseUrl = `http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/absen/all`;
          const url = new URL(baseUrl);
        axios.get(url.toString())
          .then((response) => {
            this.absendata2 = response;
          })
          .catch((error) => {
            console.error('Error occurred:', error);
          });
      },
      },
     mounted() {
         this.getabsen();
        // this.getBetween();
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
