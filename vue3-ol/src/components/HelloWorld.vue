<script setup>
import useOverlay from  "@/composables/useOverlay"
import Children  from "@/components/Children.vue"
import { inject } from "vue";
console.log(inject('map'),"aa");

const props = defineProps({
  msg: String,
})
// const count = ref(0)


 const { count, increment } = useOverlay(props)


</script>

<template>
<div>
  <h1 @click="increment">{{ count }}</h1>
  <Children/>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
