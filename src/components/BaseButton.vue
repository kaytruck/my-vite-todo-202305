<script setup>
const props = defineProps({ color: String });
const emits = defineEmits(['on-click']);

const onClick = () => {
  emits('on-click');
};
</script>

<template>
  <button class="btn" :class="props.color" @click="onClick">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 8px;
  /* background-color: #03a9f4; */
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}

.blue {
  background-color: #03a9f4;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}
</style>
