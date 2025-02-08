<template>
  <v-container>
    <TextsTitle :title="'Projects.'" />
    <div class="description">
      Here are the projects I have worked on, showcasing my skills in full-stack
      development, UI/UX design, DevOps, and mobile development. Each project
      reflects my ability to design, develop, and deploy scalable and efficient
      solutions.
    </div>
    <UiAside />
  </v-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.v-container {
  @extend %section-accueil;
}

.description {
  font-size: large;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 70%;
  }
}

.emoji {
  position: absolute;
  width: 100%;
}
</style>
