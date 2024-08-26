<template>
    <nav class="w-[250px] px-5 py-3 text-gray-700 border  rounded-lg bg-[#606691] font-pop" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link to="/Riwayat" class="inline-flex items-center text-sm font-medium text-white hover:text-[#A28BFF] dark:text-gray-400 dark:hover:text-white">
              <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Riwayat
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-3 h-3 mx-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
              <router-link to="/Riwayat/Rekapitulasi" class="ml-1 text-sm font-medium text-white hover:text-[#A28BFF] md:ml-2 dark:text-gray-400 dark:hover:text-white">Rekapitulasi</router-link>
            </div>
          </li>
        </ol>
      </nav>
</template>

<script>
export default{
name:"BreadRiwayat"

}
</script>

<style>
.router-link-active {
  color: #A28BFF;
 }
</style>