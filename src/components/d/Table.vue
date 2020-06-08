<template>
  <table
    :border="border"
    width="100%"
    height="100%"
    align="center"
    class="d-card__text"
  >
    <th
      v-for="(header, index) in headers"
      :key="index"
      @click="sortTable(index, header.sortable)"
    >
      {{ header.text }}
    </th>

    <tr v-for="(item, i) in table_items" :key="`A-${i}`" align="center">
      <td v-for="header in headers" :key="header.value">
        {{ item[header.value] }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    border: {
      type: Number,
      defulat: 1
    },
    headers: {
      type: Array,
      defulat: []
    },
    items: {
      type: Array,
      defulat: []
    },
    items_per_page: {
      type: Number,
      defulat: 1
    }
  },
  data() {
    return {
      table_items: []
    };
  },
  created() {
    this.table_items = this.items;
  },
  methods: {
    sortTable(index, sortable) {
      if (sortable == false) return;
      let headerKey = this.headers[index].value;
      // %가 담겨있는 열은 문자열로 취급하기 때문에 숫자순으로 정렬안됨
      console.log(headerKey, " isNaN: ", isNaN(this.table_items[0][headerKey]));
      if (isNaN(this.table_items[0][headerKey])) {
        this.table_items.sort(function(a, b) {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        });
      } else {
        this.table_items.sort(function(a, b) {
          return a[headerKey] < b[headerKey]
            ? -1
            : a[headerKey] > b[headerKey]
            ? 1
            : 0;
        });
      }
    }
  }
};
</script>

<style scoped>
.d-card__text {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
}
</style>
