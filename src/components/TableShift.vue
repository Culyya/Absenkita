<template>
   
    <div class="  first-letter:relative overflow-x-auto border sm:rounded-lg shadow-lg font-pop">
     
        <table class="min-w-full text-sm text-left text-gray-500 ] dark:text-gray-400">
            <thead class="text-xs text-gray-700 border-b bg-[#64707628]  dark:bg-gray-700 dark:text-gray-400 text-[14px]">
                <tr class="text-[#868686]">
                    
                    <th scope="col" class="px-6 py-3  font-medium">
                        No
                    </th>
                    <th scope="col" class="px-6 py-3  font-medium">
                        Shift
                    </th>
                    <th scope="col" class="px-6 py-3  font-medium">
                        Aksi
                    </th>
                    <th scope="col" class=" py-3">
                        <div class="flex items-center  font-medium">
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black" v-for="(shi,index) in shiftdata" :key="shi.shiftId">
                    <td class="px-6 py-4">
                        {{ index + 1 }}
                     </td>
                    <td class="px-6 py-4">
                        {{ shi.nama_shift }}
                    </td>
                    <td class=" py-4">
                            <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#4a5397] bg-[#606691]/30 ml-4">
                                <h3 class="text-[12px] font-medium">{{ shi.nama_shift }}</h3>
                              </button>
                    </td>
                    <td class=" py-4">
                       <FormApproval ></FormApproval>
                        
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
      data() {
        return {
          shiftdata: [], // Initialize permohonanData as an empty array
        };
      },
      props: {
          open: Boolean,
    },
    methods: {
        getshift() {
          axios
            .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/shift`)
            .then((response) => {
              this.shiftdata = response.data;
            })
            .catch((error) => {
              console.log(error);
            });
        },
      },
      mounted() {
        this.getshift();
      },
    };
    </script>