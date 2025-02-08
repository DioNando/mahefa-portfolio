<template>
  <section>
    <TextsTitle :title="'My story.'" />
    <article>
      <div>
        <p class="text-h5 text-end font-weight-bold">What about me</p>
        <p>
          Confident in my ability to lead development projects from A to Z, from
          the design phase to deployment. My technical expertise revolves around
          web and mobile development, particularly JavaScript, PHP, and Java. It
          is also enriched by a strong focus on UX/UI design, allowing me to
          create solutions that are both functional and user-centered. My
          enthusiasm for teamwork, responsiveness, and analytical mindset are
          assets I wish to bring to your organization to help address your
          business challenges.
        </p>
      </div>
      <div class="d-none d-md-block">
        <!-- <CardsDots /> -->
        <IllustrationsLogo />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
const theme = useThemeStore();
</script>

<style lang="scss" scoped>
section {
  @extend %section-accueil;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 3rem;

    @media only screen and (min-width: 600px) {
      flex-direction: row;
      align-items: center;
    }

    div:first-child {
      text-align: justify;
      flex: 2;
    }

    div:last-child {
      flex: 1;
      width: 100%;
    }
  }
}
</style>
