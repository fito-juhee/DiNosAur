<template>
  <div
    class="d-card"
    :class="[cardClass, color]"
    :style="
      `width: ${width}px;
      height: ${height}px;
      max-height: ${maxHeight}px;
      max-width: ${maxWidth}px;
      min-height: ${minHeight}px;
      min-width: ${minWidth}px;`
    "
    @click="to ? movePage : null"
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
import cardJson from "../../assets/mocks/components/d/card.json";

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
    href: {
      type: [String, Object],
      default: undefined
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
    },
    outlined: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {
    cardClass() {
      let cardClassList = [];
      for (let [propKey, propValue] of Object.entries(this.$props)) {
        if (propValue) {
          let className = this.matchClassName(propKey);
          if (className !== undefined) {
            cardClassList.push(className);
          }
        }
      }
      return cardClassList;
    }
  },
  mounted() {
    this.havePropsHref();
    this.havePropsTo();
    this.havaElevation();
  },
  methods: {
    createElement: function(tagName) {
      const originalElement = document.querySelector(".d-card.d-card__link");
      const newTagElement = document.createElement(tagName);
      newTagElement.className = originalElement.className;
      newTagElement.style.cssText = originalElement.style.cssText;
      newTagElement.innerHTML = originalElement.innerHTML;
      originalElement.parentNode.replaceChild(newTagElement, originalElement);
    },
    havaElevation: function() {
      if (this.elevation !== undefined) {
        const tagAElement = document.querySelector(".d-card");
        let className = `elevation-${this.elevation}`;
        tagAElement.classList.add(className);
      }
    },
    havePropsHref: async function() {
      if (this.href !== undefined) {
        await this.createElement("a");
        const tagAElement = document.querySelector(".d-card.d-card__link");
        tagAElement.href = this.href;
      }
    },
    havePropsTo: async function() {
      if (this.to) {
        await this.createElement("router-link");
      }
    },
    matchClassName: function(propsName) {
      return cardJson.cardClass[propsName];
    },
    movePage() {
      this.$router.push({ path: this.to });
    }
  }
};
</script>

<style></style>
