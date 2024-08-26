<template>
   
    <div class="  first-letter:relative overflow-x-auto border sm:rounded-lg shadow-lg font-pop">
     
        <table class="min-w-full text-sm text-left text-gray-500 ] dark:text-gray-400">
            <thead class="text-xs text-gray-700 border-b bg-[#64707628]  dark:bg-gray-700 dark:text-gray-400 text-[14px]">
                <tr class="text-[#868686]">
                    <th scope="col" class="px-10 py-3  font-medium">
                        Nama
                    </th>
                    <th scope="col" class="px-1 py-3">
                        <div class="flex items-center  font-medium">
                            Nomor Induk Karyawan
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                            Permohonan 
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                             Awal pengajuan
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                             Akhir Pengajuan
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                            Status
                        </div>
                    </th>
                    <th scope="col" class=" py-3">
                        <div class="flex items-center  font-medium">
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black" v-for="data in permohonanData" :key="data.permohonanId">
                    <th scope="row" class="flex flex-row items-center px-10 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-12 h-12 rounded-full" src="https://i.pinimg.com/originals/6a/d8/5b/6ad85bc027799f25f39bf594cdf8d537.jpg" alt="">
                        <h1 class="ml-2">{{ data.User.Nama }}</h1>
                    </th>
                    <td class="px-1 py-4">
                       {{ data.NomorInduk }}
                    </td>
                    <td class="px-6 py-4">
                        {{ data.permohonan }}
                    </td>
                    <td class="px-6 py-4">
                        {{ formatDate(data.mulaipengajuan) }}
                    </td>
                    <td class="px-6 py-4">
                        {{ formatDate(data.selesaipengajuan) }}
                    </td>
                    <td class=" py-4">
                        <button
                        class="w-[118px] h-[30px] flex-shrink-0 rounded-lg ml-4"
                        :class="{ 'text-[#EFB812] bg-[#FFE69A]/50': data.status === 'Pending', 'text-green-500 bg-green-200': data.status === 'Approved', 'text-yellow-400 bg-yellow-100': data.status === 'Proses' }"
                      >
                                <h3 class="text-[12px] font-medium">{{ data.status }}</h3>
                              </button>
                    </td>
                    <td class=" py-4">
                       <FormApproval :data="data"></FormApproval>
                        
                </td>
                </tr>
               
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import FormApproval from './FormApproval'
  
  export default {
    components: { FormApproval },
    props: {
      open: Boolean,
    },
    data() {
      return {
        permohonanData: [], 
        role:parseInt(localStorage.getItem("role")),
        userId:parseInt(localStorage.getItem('id')),
      };
    },
    methods: {
        formatDate(date) {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(date).toLocaleDateString('id-ID', options);
    },
    getPermohonan() {
    let url = `http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/permohonan`;
    // let config = {};
    // url=`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/permohonan/list`;
    // config = {
    //   params: {
    //     userId: this.userId,
    //   }
    // };
  axios
    .get(url) 
    .then((response) => {
      this.permohonanData = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
},

    },
    mounted() {
      this.getPermohonan();
    },
  };
  </script>
  
  