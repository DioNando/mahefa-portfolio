<template>
  <v-card class="card pa-4 bg-surface d-flex flex-column" variant="outlined">
    <template v-slot:title>
      <div
        class="text-h5 font-weight-bold mb-3 card--title d-flex align-center ga-2"
      >
        <p>Collabs</p>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png"
          alt="Backhand Index Pointing Down"
          width="35"
          height="35"
        />
      </div>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" variant="text">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
const items = [
  {
    text: "+212 6 14 63 12 25",
    icon: "mdi-phone",
  },
  {
    text: "mahefa.fernando@gmail.com",
    icon: "mdi-email",
  },
  {
    text: "David Mahefa",
    icon: "mdi-linkedin",
  },
  {
    text: "@DioNando",
    icon: "mdi-github",
  },
  {
    text: "Hay Riad, Rabat, Morocco",
    icon: "mdi-map-marker",
  },
];
</script>

<style lang="scss" scoped>
.card {
  transition-duration: 400ms;
  transition-property: box-shadow;
  border: 1px $primary solid;
  height: 100%;
  box-shadow: rgba($primary, 0.75) 5px 5px, rgba($primary, 0.5) 10px 10px,
    rgba($primary, 0.25) 15px 15px;

  @media only screen and (min-width: 600px) {
    max-width: 400px;
    width: 400px;
  }

  .v-icon {
    font-size: 2rem;
  }

  &:hover {
    .card--title,
    .v-icon {
      transition-duration: 400ms;
      color: $primary;
    }
  }

  &__description {
    @include paragraph-overflow-hidden(2);
  }
}
</style>
