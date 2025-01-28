<template>
  <TextsTitle :title="'Resume.'" />
  <v-timeline v-if="screenWidth < 600" align="start" side="end">
    <v-timeline-item
      v-for="(item, index) in resumes"
      :icon="item.icon"
      dot-color="primary"
      fill-dot
      icon-color="surface"
    >
      <template>
        <div
          class="text-h6 text-primary mb-3"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          Content {{ index + 1 }}
        </div>
      </template>
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-offset="200">
        <CardsResume :resume="item" />
      </div>
    </v-timeline-item>
  </v-timeline>
  <v-timeline v-else>
    <v-timeline-item
      v-for="(item, index) in resumes"
      :icon="item.icon"
      dot-color="primary"
      fill-dot
      icon-color="surface"
    >
      <template v-slot:opposite>
        <div
          class="text-h6 text-primary mb-3"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          Content {{ index + 1 }}
        </div>
      </template>
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-offset="200">
        <CardsResume :resume="item" />
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import resumes from "~/data/resumes.json";

const screenWidth = ref(0);

const handleWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  screenWidth.value = window.innerWidth;
  if (process.client) {
    window.addEventListener("resize", handleWidth);
  }
});
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", handleWidth);
  }
});
</script>
