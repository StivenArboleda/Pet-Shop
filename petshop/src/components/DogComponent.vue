<template>
    <v-card color="grey lighten-2">
        <v-img :src="dog.img" height="250px">
        </v-img>
        <v-card-title>
            <div>
                <h3>{{dog.name}}</h3>
                <p>{{dog.breed}}</p>
                <v-btn @click="addToFavorites">Add To Favorites</v-btn>
            </div>
        </v-card-title>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        dog: {
            type: Object
        }
    },
    methods: {
        ...mapActions(["addToFavorites"])
    }
}
</script>