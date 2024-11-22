<template>
  <v-container>
    <TextsTitle :title="'I\'m David Fernando.'" />
    <IllustrationsSpotify />
    <div class="about">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis id
      omnis, dolorum deserunt ipsum cum eos natus aperiam. Expedita tempore
      placeat dolorum magnam cumque non fuga, nulla delectus assumenda
      architecto?
    </div>
    <div>
      <NuxtLink to="/resume">
        <v-btn
          rounded
          variant="text"
          color="primary"
          append-icon="mdi-chevron-right"
          class="text-none"
        >
          Go to resume
        </v-btn>
      </NuxtLink>
    </div>
    <UiAside />
  </v-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.v-container {
  @extend %section-accueil;
}

.about {
  margin-left: 0.25rem;
  padding-left: 1rem;
  border-left: 3px solid $primary;
  font-size: large;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 60%;
  }
}
</style>
