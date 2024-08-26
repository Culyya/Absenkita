<template>
    <div class="h-screen flex justify-center items-center">
        <div class="font-pop text-center text-[24px] font-medium ">
            <div class="border-2 mb-4 rounded shadow"  style="animation: muncul-kiri-kanan-fade 0.8s;">
                <img src="../gambar/no-no-no.gif" alt=""> 
            </div>
            <h1  style="animation: muncul-kiri-kanan-fade 1s;">Harap Melakukan Login Terlebih Dahulu Yaaa...</h1>
            <router-link to="/" class="flex  w-full justify-center rounded-md bg-ungu px-3 py-2.5 mt-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  style="animation: muncul-kiri-kanan-fade 1.3s;">kembali ke login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "DangerPage"
}
</script>

<style scoped>
/* Tambahkan CSS ini untuk mengatur agar isi div muncul di tengah */
.font-pop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
