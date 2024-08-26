<template>

    <div class="flex flex-col font-pop ">
        <div class="flex flex-col justify-center mb-10 "  style="animation: muncul-kiri-kanan-fade 0.8s;">
            <h1 class="text-center text-[54px]">Konfigurasi Master Data</h1>
            <h2 class=" text-center text-[14px] text-[#AFAFAF] leading-relaxed tracking-wide font-thin">Data induk sistem terdiri dari data jabatan, departemen, seksi, <br> izin, shift, dan pegawai.</h2>
        </div>
        <div class="flex flex-row justify-center items-center font-medium " style="animation: muncul-kiri-kanan-fade 1s;">
            <div class="flex flex-col justify-between   bg-white min-w-[192.13px] h-[284.09px] shadow-lg rounded-[30px] mr-4">
                <div class="flex flex-col items-center mt-14">
                    <img class="w-[73.97px] mb-4" src="../gambar/IconUser2.svg" alt="">
                    <h1 class="text-[20px] mb-6">User</h1>
                    
                     
                </div>
                <div class="p-4 bg-[#606691] w-full h-[50.71px] rounded-b-[30px] text-white">
                    <router-link to="/MasterUser" class="flex justify-center">
                        Lihat Data
                    </router-link>
                </div> 
                
            </div>
            <div class="flex flex-col justify-between   bg-white min-w-[192.13px] h-[284.09px] shadow-lg rounded-[30px] ml-4 mr-4">
                <div class="flex flex-col items-center mt-14">
                    <img class="w-[73.97px] mb-4" src="../gambar/Role.svg" alt="">
                    <h1 class="text-[20px] mb-6">Role</h1>
                    
                     
                </div>
                <div class="p-4 bg-[#606691] w-full h-[50.71px] rounded-b-[30px] text-white">
                    <router-link to="/MasterRole" class="flex justify-center">
                        Lihat Data
                    </router-link>
                </div> 
                
            </div>
            <div class="flex flex-col justify-between   bg-white min-w-[192.13px] h-[284.09px] shadow-lg rounded-[30px] ml-4 mr-4">
                <div class="flex flex-col items-center mt-14">
                    <img class="w-[73.97px] mb-4" src="../gambar/posisi.svg" alt="">
                    <h1 class="text-[20px] mb-6">Posisi</h1>
                    
                     
                </div>
                <div class="p-4 bg-[#606691] w-full h-[50.71px] rounded-b-[30px] text-white">
                    <router-link to="/MasterPosisi" class="flex justify-center">
                        Lihat Data
                    </router-link>
                </div> 
                
            </div> 
        </div>
        <!-- ======================================== -->
        <div class="flex flex-row justify-center items-center mt-10 font-medium" style="animation: muncul-kiri-kanan-fade 1s;">
            <div class="flex flex-col justify-between   bg-white min-w-[192.13px] h-[284.09px] shadow-lg rounded-[30px] mr-4">
                <div class="flex flex-col items-center mt-14">
                    <img class="w-[73.97px] mb-4" src="../gambar/dp.svg" alt="">
                    <h1 class="text-[20px] mb-6">Departement</h1>
                   
                </div>
                <div class="p-4 bg-[#606691] w-full h-[50.71px] rounded-b-[30px] text-white">
                    <router-link to="/MasterDp" class="flex justify-center">
                        Lihat Data
                    </router-link>
                </div> 
                
            </div>
            <div class="flex flex-col justify-between   bg-white min-w-[192.13px] h-[284.09px] shadow-lg rounded-[30px] ml-4 mr-4">
                <div class="flex flex-col items-center mt-14">
                    <img class="w-[73.97px] mb-4" src="../gambar/divisi.svg" alt="">
                    <h1 class="text-[20px] mb-6">Divisi</h1>
                    
                     
                </div>
                <div class="p-4 bg-[#606691] w-full h-[50.71px] rounded-b-[30px] text-white">
                    <router-link to="/MasterDivisi" class="flex justify-center">
                        Lihat Data
                    </router-link>
                </div> 
                
            </div>
            <!-- <div class="flex flex-col justify-between   bg-white min-w-[192.13px] h-[284.09px] shadow-lg rounded-[30px] ml-4 mr-4">
                <div class="flex flex-col items-center mt-14">
                    <img class="w-[73.97px] mb-4" src="../gambar/shift.svg" alt="">
                    <h1 class="text-[20px] mb-2">Shift</h1>
                    <h2 class="text-[14px] text-[#BBBBBB]">13 Shift</h2>
                     
                </div>
                <div class="p-4 bg-[#606691] w-full h-[50.71px] rounded-b-[30px] text-white">
                    <router-link to="/MasterShift" class="flex justify-center">
                        Lihat Data
                    </router-link>
                </div> 
                
            </div> -->

            
        </div>

    </div>
</template>