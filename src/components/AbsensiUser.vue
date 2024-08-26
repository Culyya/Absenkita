<!-- src/components/CameraCapture.vue -->
<template>
  <div>
    <video ref="video" width="320" height="240" autoplay></video>
    <button @click="capturePhoto">Ambil Foto</button>
    <canvas ref="canvas" width="320" height="240" style="display: none;"></canvas>
    <div v-if="photos.length">
      <h3>Daftar Foto</h3>
      <div v-for="(photo, index) in photos" :key="index" class="photo-container">
        <img :src="photo" alt="Foto" class="photo"/>
        <button @click="removePhoto(index)">Hapus</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const video = ref(null);
const canvas = ref(null);
const photos = ref([]);

// Fungsi untuk mengakses kamera
const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (video.value) {
      video.value.srcObject = stream;
    }
  } catch (error) {
    console.error('Tidak dapat mengakses kamera:', error);
    alert('Tidak dapat mengakses kamera. Pastikan Anda telah memberikan izin.');
  }
};

// Fungsi untuk menangkap foto
const capturePhoto = () => {
  const context = canvas.value?.getContext('2d');
  if (context && video.value) {
    canvas.value.width = video.value.videoWidth;
    canvas.value.height = video.value.videoHeight;
    context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
    const photo = canvas.value.toDataURL('image/png');
    photos.value.push(photo);
  } else {
    alert('Video belum siap.');
  }
};

// Fungsi untuk menghapus foto
const removePhoto = (index) => {
  photos.value.splice(index, 1);
};

// Inisialisasi kamera saat komponen dipasang
onMounted(() => {
  startCamera();
});
</script>

<style scoped>
.photo-container {
  margin: 10px;
  display: inline-block;
  text-align: center;
}
.photo {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
}
</style>
