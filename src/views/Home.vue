<template>
  <div class="home">
    <ItemContainer view="home"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemContainer from '@/components/ItemContainer.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ItemContainer
  }
})
</script>
