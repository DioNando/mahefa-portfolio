<template>
  <section>
    <TextsTitle :title="'My story.'" />
    <article>
      <div>
        <p class="text-h5 text-end font-weight-bold">What about me</p>
        <p>
          Proven track record in managing end-to-end development projects, from
          initial conception through to successful deployment. My technical
          expertise centers on web and mobile development, with particular
          proficiency in JavaScript, PHP, and Java. This is complemented by a
          strong foundation in UX/UI design, enabling me to deliver solutions
          that are both technically robust and user-centric. My strengths
          include collaborative teamwork, quick adaptability, and strong
          analytical skills - assets I'm eager to leverage to help your
          organization achieve its business objectives.
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
