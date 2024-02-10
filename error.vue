<template>
    <v-container-fluid class="error">

        <template v-if="error?.statusCode === 404">
            <div class="error__content">
                <div class="text-primary text-h2">404!</div>
                <div class="text-h4">Sorry, that page doesn't exist.</div>
                <div>
                    <v-btn prepend-icon="mdi-home" size="x-large" color="primary" rounded variant="tonal" class="mt-4"
                        @click="handleError">Go
                        home</v-btn>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="error__content">
                <div class="text-primary text-h2">Dang</div>
                <div class="text-primary text-h2">Error {{ error?.statusCode }}</div>
                <p class="text-h4">It looks like something broke.</p>
                <p class="text-h5">Sorry about that.</p>
                <div>
                    <v-btn prepend-icon="mdi-home" size="x-large" color="primary" rounded variant="tonal" class="mt-4"
                        @click="handleError">Go
                        home</v-btn>
                </div>
            </div>
        </template>

    </v-container-fluid>
    <IllustrationsWaves class="waves" />
</template>

<script setup lang="ts">
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

*,
body {
    overflow: hidden;
    background-color: $dark
}

.error {
    @extend %flex-center-el;
    height: 100vh;
    text-align: center;

    .error__content {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        div {
            font-weight: bold;
        }
    }
}

.waves {
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
}
</style>