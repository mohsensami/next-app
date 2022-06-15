<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-12">
    <UserCardViwe :user="user" />
  </div>
  <div class="row mt-4">
    <h1>Albums</h1>
    <div class="col-md-4" v-for="album in albums" :key="album.id">
      <div class="">
        <div class="list-group mb-2">
          <router-link
            class="list-group-item list-group-item-action"
            :to="{ name: 'album', params: { id: album.id } }"
          >
            {{ album.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardViwe from "../../components/users/CardView.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    UserCardViwe,
  },
  setup() {
    const user = ref({});
    const albums = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function getAlbums() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${route.params.id}/albums`
        )
        .then(function (response) {
          albums.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getUser();

    getAlbums();

    return { user, albums, loading };
  },
};
</script>

<style>
</style>