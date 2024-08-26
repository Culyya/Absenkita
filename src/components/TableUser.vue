<template>
   
    <div class="  first-letter:relative overflow-x-auto border sm:rounded-lg bg-white shadow-lg font-pop">
     
        <table class="min-w-full text-sm text-left text-gray-500  dark:text-gray-400">
            <thead class="text-xs text-gray-700 border-b bg-[#64707628]  dark:bg-gray-700 dark:text-gray-400 text-[14px]">
                <tr class="text-[#868686]">
                    <th scope="col" class="px-6 py-3  font-medium">
                        No
                    </th>
                    <th scope="col" class="px-6 py-3  font-medium">
                        Nama
                    </th>
                    <th scope="col" class="px-1 py-3">
                        <div class="flex items-center  font-medium">
                          NIK
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                           Posisi
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                           Departement
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                            Role
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
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black" v-for="(data,index) in userdata" :key="data.userId">
                    <td class="px-6 py-4">
                        
                        {{ index + 1 }}
                     </td>
                    <th scope="row" class="flex flex-row items-center px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img :src="data.pp ? `../../file/${data.pp}` : 'https://i.pinimg.com/originals/6a/d8/5b/6ad85bc027799f25f39bf594cdf8d537.jpg'" class="w-12 h-12 shadow-lg rounded-full" alt="">

                        <h1 class="ml-2">{{ data.Nama }}</h1>
                    </th>
                    <td class="px-1 py-4">
                       {{ data.NomorInduk }}
                    </td>
                    <td class="px-6 py-4">
                        {{ data.Posisi.nama_posisi }}
                    </td>
                    <td class="px-6 py-4">
                        {{ data.Departement.nama_departement }}
                    </td>
                    <td class="px-6 py-4">
                        {{ data.Role.name_role }}
                    </td>
                    <td class=" py-4">
                            <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#4a5397] bg-[#606691]/30 ml-4">
                                <h3 class="text-[12px] font-medium">{{ data.status }}</h3>
                              </button>
                    </td>
                    <td class=" py-4">
                       <!-- <FormApproval ></FormApproval> -->
                        
                </td>
                </tr>
               
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
//   import FormApproval from './FormApproval'
  export default {
    // components: { FormApproval },
      data() {
        return {
            userdata: [], 
        };
      },
      props: {
          open: Boolean,
    },
    methods: {
        getuser() {
          axios
            .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/user`)
            .then((response) => {
              this.userdata = response.data;
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
      mounted() {
        this.getuser();
      },
    };
    </script>
  