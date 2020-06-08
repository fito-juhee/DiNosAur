<template>
  <div
    class="d-progress-linear"
    :class="[{ 'd-progress-linear__rounded': rounded }]"
    :style="`height:${height}px`"
  >
    <div
      class="d-progress-linear__background"
      :class="[backgroundColor]"
      :style="`opacity: ${backgroundOpacity};`"
    />
    <div
      class="d-progress-linear__buffer"
      :class="[
        bufferValue,
        { buffer__decrease: indeterminate },
        { buffer__increase: query }
      ]"
    />
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: null
    },
    backgroundOpacity: {
      type: [Number, String],
      default: 0.3
    },
    bufferValue: {
      type: String,
      default: null
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: "4"
    },
    rounded: {
      type: Boolean,
      default: false
    },
    query: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.d-progress-linear {
  background: transparent;
  overflow: hidden;
  position: relative;
  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  width: 100%;
  &__rounded {
    border-radius: 4px;
  }
}
.d-progress-linear__background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: #1e88e5;
  opacity: 0.3;
  transition: inherit;
  width: 100%;
}
.d-progress-linear__buffer {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #1e88e5;
  width: 100%;
  height: 100%;
  transition: inherit;
}

.buffer__decrease {
  animation: decrease 2s 0.5s infinite;
}

.buffer__increase {
  animation: increase 2s 0.5s infinite;
}
/* Safari */
@-webkit-keyframes decrease {
  from {
    left: -80%;
    width: 50%;
  }
  to {
    left: 100%;
    width: 10%;
  }
}
/* Safari */
@-webkit-keyframes increase {
  from {
    left: 100%;
    width: 50%;
  }
  to {
    left: -30%;
    width: 10%;
  }
}

@keyframes decrease {
  from {
    left: -80%;
    width: 50%;
  }
  to {
    left: 100%;
    width: 10%;
  }
}

@keyframes increase {
  from {
    left: 100%;
    width: 50%;
  }
  to {
    left: -30%;
    width: 10%;
  }
}
</style>
