<template>
  <div>
    <table
      width="100%"
      height="100%"
      align="center"
      class="d-card__text d-data-table"
    >
      <th
        v-for="(header, index) in headers"
        :key="index"
        @click="sortTable(index, header.sortable)"
        :class="makeHeaderClass(header)"
      >
        {{ header.text }}
      </th>

      <tr v-for="(item, i) in sliced_items" :key="`A-${i}`" align="center">
        <td v-for="header in headers" :key="header.value">
          {{ item[header.value] }}
        </td>
      </tr>
    </table>

    <d-data-footer v-model="table_items_per_page" />
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    items_per_page: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      table_items: [],
      currentPage: 1,
      table_items_per_page: 5
    };
  },
  computed: {
    sliced_items() {
      let start = this.table_items_per_page * (this.currentPage - 1);
      let end = this.table_items_per_page * this.currentPage;
      return this.items.slice(start, end);
    }
  },
  created() {
    this.table_items = this.items;
    this.table_items_per_page = this.items_per_page;
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
    },
    makeHeaderClass(header_options) {
      let class_name = "";
      if (header_options.align) {
        class_name = class_name + "text-" + header_options.align + " ";
      }
      if (header_options.sortable != false || header_options.sortable) {
        class_name = class_name + "sortable ";
      }
      return class_name;
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
.d-data-table {
  boarder-color: grey;
}
th {
  user-select: none;
}
th.sortable {
  pointer-events: auto;
  cursor: pointer;
  outline: 0;
}
.text-start {
  text-align: start !important;
}
</style>
