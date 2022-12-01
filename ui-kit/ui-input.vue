<template>
  <div class="input" :style="inputStyles">
    <input :placeholder="placeholder" v-model="value" type="text" />
    <img v-if="useIcon" src="@/assets/svgs/search.svg" alt="" class="icon" />
  </div>
</template>

<script setup>
const props = defineProps({
  useIcon: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  placeholder: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);
let value = ref();
watch(
  () => value.value,
  (newValue, oldValue) => {
    emit("update:modelValue", value.value);
  },
  { deep: true }
);
const inputStyles = computed(() => {
  const { width, height } = props;
  return {
    width: width,
    height: height,
  };
});
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  background: #252836;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 53px;
  min-width: 120px;

  .icon {
    position: absolute;
    right: 20px;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #252836;
    border: none;
    border-radius: 20px;
    padding: 16px 20px;
    padding-right: 45px;
    transition: border 0.3s;
    border: 1px solid #252836;

    &:focus,
    &:focus {
      outline: none;
      border: 1px solid #08a0f7;
    }
  }
}
</style>
