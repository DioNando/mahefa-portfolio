<template>
    <section>
        <TitleGradient :title="'Education.'" />
        <div class="cards-container">
            <div v-for="(s, index) in services" :key="index" class="card-space">
                <CardService :service="s" :show="true" />
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">

const services = [
    {
        title: "Tempora, numquam laborum?",
        type: "Tempora",
        icon: "mdi-puzzle",
        description:
            "Adipisci facilis ullam maxime ducimus aliquid quae repudiandae ratione modi cupiditate dolores recusandae odio odit molestiae provident porro dolor quis rem, dolorem atque voluptatem nostrum, nobis, deserunt numquam asperiores. Ipsa!",
    },
    {
        title: "Magni, numquam dolores!",
        type: "Magni",
        icon: "mdi-earth",
        description:
            "Eius natus, sunt ea voluptas dolor omnis recusandae. Eos veniam enim labore quasi voluptates, expedita, commodi distinctio illum hic eius ratione eaque! Numquam iusto corrupti, neque vero ducimus recusandae itaque?",
    },
    {
        title: "Enim, ex odio!",
        type: "Enim",
        icon: "mdi-fruit-watermelon",
        description:
            "Similique itaque suscipit eum ducimus aperiam consectetur corporis culpa unde. Atque, similique. Quia molestias soluta qui! Ipsa pariatur temporibus magnam, facere nemo dolorem molestiae nesciunt corrupti quam accusantium, aspernatur vel!",
    },
];

</script>
  
<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 2rem;

    .card-space {
        flex: 1;
        min-width: 350px;
    }
}
</style>
  