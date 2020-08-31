<template>
  <div class="modal">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <button class="add-form-button btn btn-warning" ref="buttonOk">OK</button>
  </div>
</template>

<script>
export default {
  name: "AddFormError",
  props: ["title", "content"],
  mounted() {
    this.$refs.buttonOk.focus();
  },
};
</script>
