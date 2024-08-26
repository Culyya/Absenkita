<template>
    <div class="container mx-auto ">
      <div class=" text-2xl font-semibold mb-5">
        {{ selectedYear }} - {{ months[selectedMonth] }} 
      </div>
     <!-- <div class="flex justify-center mb-4">
        <button class="px-2 py-1 rounded-full bg-blue-500 text-white mx-2" @click="previousMonth">Previous</button>
        <button class="px-2 py-1 rounded-full bg-blue-500 text-white mx-2" @click="nextMonth">Next</button>
      </div>  -->
      <div class="flex justify-center items-center ">
      <table class=" w-[1700px] h-[720px] table-fixed rounded-xl shadow-lg bg-white items-center">
        <thead>
          <tr >
            <th class="w-1/4  h-[50px] border-r">Minggu</th>
            <th class="w-1/4  h-[50px] border-r">Senin</th>
            <th class="w-1/4  h-[50px] border-r">Selasa</th>
            <th class="w-1/4  h-[50px] border-r">Rabu</th>
            <th class="w-1/4  h-[50px] border-r">Kamis</th>
            <th class="w-1/4  h-[50px] border-r">Jumat</th>
            <th class="w-1/4  h-[50px] ">Sabtu</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border h-[112px]" v-for="(week, weekIndex) in calendar" :key="weekIndex">
            <td class="border" v-for="(day, dayIndex) in week" :key="dayIndex">
              <div class="" :class="{ 'bg-gray-300': !day.isCurrentMonth }" style="position: relative;">
                <div v-if="day.event" class="text-sm text-bl                                                                                                                                                                                                 absolute top-0 r-0 p-1">
                  {{ day.event.title }}
                </div>
                <div class="absolute bottom-0 top-[-4rem] left-0 p-1">
                  {{ day.day }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      calendar: [],
      selectedYear: 0,
      selectedMonth: 0,
      events: [
        {
          date: '2023-10-22',
          title: 'Acara 1',
        },
        {
          date: '2023-10-25',
          title: 'Acara 2',
        },
        // Tambahkan event-event lain sesuai kebutuhan
      ],
    };
  },
  computed: {
    months() {
      return [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
    }
  },
  mounted() {
    this.selectedYear = new Date().getFullYear();
    this.selectedMonth = new Date().getMonth();
    this.generateCalendar();
  },
  methods: {
    generateCalendar() {
      const today = new Date(this.selectedYear, this.selectedMonth, 1);
      const year = today.getFullYear();
      const month = today.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const firstDayOfWeek = firstDay.getDay();
      const weeks = Math.ceil((daysInMonth + firstDayOfWeek) / 7);

      let calendar = [];
      let day = 1;

      for (let week = 0; week < weeks; week++) {
        const weekArray = [];
        for (let weekday = 0; weekday < 7; weekday++) {
          if (week === 0 && weekday < firstDayOfWeek) {
            weekArray.push({ day: '' });
          } else if (day <= daysInMonth) {
            const cell = {
              day,
              isCurrentMonth: true,
              event: null,
            };

            // Iterasi melalui event dan tambahkan event ke dalam tanggal yang sesuai
            this.events.forEach(event => {
              const eventDate = new Date(event.date);
              if (eventDate.getDate() === day) {
                cell.event = event;
              }
            });

            weekArray.push(cell);
            day++;
          } else {
            weekArray.push({ day: '' });
          }
        }
        calendar.push(weekArray);
      }

      this.calendar = calendar;
    },
    previousMonth() {
      if (this.selectedMonth > 0) {
        this.selectedMonth--;
      } else {
        this.selectedYear--;
        this.selectedMonth = 11; // Desember
      }
      this.generateCalendar();
    },
    nextMonth() {
      if (this.selectedMonth < 11) {
        this.selectedMonth++;
      } else {
        this.selectedYear++;
        this.selectedMonth = 0; // Januari
      }
      this.generateCalendar();
    },
  },
};
</script>
  
  <style>
  /* Tambahkan gaya khusus di sini jika diperlukan */
  </style>
  