<template>
    <div>
        <button class="btn" @click="scrollToGallery">
            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                <path
                    d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z">
                </path>
            </svg>

            <span class="text">TAKE A LOOK</span>
        </button>
    </div>
</template>

<script setup lang="ts">


const scrollToGallery = () => {
    window.scrollTo({
        top: 650,
        behavior: 'smooth'
    });
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";

.btn {
    border: none;
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

.sparkle {
    fill: $primary;
    transition: all 800ms ease;
}

.text {
    font-weight: 600;
    color: $primary;
    font-size: medium;
}

.btn:hover {
    background: linear-gradient(0deg, $primary, $primary);
    box-shadow: 0 0 100px 0 $primary;
}

.btn:hover .text {
    color: $light;
}

.btn:hover .sparkle {
    fill: $light;
    transform: scale(1.2);
}
</style>