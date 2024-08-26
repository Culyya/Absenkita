<template>
<div class="py-[3rem] ">
    <div class="flex flex-row justify-between font-pop mb-5 " style="animation: muncul-kiri-kanan-fade 0.8s;">
    <h1 class="font-medium text-[20px]">Keseluruhan Permohonan</h1>
    <FormPermohonan/>
    </div>
    <TablePermohonan style="animation: muncul-kiri-kanan-fade 0.8s;"/>
</div>

</template>

<script>
import TablePermohonan from "@/components/TablePermohonan.vue"
import FormPermohonan from "@/components/FormPermohonan.vue"

export default {
    components :{ 
     TablePermohonan,
     FormPermohonan
    },
}

</script>