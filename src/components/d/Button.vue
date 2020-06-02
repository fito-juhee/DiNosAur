<template>
  <div class="row align-center justify-center">
    <button
      type="button"
      :class="{ 'd-btn__round': rounded }"
      class="white__text d-btn elevation-2 d-size__default deep-purple accent-4"
    >
      <span class="d-btn__content">
        <span>Click Me</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      defulat: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.elevation-2 {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}
.white__text {
  color: #fff !important;
  caret-color: #fff !important;
}
.deep-purple__text {
  color: #6200ea !important;
  caret-color: #6200ea !important;
}
.deep-purple.accent-4 {
  background-color: #6200ea;
  border-color: #6200ea;
}
</style>
