<template>
  <div class="container mx-auto py-8 font-pop flex items-center justify-center">
    <div
      class=" bg-white w-[1325px] h-full px-16 py-4 rounded-lg shadow-lg"
    >
      <div class="w-full ">
        <h1 class="text-[24px] mb-4">UbahProfile</h1>
        <hr class="mb-4" />
        <div class="flex flex-row justify-between">
          <div class="flex justify-center flex-col ml-4">
            <img class="h-[139px] mb-4" src="../gambar/orang2.svg" alt="" />
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
            />
          </div>
          <div class="flex flex-col">
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Nama</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Password</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Mulai Kontrak</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Departement</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Manager</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">NIK</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Status</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Selesai Kontrak</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Section</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div class="grid grid-flow-row-dense grid-cols-3">
              <label class="mt-5" for="">Role</label>
              <div class="col-span-2">
                <input
                  class="w-full px-7 mt-4 mb-4 py-2 border-gray-300 rounded-md"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
        <router-link to="/Profile" class=" mt-5 bg-[#606691] px-5 py-3 rounded-md" @click="open = false">
            <h1 class="text-[12px] text-white">Kembali</h1>
          </router-link>
          <button class=" ml-4 mt-5  bg-[#82C97C] px-[3rem] py-3 rounded-md" @click="open = false">
            <h1 class="text-[12px] text-white">Submit</h1>
          </button>
        </div>
      </div>
      
    </div>
    
  </div>
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
}

</script>
