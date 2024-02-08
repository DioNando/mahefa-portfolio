
<template>
    <div>
        <div v-if="posY > posY_ref" class="nav--fill"></div>
        <div class="nav" :class="[posY > posY_ref ? 'nav--fixed' : 'nav--static', theme.isDark ? 'dark' : 'light']">
            <div class="nav__toolbar">
                <img v-if="theme.isDark" src="/assets/img/df-light.svg" style="height: 50%;" class="d-none d-md-block" />
                <img v-else src="/assets/img/df-dark.svg" style="height: 50%;" class="d-none d-md-block" />
                <NuxtLink v-for="l in store_elements.navigation" :key="l.title" :to="l.link" class="nav__link">
                    {{ l.title }}
                </NuxtLink>
                <ButtonsTheme />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import dataLinks from '~/data/links.json'

const links = ref(dataLinks)

const theme = useThemeStore()
const store_elements = useElementStore()

const posY = ref(0)
const posY_ref = 0

const handleScroll = () => {
    posY.value = window.scrollY
}

onMounted(() => {
    if (process.client) {
        window.addEventListener('scroll', handleScroll);
    }
})
</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.light {
    background-image: linear-gradient(45deg, $primary, $quaternary, );


    .nav__link {
        color: $surface;

        &:hover {
            color: $dark;
        }
    }

    .router-link-exact-active {
        color: $dark;
    }
}

.dark {
    background-image: linear-gradient(45deg, $dark, $surface);


    .nav__link {
        color: $light;

        &:hover {
            color: $primary;
        }
    }

    .router-link-exact-active {
        color: $secondary;
    }
}

// .dark--border {
//     border: 1px $primary solid;
// }

.nav {
    @include center-element;
    transition: 500ms ease-in-out;
    // box-shadow: 2px 2px 20px 0px rgba($dark, 0.25);

    @media only screen and (max-width: 720px) {
        // align-items: flex-end;
        flex-direction: column;
        // text-align: center;
        padding: 1rem;
    }

    &__toolbar {
        gap: 3rem;
        padding: 0 .5rem 0 2.5rem;
        height: 4rem;
        display: flex;
        align-items: center;

        @media only screen and (max-width: 720px) {
            height: fit-content;
            gap: .75rem;
            // align-items: flex-end;
            flex-direction: column;
            padding: 0;
        }

    }

    &__link {
        flex: auto;
        font-weight: bold;
        font-size: larger;
        text-align: center;
        transition: 500ms ease-in-out;

        &::after {
            content: '';
            width: 0%;
            height: 3px;
            background: $primary;
            display: block;
            margin: auto;
            transition: 0.5s;
        }

        &:hover::after {
            width: 100%;
        }
    }
}

.nav--fixed {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    // top: 1.5rem;
    z-index: 20;
    border-radius: 2.5rem;
    margin: auto;
    width: fit-content;
    overflow: hidden;
    opacity: 0.5;
    transform: translateY(1.5rem);
    
    @media only screen and (max-width: 720px) {
        position: static;
        transform: translateY(0);
        width: 100%;
        background-image: none;
    }

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 720px) {
        top: 0;
        border-radius: none;
    }

}

.nav--static {
    position: static;
    transform: translateY(0);
    width: fit-content;
    margin: auto;
    width: 100%;
    background-image: none;
    // background-color: red;
    border-bottom-left-radius: 1.8rem;
    border-bottom-right-radius: 1.8rem;

    @media only screen and (max-width: 720px) {
        border-radius: none;
    }
}

.nav--fill {
    height: 4rem;

    @media only screen and (max-width: 720px) {
        display: none;
    }
}
</style>