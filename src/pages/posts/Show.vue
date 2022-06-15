<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-12">
    <div class="card mb-4">
      <div class="card-header">
        <h1>{{ post.title }}</h1>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Body : {{ post.body }}{{ post.body }}{{ post.body }}{{ post.body }}
        </li>
      </ul>
      <div class="card-footer">
        <button @click="deletePost" class="btn btn-sm btn-danger me-4">
          Delete
        </button>
        <router-link
          class="btn btn-sm btn-dark"
          :to="{ name: 'editPost', params: { id: post.id } }"
          >Edit</router-link
        >
      </div>
    </div>

    <div class="card">
      <div class="card-header">Comments</div>
      <div class="card-body">
        <div v-for="comment in comments" :key="comment.id">
          <div class="card mb-2">
            <div class="card-header">{{ comment.name }}</div>
            <div class="card-body">{{ comment.body }}</div>
            <div class="card-footer">{{ comment.email }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";

export default {
  setup() {
    const post = ref({});
    const comments = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function getComment() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`
        )
        .then(function (response) {
          comments.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();

    getComment();

    function deletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "Thanks!",
            text: `Post (${route.params.id}) deleted successfully`,
            icon: "warning",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { post, comments, loading, route, deletePost };
  },
};
</script>

<style>
</style>