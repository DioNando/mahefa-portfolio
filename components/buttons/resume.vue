<template>
  <div>
    <NuxtLink
      href="/docs/CV_en_RAZAFIMAHEFA_Tolotra_David_Fernando.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button class="btn">
        <v-icon class="icon" icon="mdi-file-document"></v-icon>
        <span class="text">RESUME</span>
      </button>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.btn {
  border: 1px $primary solid;
  padding: 1rem 1.5rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: $light;
  cursor: pointer;
  transition: all 450ms ease-in-out;
}

.sparkle,
.icon,
.text {
  color: $primary;
}

.sparkle {
  transition: all 800ms ease;
}

.text {
  font-weight: 600;
  font-size: medium;
}

.btn:hover {
  background: linear-gradient(0deg, $primary, $primary);
  box-shadow: 0 0 100px 0 $primary;

  .text,
  .icon {
    color: $light;
  }

  .sparkle {
    fill: $light;
    transform: scale(1.2);
  }
}
</style>
