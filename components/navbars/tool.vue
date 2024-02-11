
<template>
    <div>
        <div v-if="posY > posY_ref" class="nav--fill"></div>
        <div class="nav"
            :class="[posY > posY_ref ? 'nav--fixed' : 'nav--static', theme.isDark ? 'nav--dark' : 'nav--light']">
            <div class="nav__toolbar">
                <img v-if="theme.isDark" src="/assets/img/df-light.svg" class="nav__logo" />
                <img v-else src="/assets/img/df-dark.svg" class="nav__logo" />
                <NuxtLink v-for="l in store_elements.navigation" :key="l.title" :to="l.link" class="nav__link">
                    {{ l.title }}
                </NuxtLink>
                <ButtonsTheme class="btn__theme" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import links from '~/data/links.json'

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

onUnmounted(() => {
    if (process.client) {
        window.removeEventListener('scroll', handleScroll);
    }
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.nav--light {
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

.nav--dark {
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

.nav {
    @extend %flex-center-el;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    transition: 1s ease-out;


    @media only screen and (min-width: 600px) {
        flex-direction: column;
        padding: 0;
    }

    &__toolbar {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: .75rem;
        padding: 0;
        width: 100%;
        position: relative;

        .nav__logo {
            height: 50%;
        }

        @media only screen and (min-width: 600px) {
            flex-direction: row;
            align-items: center;
            height: 4rem;
            gap: 3rem;
            padding: 0 .5rem 0 2.5rem;
        }

        @media only screen and (max-width: 600px) {
            .nav__logo {
                position: absolute;
                top: 0;
                left: 0;
                height: 25%;
            }

            .btn__theme {
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }

    }

    &__link {
        flex: auto;
        font-weight: bold;
        font-size: larger;
        text-align: center;
        transition: 500ms ease-in-out;

        @media only screen and (max-width: 600px) {
            &::after {
                content: '';
                width: 0%;
                height: 3px;
                background: $primary;
                display: block;
                transition: 250ms;
                margin-left: auto;
            }
        }

        &:hover::after {
            width: 100%;
        }
    }
}

.nav--fixed {
    position: static;
    z-index: 20;
    transform: translateY(0);
    width: 100%;

    @media only screen and (max-width:600px) {
        background-image: none;
        border-radius: none;
    }

    @media only screen and (min-width: 600px) {
        position: fixed;
        width: fit-content;
        border-radius: 2.5rem;
        overflow: hidden;
        right: 0;
        left: 0;
        top: 0;
        margin: auto;
        opacity: 0.5;
        transform: translateY(1.5rem);
    }

    &:hover {
        opacity: 1;
    }
}

.nav--static {
    position: static;
    width: 100%;
    background-image: none;
    border-radius: none;
    transform: translateY(0);

    @media only screen and (min-width: 600px) {
        width: fit-content;
        margin: auto;
        border-bottom-left-radius: 1.8rem;
        border-bottom-right-radius: 1.8rem;
    }

    @media only screen and (max-width: 600px) {}
}

.nav--fill {
    height: 4rem;

    @media only screen and (max-width: 600px) {
        display: none;
    }
}
</style>