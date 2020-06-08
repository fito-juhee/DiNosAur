<template>
  <div class="d-data-footer">
    <div class="d-data-footer__select">
      Rows per page:
      <select name="job">
        <option
          v-for="(pageNumber, index) in values"
          :key="index"
          :value="pageNumber"
        >
          {{ pageNumber }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [5, 10, 15]
    };
  },
  created() {
    console.log(this.values);
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
