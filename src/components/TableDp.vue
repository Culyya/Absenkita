<template>
   
    <div class="  first-letter:relative overflow-x-auto border sm:rounded-lg bg-[#FAFBFD] font-pop">
     
        <table class="min-w-full text-sm text-left text-gray-500 ] dark:text-gray-400">
            <thead class="text-xs text-gray-700 border-b bg-[#64707628]  dark:bg-gray-700 dark:text-gray-400 text-[14px]">
                <tr class="text-[#868686]">
                    
                    <th scope="col" class="px-6 py-3  font-medium">
                        No
                    </th>
                    <th scope="col" class="px-6 py-3  font-medium">
                        Departement
                    </th>
          
                </tr>
            </thead>
            <tbody>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black" v-for="(dp,index) in dpData" :key="dp.departementId">
                    <td class="px-6 py-4">
                        {{ index + 1 }}
                     </td>
                    <td class="px-6 py-4">
                        {{ dp.nama_departement }}
                    </td>
                   
                </tr>
               
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {

      data() {
        return {
          dpData: [], // Initialize permohonanData as an empty array
        };
      },
      props: {
          open: Boolean,
    },
    methods: {
        getdp() {
          axios
            .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/departement`)
            .then((response) => {
              this.dpData = response.data;
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
      mounted() {
        this.getdp();
      },
    };
    </script>