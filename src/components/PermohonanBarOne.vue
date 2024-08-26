<template>
<div class="py-10 ">
    <div class="flex flex-row justify-between font-pop mb-5 " style="animation: muncul-kiri-kanan-fade 0.8s;">
    <h1 class="font-medium text-[20px]">Permohonan</h1>
    <FormPermohonan/>
    </div>
    <TablePermohonan style="animation: muncul-kiri-kanan-fade 0.8s;"/>
</div>

</template>

<script>
import TablePermohonan from "@/components/TablePermohonanOne.vue"
import FormPermohonan from "@/components/FormPermohonan.vue"

export default {
    components :{ 
     TablePermohonan,
     FormPermohonan
    },
}

</script>