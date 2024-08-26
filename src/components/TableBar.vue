<template>
   
    <div class="  first-letter:relative overflow-x-auto border rounded-lg xxs: bg-[#FAFBFD] font-pop">
     
        <table class="min-w-full w-full  text-sm text-left text-gray-500 ] dark:text-gray-400">
            <thead class="text-xs text-gray-700 border-b bg-[#64707628]  dark:bg-gray-700 dark:text-gray-400 text-[14px]">
                <tr class="text-[#868686]">
                    <th scope="col" class="px-10 py-3  font-medium">
                        Employee Status
                    </th>
                    <th scope="col" class="px-14 py-3">
                        <div class="flex items-center  font-medium">
                            Request
                        </div>
                    </th>
                    <th scope="col" class="px-10 py-3">
                        <div class="flex items-center  font-medium">
                            Requested on
                        </div>
                    </th>
                    <th scope="col" class="px-10 py-3">
                        <div class="flex items-center  font-medium">
                            Requested end
                        </div>
                    </th>
                    <th scope="col" class="px-10 py-3">
                        <div class="flex items-center  font-medium">
                            Status
                        </div>
                    </th>
                    <th scope="col" class="px-14 py-3">
                        <div class="flex items-center  font-medium">
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-if="entries.length > 0">
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black" v-for="entry in entries" :key="entry.id">
                    <th scope="row" class="flex flex-row items-center px-5 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">{{ entry.employee }}</h1>
                    </th>
                    <td class="px-14 py-4">
                        {{ entry.request }}
                    </td>
                    <td class="px-6 py-4">
                        {{  entry.dateIn }}
                    </td>
                    <td class="px-6 py-4">
                        {{ entry.dateOut }}
                    </td>
                    <td class="px-5 py-4">
                            <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#21B115] bg-[#82C97C]/30 ml-4">
                                <h3 class="text-[12px] font-medium"> {{  entry.status }} </h3>
                              </button>
                    </td>
                    <td class="px-4 py-4">
                        <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                            <h3 class="text-[12px] font-medium">View</h3>
                          </button>
                </td>
                </tr>
                </template>
                <tr  v-else>
                <h1 > tida ada </h1>
                </tr>
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';

export default {
  name: 'TableBar',
  setup() {
    const entries = ref([
          { id: 1, employee: 'Employee 1', request: '3312001017', dateIn: '2023-01-01',dateOut:"2023-01-02",status:"Hadir" },
          { id: 2, employee: 'Employee 2', request: '3312001017', dateIn: '2023-01-02',dateOut:"2023-01-02",status:"Tidak Hadir" },
          { id: 3, employee: 'Employee 3', request: '3312001017', dateIn: '2023-01-03',dateOut:"2023-01-02",status:"Cuti" },
    ]);

    // Your other setup logic

    return {
      entries,
    };
  },
};
</script>

  