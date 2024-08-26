<template>
  <div
    class="first-letter:relative overflow-x-auto border sm:rounded-lg bg-[#FAFBFD] font-pop"
  >
    <table
      class="min-w-full text-sm text-left text-gray-500 ] dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 border-b bg-[#64707628] dark:bg-gray-700 dark:text-gray-400 text-[14px]"
      >
        <tr class="text-[#868686]">
        <th scope="col" class="px-2 py-3 font-medium">No</th>
          <th scope="col" class="px-6 py-3 font-medium">Tanggal</th>
          <th scope="col" class="px-14 py-3">
            <div class="flex items-center font-medium text-center">Jam</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center font-medium">Total Jam kerja</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center font-medium">Absen</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center font-medium">Hari kerja</div>
          </th>
          <th scope="col" class="px-6 py-3">
            <div class="flex items-center font-medium">Overtime</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b dark:bg-gray-800 dark:border-gray-700 text-[16px] font-medium text-black"
          v-for="(data,index) in entries" :key="data.id" >
          <td class="px-3 py-4">{{ index + 1 }}</td>
          <td class="px-6 py-4">{{ data.Tanggal }}</td>
          <td scope="row" class=" flex flex-row px-4 py-4">
            <h2>{{ data.JamMasuk }}</h2>
            <p class="mr-2 ml-2">To</p>
            <h2>{{ data.JamKeluar }}</h2>
          </td>
          <td class="px-6 py-4 text-center">{{ data.TotalJamKerja }}</td>
          <td class="px-6 py-4 text-center">{{ data.Absen }}</td>
          <td class="px-6 py-4 text-center">{{ data.JHK }}</td>
          <td class="px-6 py-4 text-center">{{ data.overtime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
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
  setup() {
    const entries = ref([
          { id: 1, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0" },
          { id: 2, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0"  },
          { id: 3, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0"  },
          { id: 3, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0"  },
          { id: 3, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0"  },
          { id: 3, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0"  },
          { id: 3, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0"  },
          { id: 3, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0"  },
          { id: 3, Tanggal: '01-01-2024', JamMasuk: '08.00', JamKeluar: '17.00',TotalJamKerja:"8",Absen:"0",JHK:"1",overtime:"0"  },
    ]);

    // Your other setup logic

    return {
      entries,
    };
},
  props: {
    open: Boolean,
  },
};
</script>

<style scoped>
table {
    background-color: white; /* Warna latar belakang */
    color: black; /* Warna teks */
  }
</style>
