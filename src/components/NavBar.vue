<template>
  <div>
    <router-link to="/" class="brand">
      <img src="@/assets/logo-ligth.png" alt class="brand-logo" />
    </router-link>
    <!-- <router-link :to="{ name: 'task-list' }">Lista 1</router-link> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.brand-logo {
  max-width: 250px;
}
</style>
