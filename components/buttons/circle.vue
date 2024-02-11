<template>
  <div class="circle__content">
    <div class="circle__sub">
      <div class="circle__element" :class="!showButton && 'element--rotate'">
        <v-icon v-for="(i, index) of icons" :key="index" :icon="i.name" :color="theme.isDark ? 'light' : 'secondary'"
          class="element__button" :class="showButton ? 'element__button--show' : 'element__button--hide'"></v-icon>
      </div>
    </div>
    <v-btn icon="mdi-access-point" color="primary" @click="toggleButton" class="toggle__button"></v-btn>
  </div>
</template>

<script setup lang="ts">
const theme = useThemeStore()

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

const showButton = ref(false)

const toggleButton = () => {
  showButton.value = !showButton.value;
}

</script>


<style scoped>
.circle__content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.circle__sub {
  position: absolute;

  .circle__element {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 500ms;

    .element__button {
      font-size: 2rem;
      position: absolute;
      transition: 500ms;
    }

  }
}

.element--rotate {
  transform: rotate(180deg);
}


.element__button--show {
  cursor: pointer;

  &:nth-child(1) {
    transform: translateY(-5rem);
  }

  &:nth-child(2) {
    transform: translateX(5.5rem);
  }

  &:nth-child(3) {
    transform: translateY(5.5rem);
  }

  &:nth-child(4) {
    transform: translateX(-5rem);
  }
}

.element__button--hide {
  transform: translate(0);
}

.toggle__button {
  padding: 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
