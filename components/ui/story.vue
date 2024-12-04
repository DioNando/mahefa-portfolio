<template>
  <section>
    <TextsTitle :title="'My story.'" />
    <article>
      <div class="">
        <p class="text-h5 font-weight-bold">What about me</p>
        <p>
          Passionate about IT and soon-to-be state engineer graduate, I'm
          seeking an internship to launch my professional career starting from
          February 2025. I have acquired solid skills in web development,
          including JavaScript, PHP, and Java. I am ready to put my enthusiasm
          for teamwork, responsiveness, and analytical thinking at the service
          of your organization to contribute to the development of impactful and
          innovative solutions.
        </p>
      </div>
      <div class="d-none d-md-block">
        <CardsDots />
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
      text-align: end;
      flex: 2;
    }

    div:last-child {
      flex: 1;
      width: 100%;
    }
  }
}
</style>
