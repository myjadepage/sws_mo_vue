<template>
  <li class="side-menu-item">
    <a class="link"
       :href="href">
      <span class="side-menu-item-title" v-html="title"></span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    href: { type: String, required: true }
  }
}
</script>
