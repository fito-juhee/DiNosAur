<template>
  <div>
    <h1 class="text__title">Cards</h1>
    <h1 class="text__subtitle">
      Cards contain content and actions about a single subject.
    </h1>
    <d-card
      loading
      hover
      light
      max-width="400"
      min-height="200"
      raised
    >
      <d-card-title> Card 만들기 </d-card-title>
      <d-card-subtitle>22222 text</d-card-subtitle>
      <d-card-text>
        Greyhound divisively hello coldly wonderfully marginally far upon
        excluding.
      </d-card-text>
    </d-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text__title {
  font-size: 48px;
  margin: 5px 0;
}
.text__subtitle {
  font-size: 14px;
  margin: 10px 0 30px 0;
}
</style>
