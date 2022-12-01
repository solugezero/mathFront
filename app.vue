<template>
  <div>
    <NuxtLayout>
      <OrganismsGlobalHeader />
      <NuxtPage class="page" />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
body {
  background: #1f1d2b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;

  font-family: "Montserrat", sans-serif;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.page {
  margin-top: 20px;
}
</style>
