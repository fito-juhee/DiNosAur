<template>
  <div>
    <table
      width="100%"
      height="100%"
      align="center"
      class="d-card__text d-data-table"
    >
      <th v-if="show_select">
        <input type="checkbox" @click="selectAll" v-model="allSelected" />
      </th>

      <th></th>
      <th
        v-for="(header, index) in headers"
        :key="index"
        @click="onSortTable(index, header.sortable)"
        :class="makeHeaderClass(header)"
      >
        {{ header.text }}
      </th>

      <tr v-for="(item, i) in sliced_items" :key="`A-${i}`" align="center">
        <td v-if="show_select">
          <input
            type="checkbox"
            v-model="selectedIndexes"
            @click="selectOne(i)"
            :value="i"
          />
        </td>

        <td></td>
        <td v-for="header in headers" :key="header.value">
          {{ item[header.value] }}
        </td>
      </tr>
    </table>

    <d-data-footer
      v-model="table_items_per_page"
      :start="start"
      :end="end"
      :itemLength="searched_sorted_items.length"
      @clickLeft="clickLeft"
      @clickRight="clickRight"
    />
  </div>
</template>

<script>
export default {
  props: {
    show_select: {
      type: Boolean,
      default: false
    },
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
    },
    search: {
      type: [Number, String],
      default: ""
    }
  },
  data() {
    return {
      currentPage: 1,
      table_items_per_page: 5,
      start: 0,
      end: 5,
      appliedSort: { index: null, isAscending: true }, // ex) {index:0, isAscending: true},
      searched_sorted_items: [],
      selected: [],
      allSelected: false,
      selectedIndexes: []
    };
  },
  computed: {
    sliced_items() {
      return this.searched_sorted_items.slice(this.start, this.end);
    }
  },
  watch: {
    currentPage(value) {
      this.setStartEnd();
    },
    table_items_per_page(value) {
      this.setStartEnd();
    },
    appliedSort(value) {
      this.makeSearchSort();
    },
    search(value) {
      this.makeSearchSort();
    }
  },
  created() {
    // set Props to Data
    this.table_items_per_page = this.items_per_page;
    this.makeSearchSort();
  },
  methods: {
    selectAll: function() {
      this.selectedIndexes = [];

      if (!this.allSelected) {
        for (var item_index in this.sliced_items) {
          this.selectedIndexes.push(Number(item_index));
        }
      }
      this.emitSelection();
    },
    onSortTable(index, sortable) {
      if (sortable == false) return;
      let newAppliedSort = {
        index: index,
        isAscending: true
      };
      // watch에서 변화를 탐지하려면 새로 할당해줘야됨
      this.appliedSort = newAppliedSort;
    },
    get_searched_items(items, search) {
      let resultItems = [];
      items.forEach(function(item) {
        let hasSearch = false;
        for (var key in item) {
          let value = item[key];
          // value가 search를 가지고 있는지
          hasSearch = value.toString().includes(search);
          if (hasSearch) {
            resultItems.push(item);
            break;
          }
        }
      });
      return resultItems;
    },

    get_sort_items(items, sortInfo) {
      if (sortInfo["index"] == null) return items;
      let index = sortInfo["index"];
      let headerKey = this.headers[index].value;
      // %가 담겨있는 열은 문자열로 취급하기 때문에 숫자순으로 정렬안됨
      if (isNaN(items[0][headerKey])) {
        items.sort(function(a, b) {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        });
      } else {
        items.sort(function(a, b) {
          return a[headerKey] < b[headerKey]
            ? -1
            : a[headerKey] > b[headerKey]
            ? 1
            : 0;
        });
      }
      return items;
    },

    setStartEnd() {
      this.start = this.table_items_per_page * (this.currentPage - 1);
      this.end = this.table_items_per_page * this.currentPage;
    },

    makeSearchSort() {
      let searched_items = this.get_searched_items(this.items, this.search);
      this.searched_sorted_items = this.get_sort_items(
        searched_items,
        this.appliedSort
      );
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
    },
    clickLeft() {
      if (this.currentPage == 1) return;
      this.currentPage = this.currentPage - 1;
      this.resetCheck();
    },
    clickRight() {
      let maxPage =
        this.searched_sorted_items.length / this.table_items_per_page;
      if (this.currentPage >= maxPage) return;
      this.currentPage = this.currentPage + 1;
      this.resetCheck();
    },
    selectOne(index) {
      if (this.selectedIndexes.includes(index)) {
        const item_index = this.selectedIndexes.indexOf(index);
        if (item_index > -1) {
          this.selectedIndexes.splice(item_index, 1);
        }
      } else {
        this.selectedIndexes.push(index);
      }
      this.emitSelection();
    },
    resetCheck() {
      this.allSelected = false;
      this.selectedIndexes = [];
      this.emitSelection();
    },
    emitSelection() {
      let selected_items = [];
      for (var i in this.selectedIndexes) {
        let slice_index = this.selectedIndexes[i];
        selected_items.push(this.sliced_items[slice_index]);
      }
      this.$emit("value", selected_items);
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
