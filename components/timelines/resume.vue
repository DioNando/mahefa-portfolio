<template>
    <v-timeline align="start">
        <v-timeline-item v-for="(item, index) in resumes" :icon="item.icon" dot-color="primary" fill-dot icon-color="surface">
            <template v-slot:opposite>
                <div class="text-h6 text-bold text-primary" data-aos="fade-in" data-aos-duration="1000"
                    data-aos-offset="200">
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
import dataResumes from '~/data/resumes.json'
const resumes = ref(dataResumes)
</script>