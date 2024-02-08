<template>
  <div class="circle-content">
    <div class="circle-sub">
      <div class="circle-element" :class="!showButton ? 'circle-rotate' : ''">
        <v-icon v-for="(i, index) of icons" :key="index" :icon="i.name" :color="theme.isDark ? 'light' : 'secondary'" class="circle-button"
          :class="showButton ? 'button-show' : 'button-hide'"></v-icon>
      </div>
    </div>
    <v-btn icon="mdi-access-point" color="primary" @click="toggleButton" class="toggle-button"></v-btn>
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
.circle-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.circle-sub {
  position: absolute;
}

.circle-element {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms;

  .circle-button {
    font-size: 2rem;
    position: absolute;
    transition: 500ms;
  }

}

.circle-rotate {
  transform: rotate(180deg);
}


.button-show {
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

.button-hide {
  transform: translate(0);
}

.toggle-button {
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
