<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-2" v-for="photo in photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">{{ photo.title }}</p>
          <a target="_blank" :href="photo.url" class="btn btn-primary"
            >See Photo</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const photos = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/albums/${route.params.id}/photos`
        )
        .then(function (response) {
          photos.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();

    return { photos, loading, route };
  },
};
</script>

<style>
</style>