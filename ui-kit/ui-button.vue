<template>
  <button class="btn">
    <img v-if="onlyIcon" src="@/assets/svgs/profile.svg" alt="" />
    <slot v-else></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  onlyIcon: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #252836;
  padding: 20px 24px;
  border: 1px solid #252525;
  border-radius: 20px;
  font-weight: 400;
  font-size: 16px;
  transition: border 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid #08a0f7;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 18px 22px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    padding: 16px 20px;
  }
}
</style>
