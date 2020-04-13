<template>
  <div class="goodBox">
    <button class="good">추천 {{like}}</button>
    <button class="bad">비추천 {{hate}}</button>
  </div>
</template>

<script>
export default {
  props: ['like', 'hate']
}
</script>
