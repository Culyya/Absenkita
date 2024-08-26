<template>
    <div class="w-[40rem] ml-4 mt-4 font-pop">
            <div class="grid grid-cols-3">
                <router-link to="/Presensi" class="flex flex-col justify-center items-center transition-transform hover:scale-105  " style="animation: muncul-kiri-kanan-fade 0.5s;">
                <div class="w-20 h-20 bg-ungu p-4 rounded-md shadow-lg mb-4 cursor-pointer ">
                    <img class="w-12 h-12"  src="../gambar/attendance.png" alt="">
                </div>
                <h2>Absensi Karyawan</h2>
                </router-link>
            <router-link to="/Permohonan" class="flex flex-col justify-center items-center transition-transform hover:scale-105 " style="animation: muncul-kiri-kanan-fade 0.8s;">
                <div class="w-20 h-20 bg-ungu p-4 rounded-md shadow-lg mb-4 cursor-pointer ">
                    <img class="w-12 h-12"  src="../gambar/document.png" alt="">
                </div>
                <h2>Pengajuan Perizinan</h2>
            </router-link>
            <router-link to="/MasterData" class="flex flex-col justify-center items-center t ransition-transform hover:scale-105 " style="animation: muncul-kiri-kanan-fade 1s;">
                <div class="w-20 h-20 bg-ungu p-4 rounded-md shadow-lg mb-4 cursor-pointer ">
                    <img class="w-12 h-12"  src="../gambar/gear.png" alt="">
                </div>
                <h2>Konfigurasi</h2>
            </router-link>
        </div>
    </div>
</template>
