<template>
  <div class="d-card theme--light" 
    :class="[{ 'theme--dark': dark }, color, { 'd-card__loading': loading }]"
    :style="{ width: width }"
  >
    <div class="d-card__progressBar">
      <d-progress-linear v-if="loading" indeterminate>
      </d-progress-linear>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    dark: {
      type: Boolean,
      default: false
    },
    loading: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {
      width: "342px"
    };
  }
};
</script>

<style>

</style>
