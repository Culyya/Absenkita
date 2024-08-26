<template>
    <div class="flex">
        <button class="w-[142px] h-[30px] p-1 mr-4 rounded-lg text-white bg-[#606691] " @click="open = true">
            <div class="flex flex-row justify-center">
            <img src="../gambar/tambah.svg" class="mr-1" alt="">
            <h3 class="text-[12px] font-medium">Add Permission</h3>
            </div>
          </button>
          <button class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#BBBBBB] border border-[#BBBBBB] ">
            <div class="flex flex-row justify-center">
                <img src="../gambar/filter.svg" class="mr-1" alt="">
                <h3 class="text-[12px] font-medium">Filter & Short</h3>
            </div>
          </button>
        </div>

    <transition>
        <div class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50  font-pop font-regular" v-if="open">
            <div class="min-w-[1000px] bg-[#fff] px-20 py-10 rounded-xl">
                <div class="mb-8">
                    <h1 class="text-[20px] mb-4">Employee Permission</h1>
                    <hr class=" border-gray-300">
                </div>
                <div class="flex md:flex-row md:justify-between  xxs:flex-col  ">
                    <div class="flex flex-col">
                        <label for="">Nama</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="text">
                    </div>
                    <div class="flex flex-col">
                        <label for="">EmployeeId</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="text">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Job Tittle</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="text">
                    </div>
                </div>
                <div class="flex flex-row justify-between  ">
                    <div class="flex flex-col">
                        <label for="">Departement</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="text">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Section</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="text">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Team Leader</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="text">
                    </div>
                </div>
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col">
                        <label for="request">Request</label>
                        <select id="request" class="w-[16.3rem]  mt-4 mb-4 py-2 border-gray-300 rounded-md">
                            <option selected>Choose a Request</option>
                            <option value="Permit">Permission</option>
                            <option value="Paid">Paid Leave</option>
                            <option value="Sick">Sick</option>
                          </select> 
                    </div>
                    <div class="flex flex-col">
                        <label for="">Request On</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="datetime-local"  name="datetime"
                        id="datetime"
                        v-model="selectedDatetime">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Request End</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="datetime-local"  name="datetime"
                        id="datetime"
                        v-model="selectedDatetime">
                    </div>
                </div>
                <div class="flex flex-row justify-between  ">
                    <div class="flex flex-col">
                        <label for="">Reason</label>
                        <input class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md " type="text">
                    </div>
                    <div class="flex flex-col mr-2">
                        <label class="" for="file_input">Upload file</label>
                        <input class=" mt-4 mb-4  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer   focus:outline-none " aria-describedby="file_input_help" id="file_input" type="file">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                    <div class="flex flex-col">
                       <li class="mt-8 text-[14px] font-medium   ">Upload file untuk bagi karyawan <br> yang mempunyai surat MC sakit</li>
                    </div>
                </div>
                <div class="flex justify-end">
                <button class=" mt-5 bg-[#606691] px-5 py-3 rounded-md" @click="open = false">
                    <h1 class="text-[12px] text-white">Cancel</h1>
                  </button>
                  <button class=" ml-4 mt-5  bg-[#82C97C] px-[6rem] py-3 rounded-md" @click="open = false">
                    <h1 class="text-[12px] text-white">Submit</h1>
                  </button>
                </div>
            </div>
          </div>          
    </transition>
  </template>
  <script>

  
  export default {
    data() {
      return {
        open: false,
        selectedDatetime: '',
      };
    },
    created() {
    // Saat komponen dimuat, atur nilai awal untuk selectedDatetime
    const initialDatetime = new Date().toISOString().slice(0, 16); // Format YYYY-MM-DDTHH:mm
    this.selectedDatetime = initialDatetime;
  },
    
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


  
  </style>
  