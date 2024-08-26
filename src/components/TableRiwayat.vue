<template>
   
    <div class="  first-letter:relative overflow-x-auto border sm:rounded-lg bg-[#FAFBFD] font-pop">
     
        <table class="min-w-full text-sm text-left text-gray-500 ] dark:text-gray-400">
            <thead class="text-xs text-gray-700 border-b bg-[#64707628]  dark:bg-gray-700 dark:text-gray-400 text-[14px]">
                <tr class="text-[#868686]">
                    <th scope="col" class="px-10 py-3  font-medium">
                        Employee Name
                    </th>
                    <th scope="col" class="px-1 py-3">
                        <div class="flex items-center  font-medium">
                            Employee ID
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                            Requested 
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                            Requested On
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center  font-medium">
                            Requested End
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
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                       3312001017
                    </td>
                    <td class="px-6 py-4">
                        Paid Leave
                    </td>
                    <td class="px-6 py-4">
                        19 - 05  - 2023
                    </td>
                    <td class="px-6 py-4">
                        20 - 05  - 2023
                    </td>
                    <td class=" py-4">
                            <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#21B115] bg-[#82C97C]/30 ml-4">
                                <h3 class="text-[12px] font-medium">Approved</h3>
                              </button>
                    </td>
                    <td class=" py-4">
                       <FormApproval ></FormApproval>
                        
                </td>
                </tr>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                             <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#21B115] bg-[#82C97C]/30 ml-4">
                                 <h3 class="text-[12px] font-medium">Approved</h3>
                               </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                             <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#21B115] bg-[#82C97C]/30 ml-4">
                                 <h3 class="text-[12px] font-medium">Approved</h3>
                               </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                             <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#21B115] bg-[#82C97C]/30 ml-4">
                                 <h3 class="text-[12px] font-medium">Approved</h3>
                               </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                             <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#21B115] bg-[#82C97C]/30 ml-4">
                                 <h3 class="text-[12px] font-medium">Approved</h3>
                               </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
                <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                             <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#21B115] bg-[#82C97C]/30 ml-4">
                                 <h3 class="text-[12px] font-medium">Approved</h3>
                               </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                        <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#ED4747] bg-[#FF5E5E]/30 ml-4">
                            <h3 class="text-[12px] font-medium">Rejected</h3>
                          </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                             <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#21B115] bg-[#82C97C]/30 ml-4">
                                 <h3 class="text-[12px] font-medium">Approved</h3>
                               </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                             <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#ED4747] bg-[#FF5E5E]/30 ml-4">
                                 <h3 class="text-[12px] font-medium">Rejected</h3>
                               </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
                <tr class=" dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black">
                    <th scope="row" class="flex flex-row items-center px-10 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src="../gambar/orang.svg" alt="">
                        <h1 class="ml-2">Surya Tirta Chandra</h1>
                    </th>
                    <td class="px-1 py-4">
                        3312001017
                     </td>
                     <td class="px-6 py-4">
                         Paid Leave
                     </td>
                     <td class="px-6 py-4">
                         19 - 05  - 2023
                     </td>
                     <td class="px-6 py-4">
                         20 - 05  - 2023
                     </td>
                     <td class=" py-4">
                             <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#EFB812] bg-[#FFE69A]/50 ml-4">
                                 <h3 class="text-[12px] font-medium">Pending</h3>
                               </button>
                     </td>
                     <td class=" py-4">
                         <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#868686] bg-[#EBEDF0] ">
                             <h3 class="text-[12px] font-medium">View</h3>
                           </button>
                 </td>
                </tr>
               
            </tbody>
        </table>
    </div>
  </template>
  
  <script>

import FormApproval from './FormApproval'
export default {
  components: { FormApproval },
    data() {
      return {
        data: [
          {
            id: 1,
            nama: "Nama 1",
            request: "Permission",
            requestOn: "23-10-2023",
            requestEnd: "23-10-2023",
            status: "Status 1",
          },
          {
            id: 2,
            nama: "Nama 2",
            request: "Permission",
            requestOn: "23-10-2023",
            requestEnd: "23-10-2023",
            status: "Status 2",
          },
        ],
      };
    },
    props: {
        open: Boolean,
  },

  };
  </script>
  