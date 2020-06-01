<template>
  <header class="d-toolbar d-toolbar__fixed d-toolbar__container">
    <div class="d-toolbar__content">
      <div class="d-toolbar__navIcon">
        <button
          class="d-btn d-btn--flat d-btn--icon d-btn--round"
          @click="clickEvent"
        >
          <i class="fas fa-hamburger fa-2x"></i>
        </button>
      </div>
      <div class="d-toolbar__title">
        <a href="/">
          <h5>PAGE TITLE</h5>
        </a>
      </div>
      <ul class="d-toolbar__actions">
        <a href="#">
          <li class="d-toolbar__list">
            <button class="d-btn d-btn--flat d-btn--icon d-btn--round">
              <i class="fas fa-bell fa-2x"></i>
            </button>
          </li>
        </a>
        <a href="#">
          <li class="d-toolbar__list">
            <button class="d-btn d-btn--flat d-btn--icon d-btn--round">
              <i class="fas fa-cog fa-2x"></i>
            </button>
          </li>
        </a>
      </ul>
    </div>
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations: commonMapMutations } = createNamespacedHelpers("common");

export default {
  methods: {
    ...commonMapMutations(["SET_DRAWER"]),
    clickEvent: function() {
      this.SET_DRAWER(!this.$store.state.common.isDrawer);
    }
  }
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/core/toolbar.scss" />
