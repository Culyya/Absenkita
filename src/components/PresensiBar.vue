<template>
<div class="py-[3rem] ">
    <div class="flex flex-row justify-between font-pop mb-5 " style="animation: muncul-kiri-kanan-fade 0.8s;">
    </div>
    <TablePresensi style="animation: muncul-kiri-kanan-fade 0.8s;"/>
</div>

</template>

<script>
import TablePresensi from "@/components/AttendanceTableAll.vue"
export default {
    components :{ 
    TablePresensi,
    
    },
}

</script>