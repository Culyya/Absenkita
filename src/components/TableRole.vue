<template>
   
    <div class="  first-letter:relative overflow-x-auto border sm:rounded-lg shadow-lg font-pop">
     
        <table class="min-w-full text-sm text-left text-gray-500 ] dark:text-gray-400">
            <thead class="text-xs text-gray-700 border-b bg-[#64707628]  dark:bg-gray-700 dark:text-gray-400 text-[14px]">
                <tr class="text-[#868686]">
                    
                    <th scope="col" class="px-6 py-3  font-medium">
                        No
                    </th>
                    <th scope="col" class="px-6 py-3  font-medium">
                        Role
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black" v-for="(role,index) in roledata" :key="role.roleId">
                    <td class="px-6 py-4">
                        {{ index + 1 }}
                     </td>
                    <td class="px-6 py-4">
                        {{ role.name_role }}
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
        roledata: [], // Initialize permohonanData as an empty array
      };
    },
    props: {
        open: Boolean,
  },
  methods: {
      getrole() {
        axios
          .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/role`)
          .then((response) => {
            this.roledata = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      this.getrole();
    },
  };
  </script>
  