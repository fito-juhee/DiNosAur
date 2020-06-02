<template>
  <div class="d-progress-linear">
    <br/>
    <div class="d-progress-linear__background" :class="[backgroundColor]" :style="{opacity : backgroundOpacity }"></div>
    <div class="d-progress-linear__buffer buffer__decrease"></div>
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
      default: null
    }

  },
};
</script>

<style>
.d-progress-linear {
  position: relative;
  overflow-x: hidden;
}
.d-progress-linear__background {
  margin-top: 10px;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;

  width: 150%;
  height: 4px;
  background: #65D0E0;
  opacity: 0.3;
}
.d-progress-linear__buffer {
  margin-top: 10px;
  position: absolute;
  left: 0;
  top: 0;
  height: 4px;
  background-color: #65D0E0;
}

.buffer__decrease {
  animation: decrease 2s 0.5s infinite;
}
/* Safari */
@-webkit-keyframes decrease {
  from { left: -80%; width: 0%; }
  to { left: 100%; width: 10%; }
}


@keyframes increase {
  from { left: -5%; width: 5%; }
  to { left: 130%; width: 100%; }
}
@keyframes decrease {
  from { left: -80%; width: 50%; }
  to { left: 100%; width: 10%; }
}        

</style>