<template>
  <nav
    class="d-navigation-drawer d-navigation-drawer__continer"
    :class="{ toggle: isDrawer }"
  >
    <div class="d-navigation-drawer__content">
      <div class="d-list-item">
        <div class="d-list-item__content">
          <div class="d-list-item__title title">
            No Vuetify
          </div>
        </div>
      </div>
      <hr class="d-divider" />
      <div class="d-list">
        <div class="d-list-item" v-for="item in listItems" :key="item.title">
          <router-link :to="item.to">
            <div class="d-list-item__content">
              <div class="d-list-item__title">
                {{ item.title }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import drawerValue from "../../assets/mocks/components/core/DrawerListItem.json";
const {
  mapState: commonMapState,
  mapMutations: commonMapMutations
} = createNamespacedHelpers("common");

export default {
  data() {
    return {
      listItems: drawerValue.items
    };
  },
  computed: {
    ...commonMapState(["isDrawer"]),
    drawer: {
      get() {
        return this.$store.state.common.isDrawer;
      },
      set(val) {
        this.SET_DRAWER(val);
      }
    }
  },
  methods: {
    ...commonMapMutations(["SET_DRAWER"])
  }
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/core/drawer.scss" />
