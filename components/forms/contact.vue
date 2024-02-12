<template>
    <v-card class="card pa-4 bg-surface d-flex flex-column" variant="outlined">
        <template v-slot:title>
            <div class="text-h5 font-weight-bold mb-3 card--title d-flex align-center ga-2">
                <p>Collabs</p> <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png"
                    alt="Backhand Index Pointing Down" width="35" height="35" />
            </div>
        </template>

        <v-form validate-on="submit lazy" @submit.prevent="submit">
            <div>
                <v-text-field v-model="user.email.value" label="Email" variant="outlined"></v-text-field>
                <v-text-field v-model="user.name.value" label="Object" variant="outlined"></v-text-field>
                <v-textarea auto-grow label="Message" variant="outlined" rows="2"></v-textarea>
            </div>

            <v-card-actions class="d-flex pa-0 justify-end">
                <v-btn type="submit" class="text-none" text="Submit" append-icon="mdi-send"></v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script setup lang="ts">

const name = ref('');
const email = ref('');

const user = {
    name,
    email,
};

const submit = () => {
    alert(user.name.value)
}

</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.card {
    transition-duration: 400ms;
    transition-property: box-shadow;
    border: 1px $primary solid;
    height: 100%;
    box-shadow: rgba($primary, 0.75) 5px 5px, rgba($primary, 0.5) 10px 10px,
        rgba($primary, 0.25) 15px 15px;
    width: 100%;

    @media only screen and (min-width: 600px) {
        max-width: 400px;
        width: 400px;
    }

    .v-icon {
        font-size: 2rem;
    }

    &:hover {

        .card--title,
        .v-icon {
            transition-duration: 400ms;
            color: $primary;
        }
    }

    &__description {
        @include paragraph-overflow-hidden(2)
    }
}</style>