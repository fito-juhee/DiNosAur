<template>
  <div class="d-data-footer">
    <div class="d-data-footer__select">
      Rows per page:
      <select name="job" @change="onChange($event.target.value)">
        <option
          v-for="(pageNumber, index) in page_item"
          :key="index"
          :value="pageNumber"
        >
          {{ pageNumber }}
        </option>
      </select>
    </div>
    <div class="d-data-footer__pagination">
      {{start + 1}}-{{end}} of {{itemLength}}
    </div>
    <div class="d-data-footer__icons-before">
      <button class="btn" @click="$emit('clickLeft')"><i class="fa fa-angle-left"></i></button>
    </div>
    <div class="d-data-footer__icons-after">
      <button class="btn" @click="$emit('clickRight')"><i class="fa fa-angle-right"></i></button>
    </div>
  </div>
</template>

<script src="https://kit.fontawesome.com/8dcedb99b6.js" crossorigin="anonymous"></script>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      defulat: 5
    },
    start:{
      type: [Number, String],
      defulat: 0
    },
    end:{
      type: [Number, String],
      defulat: 5
    },
    itemLength:{
      type: [Number, String],
      defulat: 10
    }
  },
  data() {
    return {
      page_item: [5, 10, 15]
    };
  },
  created() {
    console.log(this.page_item);
  },
  methods: {
    onChange(value) {
      if (value == "") {
        value == 5;
      }
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped>
.d-data-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.75rem;
  padding: 0 8px;
}
.d-data-footer__select {
  display: flex;
  align-items: center;
  flex: 0 0 0;
  justify-content: flex-end;
  white-space: nowrap;
}
</style>
