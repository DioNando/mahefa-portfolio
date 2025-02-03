<template>
  <v-container>
    <TextsTitle :title="'I\'m Razafimahefa Tolotra David Fernando.'" />
    <!-- <IllustrationsSpotify /> -->
    <div class="d-md-flex justify-space-between align-end">
      <div class="about">
        <div class="text-justify">
          Passionate about IT and soon-to-be state engineer graduate, I'm
          seeking an internship to launch my professional career starting from
          February 2025. I have acquired solid skills in web development,
          including JavaScript, PHP, and Java. I am ready to put my enthusiasm
          for teamwork, responsiveness, and analytical thinking at the service
          of your organization to contribute to the development of impactful and
          innovative solutions.
        </div>
        <div class="d-flex ga-3 mt-6">
          <NuxtLink
            href="/docs/CV_fr_RAZAFIMAHEFA_Tolotra_David_Fernando.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-btn color="primary" append-icon="mdi-download" class="text-none">
              CV French
            </v-btn>
          </NuxtLink>
          <NuxtLink
            href="/docs/CV_en_RAZAFIMAHEFA_Tolotra_David_Fernando.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-btn color="primary" append-icon="mdi-download" class="text-none">
              CV English
            </v-btn>
          </NuxtLink>
        </div>
      </div>
      <div class="mt-8 mt-md-0">
        <!-- <IllustrationsLogo /> -->
        <div class="d-flex justify-center">
          <img src="/assets/img/developer-activity-animate.svg" style="width: 100%" />
        </div>
      </div>
    </div>
    <!-- <TimelinesResume /> -->
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
