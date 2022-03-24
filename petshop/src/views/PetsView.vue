<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
        <app-dog :dog="pet"> </app-dog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Dogs from "../data/dogs";
import Pet from '../components/DogComponent';

export default {
    components: {
        appDog: Pet
        },
    
  data: () => ({
    dogs: Dogs,
  }),
}
</script>