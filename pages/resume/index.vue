<template>
  <v-container>
    <TextsTitle :title="'Resume.'" />
    <!-- <div class="emoji">
            <IllustrationsPath />
        </div> -->
    <!-- <CardsDots class="mb-4" /> -->
    <div class="about">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat
      dignissimos dolores dicta reprehenderit voluptatibus perspiciatis
      exercitationem, qui, eaque sed consequuntur minima ad nesciunt modi quasi
      unde incidunt culpa magni.
    </div>
    <TimelinesResume />
    <!-- <div class="d-flex justify-space-between">
            <IllustrationsLogo />
            <ButtonsCircle class="circle" />
        </div> -->
  </v-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.v-container {
  @extend %section-accueil;
}

.about {
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
