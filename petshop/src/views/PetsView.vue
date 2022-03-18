<template>
    <v-container fluid grid-list-md>
        <v-layout wrap>
            <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
                <v-card>
                    <v-img :src="pet.img" height="250px">
                        
                    </v-img>
                    <v-card-title>
                        <div>
                            <h3>{{pet.name}}</h3>
                            <p>{{pet.breed}}</p>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import Dogs from "../data/dogs";

export default {
  data: () => ({
    dogs: Dogs,
  }),
};
</script>