<template>
  <html class="h-screen bg-ungu">
    <body class="h-full">
      <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <div class="flex items-center justify-center">
            <div>
              <img
                class="mx-auto h-16 w-auto"
                src="../gambar/Logo.png"
                alt=""
              />
            </div>
            <div class="ml-3 font-pop font-regular text-judul  text-white">
              AbsenKita
            </div>
          </div>
          <h2
            class="mt-3 text-center font-pop font-light  text-white tracking-wide xl:px-4 xl:text-{12px} xl:leading-5 md:text-md xxs:text-xxs xl:px-{0.885rem}"
          >
            AbsenKita Aplikasi Absensi mobile web berbasis wifi. Dengan
            menggunakan aplikasi ini pengguna dapat absensi dengan cepat dan
            akurat
          </h2>
          <h1 v-if="ket" class="text-white text-sm text-center mt-4 font-pop bg-red-500 rounded-lg px-4 py-2 ">{{ ket }}</h1>
        </div>
        <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form @submit.prevent="login" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm font-regular font-pop leading-6 text-white"
                >Username</label
              >
              <div class="mt-2">
        
                <input
                  id="email"
                  name="email"
                  type="text"
                  v-model="nama"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 py-3 font-regular font-pop text-gray-500 shadow-sm ring-1 ring-inset ring-gray-400   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-regular font-pop leading-6 text-white"
                  >kata Sandi</label
                >
              </div>
              <div class="mt-2">
               
                <input
                  id="password"
                  name="password"
                  type="password"
                  v-model="password"
                  autocomplete="current-password"
                  class="block w-full rounded-md border-0 py-3 font-regular font-pop text-gray-500 shadow-sm ring-1 ring-inset  ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <!-- <div class="flex items-center justify-between">

              <div class="flex items-center">
                <input type="checkbox" id="myCheckbox" class=" text-[transaprant] border-[#000] focus:outline-none focus:ring focus:border-blue-300">
                <label for="myCheckbox" class="ml-2 font-regular font-pop text-white hover:text-indigo-500 text-[12px]">Ingat Saya</label>
              </div>
               <label class="flex items-center space-x-2 text-sm xxs:text-xs">
              <input
                type="radio"
                class="form-radio bg-transparent border-gray-300 text-indigo-600 h-5 w-5"
                :name="name"
                :value="true"
               ="selectedValue"
              >
                <span class="font-regular font-pop text-white">Ingat Saya  </span>
              </label> 
              <div class="text-sm">
                <a
                  href="#"
                  class="font-regular font-pop text-white hover:text-indigo-500"
                  >Lupa Sandi?</a
                >
              </div>
            </div> -->

            <div>
             
              <button
                class="flex mt-10  w-full justify-center rounded-md bg-hijau px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
           
            </div>
          </form>
        </div>
      </div>
    </body>
  </html>
</template>



<script>

import axios from "axios";

export default {
    data() {
        return {
       
          nama:"",
            password:"",
            ket:'',
        };
    },
  mounted() {
    this.userId = localStorage.getItem('id')
    if (this.userId) {
      this.$router.push('/dashboard');
    }
  },
  methods: {
    login() {
       axios.post( `http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/auth`, {
        nama: this.nama,
         password: this.password,
       })
       .then(response => {
        
        console.log(response.data);
         const token = response.data.token;
         const userId = response.data.userId;
         const nama = response.data.Nama;
         const role = response.data.roleId;
         const gambar = response.data.pp;
         const NIK = response.data.NomorInduk;
         localStorage.setItem('token', token); 
         localStorage.setItem('role', role);
         localStorage.setItem('id', userId);
         localStorage.setItem('nama', nama);
         localStorage.setItem('NomorInduk', NIK);
         localStorage.setItem('gambar', gambar);
        
         if (role === 1){
          this.$router.push('/Admin');
         } else {
         this.$router.push('/dashboard');
         }
       })
       .catch(error => {
         console.error(error);
         this.submitted = true;

         if (this.nama && this.password &&  this.submitted) {
         this.ket = "Email Atau Kata Sandi Anda Salah";
         setTimeout(() => {
          this.ket =""
         },2000)
         return;

         }

         if (!this.nama) {
         this.ket = "Harap Isi Email Anda";
         return;
         }
         if (!this.password) {
         this.ket = "Harap Isi Kata Sandi Anda";
         return;
}
         this.ket =  error.response.data.message;
       });
     },
   },
};
</script>