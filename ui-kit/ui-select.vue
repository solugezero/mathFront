<template>
  <div class="select">
    <div class="select_wrapper">
      <div class="select_wrapper__item" @click="addActiveItem(item)" v-for="(item, index) in state" :key="`select-item__${index}`">{{ item.label }}</div>
    </div>
    <img src="@/assets/svgs/arrow-right.svg" @click="toggleOptions" alt="" :style="getActiveStyle" class="select__icon" />
    <Transition name="slide-fade">
      <div class="options_wrapper" ref="optionsWrapper" v-if="optionsIsActive">
        <div class="options_wrapper__item" @click="addActiveItem(item)" :style="getItemStyle(item)" v-for="(item, index) in options" :key="`options-item__${index}`">{{ item.label }}</div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
const props = defineProps({
  options: {
    type: Object,
    default: [{ label: "Ава" }, { label: "Авфа" }, { label: "Аыва" }, { label: "Авава" }, { label: "Аваssaва" }, { label: "Аваsaва" }],
  },
});
let optionsIsActive = ref(false);
let state = ref([]);
let optionsWrapper = ref();

onClickOutside(optionsWrapper, () => (optionsIsActive.value = false));

const toggleOptions = () => {
  optionsIsActive.value = !optionsIsActive.value;
};
const getActiveStyle = computed(() => {
  return optionsIsActive.value ? "transform: rotate(-90deg)" : "transform: rotate(90deg)";
});
const addActiveItem = (item) => {
  if (state.value.includes(item)) {
    state.value.splice(state.value.indexOf(item), 1);
  } else {
    state.value.push(item);
  }
};

const getItemStyle = (item) => {
  return state.value.includes(item) ? "background-color: #2d3041" : "background-color: #252836";
};
</script>

<style lang="scss" scoped>
.select {
  display: flex;
  width: 100%;
  height: 53px;
  background: #252836;
  background: #2d3041;
  border-radius: 20px;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  position: relative;

  &__icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: transform 0.3s;
    user-select: none;
  }

  &_wrapper {
    padding: 10px 00px;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    gap: 5px;
    align-items: center;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: auto;
      height: 100%;
      padding: 10px 16px;
      background: #232130;
      border-radius: 20px;
      cursor: pointer;
      font-size: 16px;
    }
  }
}

.options_wrapper {
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
  border-radius: 20px;
  background: #252836;
  top: 60px;
  left: 0;
  flex-direction: column;
  border-radius: 20px;
  gap: 10px;
  padding: 5px;

  &__item {
    display: flex;
    width: 100%;
    cursor: pointer;
    height: auto;
    padding: 15px 20px;
    border-radius: 20px;
    border: 1px solid #252836;
    transition: border 0.3s;

    &:hover {
      border: 1px solid #08a0f7;
    }
  }
}
</style>
