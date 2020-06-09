<template>
  <div
    class="d-card"
    :class="[
      { 'theme--light': light },
      { 'theme--dark': dark },
      color,
      { 'd-card__disabled': disabled },
      { 'd-card__flat': flat },
      { 'd-card__hover': hover },
      `elevation-${elevation}`,
      { 'd-card__loading': loading }
    ]"
    :style="
      `width: ${width}px;
      height: ${height}px;
      max-height: ${maxHeight}px;
      max-width: ${maxWidth}px;
      min-height: ${minHeight}px;
      min-width: ${minWidth}px;`
    "
  >
    <div class="d-card__progress">
      <d-progress-linear
        v-if="loading"
        indeterminate
        :height="loaderHeight"
      ></d-progress-linear>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary"
    },
    dark: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    elevation: {
      type: [Number, String],
      default: undefined
    },
    flat: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: undefined
    },
    height: {
      type: [Number, String],
      default: undefined
    },
    hover: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    loading: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: [Number, String],
      default: undefined
    },
    maxWidth: {
      type: [Number, String],
      default: undefined
    },
    minHeight: {
      type: [Number, String],
      default: undefined
    },
    minWidth: {
      type: [Number, String],
      default: undefined
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
