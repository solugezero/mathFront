<template>
  <div class="header">
    <div class="inner content-box">
      <div class="inner_left-side">
        <img src="@/assets/imgs/white-logo.png" alt="" class="logo" />
        <ui-input placeholder="Поиск"></ui-input>
      </div>
      <div class="inner_right-side"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 80px;
  background: #171620;
  border-radius: 0px 0px 20px 20px;
}

.inner {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  &_left-side {
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 30%;
    align-items: center;
  }
}
</style>
