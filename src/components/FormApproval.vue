<template>
    <div class="">
        <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] "  @click="open = true">
            <h3 class="text-[12px] font-medium">Lihat Data</h3>
          </button>
    </div>
    <transition>
  <div
    class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50 font-pop font-regular"
    v-if="open"
  >
    <div class="relative  xl:w-[1000px] mx-auto xxs:w-[20rem] overflow-scroll xxs:h-[35rem] bg-[#fff] px-8 py-6 md:px-10 md:py-8 rounded-xl">
      <div class="mb-8">
        <h1 class="text-2xl mb-4 font-semibold">Employee Permission</h1>
        <hr class="border-gray-300">
      </div>
      <div class="grid grid-cols-1 gap-y-6 gap-x-6 md:grid-cols-3">
        <div class="flex flex-col">
          <label for="nama" class="mt-5">Nama</label>
          <input
            id="nama"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
            v-model="Nama"
            disabled
          >
        </div>
        <div class="flex flex-col">
          <label for="employeeId" class="mt-5">Employee ID</label>
          <input
            id="employeeId"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
            v-model="NomorInduk"
            disabled
          >
        </div>
        <div class="flex flex-col">
          <label for="request" class="mt-5">Request</label>
          <input
            id="request"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
            v-model="permohonan"
            disabled
          >
        </div>
        <div class="flex flex-col">
          <label for="requestedOn" class="mt-5">Requested On</label>
          <input
            id="requestedOn"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
            :value="formatDate(data.mulaipengajuan)"
            disabled
          >
        </div>
        <div class="flex flex-col">
          <label for="requestedEnd" class="mt-5">Requested End</label>
          <input
            id="requestedEnd"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
            :value="formatDate(data.selesaipengajuan)"
            disabled
          >
        </div>
        <div class="flex flex-col">
          <label for="reason" class="mt-5">Reason</label>
          <input
            id="reason"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
            v-model="keterangan"
            disabled
          >
        </div>
        <div class="flex flex-col">
          <label for="viewFile" class="mt-5">View File</label>
          <img
            id="viewFile"
            class="w-full h-auto border border-gray-300 rounded-md cursor-pointer"
            :src="getImageSrc(berkas)"
            @click="showPreview(getImageSrc(berkas))"
            alt=""
          >
        </div>
      </div>
      <div class="flex justify-end mt-8">
        <button
          class="mr-3 bg-gray-500 text-white px-5 py-2 rounded-md"
          @click="open = false"
        >
          Back
        </button>
        <div v-if="role === 1">
          <button
            class="mr-3 bg-green-400 text-white px-5 py-2 rounded-md"
            @click="setStatus('Approved')"
          >
            Approve
          </button>
          <button
            class="bg-red-400 text-white px-5 py-2 rounded-md"
            @click="setStatus('Rejected')"
          >
            Reject
          </button>
        </div>
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

  <div v-if="isPreviewVisible" class="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-75">
      <div class="relative">
        <img :src="previewImage" class="max-w-full max-h-full">
        <button @click="closePreview" class="absolute top-0 right-0 mt-4 mr-4 text-white">Close</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      return {
        isPreviewVisible: false,
        previewImage: '',
        open: false,
        open1:false,
        Nama:this.data.User.Nama,
        permohonan:this.data.permohonan,
        mulaipengajuan:this.data.mulaipengajuan,
        selesaipengajuan:this.data.selesaipengajuan,
        keterangan:this.data.keterangan,
        berkas:this.data.berkas,
        status:this.data.status,
        NomorInduk:this.data.NomorInduk,
        permohonanId:this.data.permohonanId,
        role:parseInt(localStorage.getItem("role")),
        userId:parseInt(localStorage.getItem('id')),
        status1: '',
        waktu:new Date().toISOString().substr(0, 10)
      };
    },
    methods:{
    formatDate(date) {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(date).toLocaleDateString('id-ID', options);
    }, 
    // getImageSrc(filename) {
    //   if(filename){
    //   return require(`/Users/suryatirtachandra/Documents/AbsenKita/AbsenKita/frontend/public/File/${filename}`);
    //   }
    // },
    setStatus(status) {
      this.status1 = status;
      this.submitForm()
    },
    showPreview(imageSrc) {
      this.previewImage = imageSrc;
      this.isPreviewVisible = true;
    },
    closePreview() {
      this.isPreviewVisible = false;
      this.previewImage = '';
    },
    async submitForm() {
      try {
       
        // const formData = new FormData();
        // formData.append("status", this.status1);
        // formData.append("role", this.role);
        // formData.append("waktu", this.waktu); 
        // formData.append("permohonan_id", this.permohonanId);
    
        // const config = {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // };
        if (!this.open) {
      return;
    }
    
        const response = await axios.post(
          `http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/Permohonan/update`,{
          status:this.status1,
          role:this.role,
          waktu:this.waktu,
          permohonanId:this.permohonanId
          }
        );
        console.log(response);
        this.message = "Status Pengajuan Berhasil Di Update";
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
    props: {
    data: Object 
  }
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
  .cursor-pointer {
  cursor: pointer;
}
.fixed {
  position: fixed;
}
.inset-0 {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.bg-black {
  background-color: black;
}
.bg-opacity-75 {
  background-color: rgba(0, 0, 0, 0.75);
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.relative {
  position: relative;
}
.max-w-full {
  max-width: 100%;
}
.max-h-full {
  max-height: 100%;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.mt-4 {
  margin-top: 1rem;
}
.mr-4 {
  margin-right: 1rem;
}
.text-white {
  color: white;
}

  
  </style>