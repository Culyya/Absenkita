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
                    <th scope="col" class="px-6 py-3  font-medium">
                        Divisi
                    </th>
                  
                </tr>
            </thead>
            <tbody>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black" v-for="(divi,index) in divisiData" :key="divi.divisiId">
                    <td class="px-6 py-4">
                        {{ index + 1 }}
                     </td>
                    <td class="px-6 py-4">
                        {{ divi.Departement.nama_departement }}
                    </td>
                    <td class="px-6 py-4">
                      {{ divi.nama_divisi }}
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
          divisiData: [], // Initialize permohonanData as an empty array
        };
      },
      props: {
          open: Boolean,
    },
    methods: {
        getdivisi() {
          axios
            .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/divisi`)
            .then((response) => {
              this.divisiData = response.data;
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
      mounted() {
        this.getdivisi();
      },
    };
    </script>