<template>
  <footer class="bg-primary mt-6">
    <div class="pa-2 text-caption d-flex justify-center tous-droits">
      Tous droits réservés © {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

a {
  text-decoration: none;
  color: inherit;
  // margin: 0rem 1rem;
}

ul {
  list-style-type: none;
  line-height: 2.5rem;
}

.router-link-exact-active {
  color: $secondary;
}

.tous-droits {
  background-color: darken($primary, $amount: 5);
}
</style>
