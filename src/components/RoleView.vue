<template>
  <div class="flex flex-col justify-center font-pop">
    <div class="mb-10">
      <h1 class="text-[24px] font-medium">Data Role</h1>
    </div>
    <div class="flex flex-row justify-between mb-4">
      <div class="relative">
        <input
          class="min-w-[239px] bg-[#FFFFFF] border-[#BBBBBB] rounded-full text-[14px] focus:outline-none ring-0 focus:border-0"
          type="search"
          placeholder="Cari User......"
          v-model="searchTerm"
        />
        <div
          v-if="searchTerm === ''"
          class="absolute inset-y-0 right-4 pl-3 flex items-center pointer-events-none"
        >
          <img
            :src="require('@/gambar/filter.svg')"
            alt="Filter Icon"
            class="h-6 w-6"
          />
        </div>
      </div>
      <div class="">
        <button
          class="w-[142px] h-[30px] p-1 mr-4 rounded-lg text-white bg-[#606691]"
          @click="open = true"
        >
          <div class="flex flex-row justify-center">
            <img src="../gambar/tambah.svg" class="mr-1" alt="" />
            <h3 class="text-[12px] font-medium">Tambah</h3>
          </div>
        </button>
        <button
          class="w-[118px] h-[30px] flex-shrink-0 rounded-lg text-[#BBBBBB] border border-[#BBBBBB]"
        >
          <div class="flex flex-row justify-center">
            <img src="../gambar/filter.svg" class="mr-1" alt="" />
            <h3 class="text-[12px] font-medium">Filter & Short</h3>
          </div>
        </button>
      </div>
    </div>
    <TableRole />
  </div>

  <transition>
    <div
      class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50 font-pop font-regular"
      v-if="open"
    >
    <form @submit.prevent="submitForm">
      <div class="bg-white px-16 py-4 rounded-lg shadow-lg">
        <div class="w-full">
          <h1 class="text-[24px] mb-4">Tambah Role</h1>
          <hr class="mb-4" />
          <div class="flex flex-row justify-between">
            <div class="flex flex-col">
              <div class="grid grid-flow-row-dense grid-cols-2">
                <label class="mt-5" for="">Nama Role</label>
                <div class="col-span-2">
                  <input
                    class="w-full mt-4 mb-4 py-2 border-gray-300 rounded-md"
                    type="text"
                    name="role"
                    placeholder="Enter Your Add Role User..."
                    autocomplete="off"
                    v-model="name_role"
                  />
                </div>
              </div>
              <div class="flex justify-end">
            <button
              class="mt-5 bg-[#606691] px-5 py-3 rounded-md"
              @click="open = false"
            >
              <h1 class="text-[12px] text-white">Kembali</h1>
            </button>
            <button
              class="ml-4 mt-5 bg-[#82C97C] px-[3rem] py-3 rounded-md"
              type="submit"
            >
              <h1 class="text-[12px] text-white">Simpan</h1>
            </button>
          </div>
            </div>
            
          </div>
         
        </div>
      </div>
      </form>
    </div>
  </transition>
  
<transition>
    <div
      class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50 font-pop font-regular"
      v-if="open1"
    >
      <div class="flex flex-col items-center justify-center p-10 bg-[#fff]  rounded-xl">
        <img src="../gambar/checked.png" class="w-16 h-16 mb-10" alt="">
          {{ message }}
          </div>
      </div>
  </transition> 
</template>

<script>
import TableRole from "./TableRole.vue";
import axios from "axios";
export default {
  data() {
    return {
      searchTerm: "",
      open: "",
      open1:false,
      selectedDate: this.getInitialDate(),
      name_role: ""
    };
  },
  components: {
    TableRole,
  },
  computed: {
    filteredEntries() {
      let filtered = this.entries;

      if (this.selectedStatus.length > 0) {
        filtered = filtered.filter((entry) =>
          this.selectedStatus.includes(entry.status)
        );
      }

      if (this.selectedSort === "asc") {
        return filtered.sort((a, b) => a.dateIn.localeCompare(b.dateIn));
      } else {
        return filtered.sort((a, b) => b.dateIn.localeCompare(a.dateIn));
      }
    },
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    applyFilters() {
      this.closeModal();
    },
    getInitialDate() {
      return new Date().toISOString().split("T")[0];
    },
    async submitForm() {
      try {

        if (!this.open) {
      return;
    }
        const response = await axios.post(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/role`, {
          name_role: this.name_role,
        });
        console.log(response);
        this.message = "Data Role Berhasil Di Tambahkan";
        this.open=false
        this.open1=true
        setTimeout(() => {
        this.open1=false
      }, 3000);
        setTimeout(() => {
        
          window.location.reload();
        }, 4000);
      } catch (error) {
        console.log(error);
        this.message = "There was an error submitting the form.";
      }
    },
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.search-input:focus {
  outline: none;
  box-shadow: none; /* Optional: Remove box-shadow if it's present */
}
</style>
