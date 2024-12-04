<template>
  <v-container>
    <TextsTitle :title="'I\'m David Fernando.'" />
    <!-- <IllustrationsSpotify /> -->
    <div class="mb-4">
      <IllustrationsLogo />
    </div>
    <div class="about">
      Passionate about IT and soon-to-be state engineer graduate, I'm seeking an
      internship to launch my professional career starting from February 2025. I
      have acquired solid skills in web development, including JavaScript, PHP,
      and Java. I am ready to put my enthusiasm for teamwork, responsiveness,
      and analytical thinking at the service of your organization to contribute
      to the development of impactful and innovative solutions.
    </div>
    <div class="d-flex ga-3">
      <NuxtLink href="/docs/CV_Tolotra_David_Fernando.pdf" target="_blank" rel="noopener noreferrer">
        <v-btn
          rounded
          color="primary"
          append-icon="mdi-download"
          class="text-none"
        >
          Download
        </v-btn>
      </NuxtLink>
      <NuxtLink to="/resume">
        <v-btn
          rounded
          variant="text"
          color="primary"
          class="text-none"
          append-icon="mdi-chevron-right"
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
