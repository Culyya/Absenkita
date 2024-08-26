<template>
  <div class="flex flex-col justify-center font-pop">
    <div class=" mb-10">
      <h1 class="text-[24px] font-medium">Data User</h1>
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
            <h3 class="text-[12px] font-medium">Tambah </h3>
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
    <TableUser />
  </div>

  <transition>
    <div class="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center overflow-auto bg-black/40 bg-opacity-50  font-pop font-regular" v-if="open">
          <div
      class=" bg-white w-[1325px]  px-16 py-4 rounded-lg shadow-lg"
    >
    <form @submit.prevent="submitForm">
      <div class="w-full ">
        <h1 class="text-[24px] mb-4">Tambah User</h1>
        <hr class="mb-4" />
        <div class="flex flex-row justify-between">
          <div class="flex justify-center items-center flex-col ml-4">
              <img class="h-[150px] w-[150px] mb-4 rounded-full" v-if="imageUrl" :src="imageUrl" />
              <img class="h-[150px] w-[150px] border mb-4  rounded-full" v-else />
            <label
              class="px-5 py-1 flex-shrink-0 rounded-lg text-[#000000] border mb-7"
              for="pp"
              >Choose Profile</label
            >
            <input
            ref="pp"
            name="pp"
            id="pp"
            class="hidden"
            type="file"
            multiple
            accept="image/jpeg, image/png"
            @change="showPreview"
          />
          </div>
          <div class="flex flex-col">
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="Nama">Nama</label>
              <div class="col-span-2">
                <input
                  class="w-full  mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                  name="Nama"
                  id="Nama"
                  v-model="Nama"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="password">Password</label>
              <div class="col-span-2">
                <input
                  class="w-full  mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="mulaikontrak">Mulai Kontrak</label>
              <div class="col-span-2">
                <input
                class="w-full  mt-4 mb-4 py-2 border-gray-300 rounded-md"
                type="date"
                name="mulaikontrak"
                id="mulaikontrak"
                v-model="mulaikontrak"
              />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="departement">Departement</label>
              <div class="col-span-2">
                <select
                id="departement"
                class="w-[16.3rem] mt-4 mb-4 py-2 border-gray-300 rounded-md"
                v-model="departementId"
                name="departement"
              >
                <option value="" disabled selected>
                  Pilih Departement
                </option>
                <option
                  v-for="departement in dp"
                  :key="departement.id"
                  :value="departement.departementId"
                >
                  {{ departement.nama_departement }}
                </option>
              </select>
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="posisiId">Posisi</label>
              <div class="col-span-2">
                <select
                id="posisiId"
                class="w-[16.3rem] mt-4 mb-4 py-2 border-gray-300 rounded-md"
                v-model="posisiId"
                name="posisiId"
              >
                <option value="" disabled selected>
                  Pilih Posisi
                </option>
                <option
                  v-for="posisi in posisidata"
                  :key="posisi.id"
                  :value="posisi.posisiId"
                >
                  {{ posisi.nama_posisi }}
                </option>
              </select>
              </div>
            </div>
            </div>
          <div class="flex flex-col">
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="NomorInduk">NIK</label>
              <div class="col-span-2">
                <input
                  class="w-full  mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"  
                  name="NomorInduk"
                  id="NomorInduk"
                  v-model="NomorInduk"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Status</label>
              <div class="col-span-2">
                <select id="status"  v-model="status" name="status" class="w-[16.3rem]  mt-4 mb-4 py-2 border-gray-300 rounded-md">
                    <option selected>Pilih Status Kerja</option>
                    <option value="Kontrak">Kontrak</option>
                    <option value="Permanen">Permanen</option>
                    <option value="Magang">Magang</option>
                  </select> 
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="selesaikontrak">Selesai Kontrak</label>
              <div class="col-span-2">
                <input
                class="w-full  mt-4 mb-4 py-2 border-gray-300 rounded-md"
                type="date"
                name="selesaikontrak"
                id="selesaikontrak"
                v-model="selesaikontrak"
              />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="divisiId">Divisi</label>
              <div class="col-span-2">
                <select
                id="divisiId"
                class="w-[16.3rem] mt-4 mb-4 py-2 border-gray-300 rounded-md"
                v-model="divisiId"
                name="divisiId"
              >
                <option value="" disabled selected>
                  Pilih Divisi
                </option>
                <option
                  v-for="divisi in divisidata"
                  :key="divisi.id"
                  :value="divisi.divisiId"
                >
                  {{ divisi.nama_divisi }}
                </option>
              </select>
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="roleId">Role</label>
              <div class="col-span-2">
                <select
                id="roleId"
                class="w-[16.3rem] mt-4 mb-4 py-2 border-gray-300 rounded-md"
                v-model="roleId"
                name="roleId"
              >
                <option value="" disabled selected>
                  Pilih Divisi
                </option>
                <option
                  v-for="role in roledata"
                  :key="role.id"
                  :value="role.roleId"
                >
                  {{ role.name_role }}
                </option>
              </select>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
        <button class=" mt-5 bg-[#606691] px-5 py-3 rounded-md" @click="open = false">
            <h1 class="text-[12px] text-white">Kembali</h1>
          </button>
          <button class=" ml-4 mt-5  bg-[#82C97C] px-[3rem] py-3 rounded-md" type="submit"  @click="submitForm">
            <h1 class="text-[12px] text-white">Simpan</h1>
          </button>
        </div>
      </div>
      </form>
    </div>
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
import TableUser from "@/components/TableUser.vue";
import axios from "axios";
export default {
    data() {
    return {
      searchTerm: '',
      open:'',
      open1:false,
      Nama:"",
      password:"",
      departementId:"",
      posisiId:"",
      NomorInduk:"",
      status:"",
      divisiId:"",
      roleId:"",
      mulaikontrak: "",
      selesaikontrak:"",
      imageUrl: null,
      pp: "",
   
    };
  },
  components: {
    TableUser,
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
    async submitForm() {
      try {
        const file = await this.$refs.pp.files[0];
        const formData = new FormData();
        formData.append("Nama", this.Nama);
        formData.append("NomorInduk", this.NomorInduk);
        formData.append("password", this.password);
        formData.append("roleId", this.roleId);
        formData.append("status", this.status);
        formData.append("pp", file);
        formData.append("mulaikontrak", this.mulaikontrak);
        formData.append("selesaikontrak", this.selesaikontrak);
        formData.append("departementId", this.departementId);
        formData.append("divisiId", this.divisiId);
        formData.append("posisiId", this.posisiId);
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const response = await axios.post(
          `http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/user`,
          formData,
          config
        );
        console.log(response);
        this.message = "Data User Berhasil Di Tambahkan";
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
    openModal() {
      this.isModalOpen = true;
    },
    showPreview(event) {
      const file = event.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        this.imageUrl = fileUrl;
      }
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
    getdpData() {
      axios
        .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/departement`)
        .then((response) => {
          this.dp = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getposisi() {
      axios
        .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/posisi`)
        .then((response) => {
          this.posisidata = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getdData() {
      axios
        .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/divisi`)
        .then((response) => {
          this.divisidata = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getroleData() {
      axios
        .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/role`)
        .then((response) => {
          this.roledata = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // getuser() {
    //       axios
    //         .get(`http://${window.location.hostname}${process.env.VUE_APP_BACKEND_HOST}/user`)
    //         .then((response) => {
    //           this.userdata = response.data;
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //     },
  },
  mounted(){
    this.getdpData();
    this.getdData();
    this.getroleData();
    this.getposisi();
  }
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