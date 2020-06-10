<template>
  <div
    class="d-progress-linear"
    :class="[{ 'd-progress-linear__rounded': rounded }]"
    :style="`height:${height}px`"
  >
    <div
      class="d-progress-linear__background"
      :class="[color, backgroundColor]"
      :style="`opacity: ${backgroundOpacity};`"
    />
    <div class="d-progress-linear__buffer"></div>
    <div
      class="d-progress-linear__determinate"
      :class="[
        color,
        { buffer__decrease: indeterminate },
        { buffer__increase: query }
      ]"
      :style="`width: ${value}%;`"
    />
  </div>
</template>

<script>
export default {
  /*
    indeterminate: 프로그레스 바가 자동으로 움직이게 해주는 것.
  */
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
    color: {
      type: String,
      default: "primary"
    },
    height: {
      type: [Number, String],
      default: "4"
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    query: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: 0
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
  background: #1867c0;
  opacity: 0.3;
  transition: inherit;
  width: 100%;
}
.d-progress-linear__buffer {
  height: inherit;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: inherit;
}

.d-progress-linear__determinate {
  background-color: inherit;
  bottom: 0;
  height: inherit;
  left: 0;
  position: absolute;
  background-color: #1867c0;
  top: 0;
  width: auto;
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
