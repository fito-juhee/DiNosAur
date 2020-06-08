<template>
  <table :border="border">
    <th>
      여기에 뭔가 나와야 하는데 말이지
    </th>
    <th v-for="(header, index) in headers" :key="index">
      {{ header.text }}
    </th>

    <tr v-for="(item, i) in items" :key="`A-${i}`">
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
    },
  },
  data() {
    return {
    };
  },
  
};
</script>

<style></style>
