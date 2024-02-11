<template>
    <v-app>
        <section>
            <template v-if="error?.statusCode === 404">
                <div class="error__content">
                    <div class="text-primary text-h2">404!</div>
                    <div class="text-h4">Sorry, that page doesn't exist.</div>
                    <div>
                        <v-btn append-icon="mdi-home" color="primary" rounded variant="outlined" class="mt-4 text-none"
                            @click="handleError">Go
                            home</v-btn>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="error__content">
                    <div class="text-primary text-h3">Dang</div>
                    <div class="text-primary text-h2">Error {{ error?.statusCode }}</div>
                    <p class="text-h4">It looks like something broke.</p>
                    <p class="text-h5">Sorry about that.</p>
                    <div>
                        <v-btn append-icon="mdi-home" color="primary" rounded variant="outlined" class="mt-4 text-none"
                            @click="handleError">Go
                            home</v-btn>
                    </div>
                </div>
            </template>
        </section>
        <IllustrationsWaves class="waves d-none d-md-block" />
    </v-app>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default'
})

const error = useError();

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(10px);
}

.layout-enter-active,
.layout-leave-active {
    transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
    filter: blur(10px);
}

section {
    width: 100%;
    height: 100%;
    position: relative;
    @extend %flex-center-el;
    text-align: center;
}

.error__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 10;
    gap: .5rem;

    div {
        font-weight: bold;
    }
}

.v-btn {
    font-size: 1.5rem;
    padding: 2rem;
    @extend %flex-center-el;
    border-radius: 2rem;
}


.waves {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>