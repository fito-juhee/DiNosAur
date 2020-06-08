<template>
  <div class="d-card theme--light"
    :class="[
      { 'theme--dark': dark },
      color,
      { 'd-card__disabled': disabled },
      { 'd-card__flat': flat },
      { 'd-card__loading': loading }
    ]"
    :style="`width: ${width}%; height: ${height}px`"
  >
    <div class="d-card__progress">
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
    disabled: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: false
    },
    hover: {
      type: [Number, String],
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
