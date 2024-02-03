<template>

  <div>
    <div class="menu" :class="[sidebarVisible ? 'menu-show' : '', theme.isDark ? 'menu-dark' : 'menu-light']">
      <div v-if="sidebarContentVisible" class="menu-links">
        <NuxtLink v-for="l in links" :key="l.title" :to="l.link" class="router-link animation-link-in">
          {{ l.title }}
        </NuxtLink>
      </div>

      <div v-if="sidebarContentVisible" class="d-flex align-end justify-space-between">
        <div class="d-flex flex-column align-start">
          <ThemeMode />
          <p class="text-disabled"> Made with <v-icon icon="mdi-heart"></v-icon></p>
          <p class="text-disabled">
            By Dio_Nando
          </p>
        </div>

        <div class="d-flex flex-column ga-5">
          <v-icon v-for="(i, index) of icons" :key="index" :icon="i.name"
            :color="theme.isDark ? 'light' : 'primary'"></v-icon>
        </div>


      </div>
    </div>
    <div class="menu-toolbar">
      <!-- <div>
        <img v-if="theme.isDark" src="/assets/img/flame-white.svg" style="height: 5rem;" />
        <img v-else src="/assets/img/flame.svg" class="menu-logo" style="height: 5rem;" />
      </div> -->
      <v-spacer></v-spacer>
      <div>
        <v-btn :prepend-icon="sidebarVisible ? 'mdi-backburger' : 'mdi-menu'" size="large" elevation="4" rounded="xl" :class="theme.isDark ? 'dark' : 'light'"
          @click="toggleSidebar">Menu</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import anime from 'animejs';

const { $anime } = useNuxtApp()

const theme = useThemeStore()

const sidebarVisible = ref(false)
const sidebarContentVisible = ref(false)

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About Me",
    link: "/about-me",
  },
  {
    title: "Resume",
    link: "/resume",
  },
];

const icons = [
  {
    name: "mdi-github",
  },
  {
    name: "mdi-whatsapp",
  },
  {
    name: "mdi-linkedin",
  },
  {
    name: "mdi-instagram",
  },
]

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
  if (sidebarVisible.value === true) {
    setTimeout(() => {
      sidebarContentVisible.value = true
    }, 500);

    $anime({
      targets: '.sidebarContent',
      opacity: [
        { value: 0 },
        { value: 1 },
      ],
      translateX: [
        { value: -270 },
        { value: 0 },
      ],
      delay: anime.stagger(100)
    })
  } else {
    // sidebarVisible.value = true
    sidebarContentVisible.value = false
    // setTimeout(() => {
    //   sidebarVisible.value = false
    // }, 500);
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.light {
    background-image: linear-gradient(45deg, $tertiary, $primary,);
}

.dark {
    background-image: linear-gradient(45deg, $quaternary, $secondary);
}

.router-link {
  font-weight: bold;
  transition: 200ms;
  color: $secondary;
  font-size: xx-large;
  
  &:hover {
    color: $primary;
    transform: translateX(1rem);
  }
}

.router-link-exact-active {
  color: $primary;
}

.menu {
  width: 0;
  height: 100%;
  position: absolute;
  opacity: 0;
  z-index: 11;
  // backdrop-filter: blur(10px);
  transition: 500ms ease-in-out;
  overflow: hidden;

  .menu-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }


  .menu-sub {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .menu-logo {
      height: 10rem;
    }

  }
}

.menu-show {
  width: 40%;
  position: fixed;
  padding: 4rem;
  opacity: 1;
  border-right: 3px solid $tertiary;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-dark {
  background-color: $background;
  // background-color: $dark-blur;
}

.menu-light {
  background-color: $light;
  // background-color: $light-blur;
}

.menu-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: fixed;
  width: 100%;
  z-index: 10;
}

.animation-link-in {
  animation: animation-link-in 250ms;
}

@keyframes animation-link-in {
  from {
    // transform: translateX(-10rem);
    opacity: 0;
  }

  to {
    // transform: translateX(0);
    opacity: 1;
  }
}
</style>
  
