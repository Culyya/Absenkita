<template>
  <div class="flex">
    <button
      class="w-full  h-[30px] p-1 mr-4 rounded-lg text-white bg-[#606691]"
      @click="open = true"
    >
      <div class="flex flex-row justify-center">
        <img src="../gambar/tambah.svg" class="mr-1" alt="" />
        <h3 class="text-[12px] font-medium">Tambah Permohonan</h3>
      </div>
    </button>
      <!-- <button
        class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#BBBBBB] border border-[#BBBBBB]"
      >
        <div class="flex flex-row justify-center">
          <img src="../gambar/filter.svg" class="mr-1" alt="" />
          <h3 class="text-[12px] font-medium">Filter & Short</h3>
        </div>
      </button> -->
  </div>

  <transition>
  <div
    class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50 font-pop font-regular"
    v-if="open"
  >
    <div class="xl:min-w-[1000px] xxs:w-[20rem] overflow-scroll xxs:h-[35rem] bg-[#fff] px-8 py-6 md:px-10 md:py-8 rounded-xl">
      <form @submit.prevent="submitForm">
        <div class="mb-8">
          <h1 class="text-[20px] mb-4">Employee Permission</h1>
          <hr class="border-gray-300" />
        </div>
        <div class="flex md:flex-row md:justify-between xxs:flex-col">
          <div class="flex flex-col">
            <label for="">Nama</label>
            <input
              class="w-[16.3rem] md:w-auto px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
              type="text"
              name="Nama"
              id="Nama"
              v-model="Nama"
              disabled
            />
          </div>
          <div class="flex flex-col">
            <label for="">NIK</label>
            <input
              class="w-[16.3rem] md:w-auto px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
              type="text"
              name="NIK"
              id="NIK"
              v-model="NomorInduk"
              disabled
            />
          </div>
          <div class="flex flex-col">
            <label for="request">Permohonan</label>
            <select
              id="request"
              class="w-[16.3rem] md:w-auto mt-4 mb-4 py-2 border-gray-300 rounded-md"
              v-model="permohonan"
            >
              <option selected>Choose a Request</option>
              <option value="Permit">Permission</option>
              <option value="Paid">Paid Leave</option>
              <option value="Sick">Sick</option>
            </select>
          </div>
        </div>
        <div class="flex md:flex-row md:justify-between xxs:flex-col">
          <div class="flex flex-col">
            <label for="">Mulai Pengajuan</label>
            <input
              class="w-[16rem] md:w-auto mt-4 mb-4 py-2 border-gray-300 rounded-md"
              type="date"
              name="mulaipengajuan"
              id="mulaipengajuan"
              v-model="mulaipengajuan"
            />
          </div>
          <div class="flex flex-col">
            <label for="">Selesai Pengajuan</label>
            <input
              class="w-[16rem] md:w-auto mt-4 mb-4 py-2 border-gray-300 rounded-md"
              type="date"
              name="selesaipengajuan"
              id="selesaipengajuan"
              v-model="selesaipengajuan"
            />
          </div>
          <div class="flex flex-col">
            <label for="">Keterangan</label>
            <input
              class="w-[16.3rem] md:w-auto px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
              type="text"
              name="keterangan"
              id="keterangan"
              v-model="keterangan"
            />
          </div>
        </div>
        <div class="flex flex-row ">
          <div class="flex flex-col mr-2">
            <label class="" for="berkas">Upload file</label>
            <h1 class="w-[250px] px-7 mt-4 mb-4 py-2 h-[42px] border-gray-300 rounded-md border overflow-hidden">
              {{ selectedFileName }}
            </h1>
            <input
              class="hidden"
              aria-describedby="file_input_help"
              ref="berkas"
              id="berkas"
              type="file"
              @change="handleFileChange"
            />
            <p
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or PDF.
            </p>
          </div>
          <div class="flex flex-col ml-8">
            <li class="mt-8 text-[14px] font-medium">
              Upload file untuk bagi karyawan <br />
              yang mempunyai surat MC sakit
            </li>
          </div>
        </div>
        <div class="flex xl:flex-row  justify-end">
          <button
            class="mt-5 bg-[#606691] px-5 py-3 xxs:w-24 rounded-md"
            @click="open = false"
          >
            <h1 class="text-[12px] text-white">Cancel</h1>
          </button>
          <button
            class="ml-4 mt-5 bg-[#82C97C] px-5 py-3 xxs:w-24 rounded-md"
            type="submit"
          >
            <h1 class="text-[12px] text-white">Simpan</h1>
          </button>
        </div>
      </form>
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
      Nama: localStorage.getItem('nama') || 'Default Value',
      open: false,
      open1: false,
      userId:localStorage.getItem('id') || 'Default Value',
      NomorInduk:localStorage.getItem('NomorInduk') || 'Default Value',
      permohonan:"",
      mulaipengajuan:"",
      selesaipengajuan:"",
      keterangan:"",
      selectedFileName: "",
      berkas:"",
      status:"Proses",
    };
  },
  created() {
  
    const initialDatetime = new Date().toISOString().slice(0, 16); 
    this.selectedDatetime = initialDatetime;
  }, methods: {
    handleFileChange(event) {
      const input = event.target;
      if (input.files.length > 0) {
     
        this.selectedFileName = input.files[0].name;
      } else {
       
        this.selectedFileName = "";
      }
    },
    async submitForm() {
      try {
        const file = await this.$refs.berkas.files[0];
        const formData = new FormData();
        formData.append("userId", this.userId);
        formData.append("NomorInduk", this.NomorInduk);
        formData.append("permohonan", this.permohonan);
        formData.append("mulaipengajuan", this.mulaipengajuan);
        formData.append("selesaipengajuan", this.selesaipengajuan);
        formData.append("keterangan", this.keterangan);
        formData.append("berkas", file);
        formData.append("status", this.status);
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axios.post(
          `http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/Permohonan`,
          formData,
          config
        );
        console.log(response);
        this.message = "Pengajuan berhasil diajukan!";
        this.open=false
        this.open1=true
        setTimeout(() => {
        this.open1=false
      }, 3000);
        setTimeout(() => {
        
          window.location.reload();
        }, 4000);
      } catch (error) {
        console.log(error);
        this.message = "There was an error submitting the form.";
      }
    },
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
