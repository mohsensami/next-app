<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" class="form-control" v-model.lazy.trim="form.title" />
      <div class="form-text text-danger">
        {{ form.titleErrorText }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body</label>
      <textarea
        class="form-control"
        rows="6"
        v-model.lazy.trim="form.body"
      ></textarea>
      <div class="form-text text-danger">
        {{ form.bodyErrorText }}
      </div>
    </div>

    <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
      <div
        v-if="buttonLoading"
        class="spinner-border spinner-border-sm"
        role="status"
      ></div>
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,
  },
  setup(props, { emit }) {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });

    function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    setInput();

    function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = "Body is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        emit("formData", form);
      }
    }

    return { form, validate };
  },
};
</script>

<style>
</style>