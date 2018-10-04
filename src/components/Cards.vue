<template>
  <v-container class="pt-0">
    <v-toolbar dark class="green">
      <v-text-field
        flat
        label="Search card"
        prepend-inner-icon="search"
        solo-inverted
        v-model="search"
      ></v-text-field>
    </v-toolbar>
    <v-toolbar dark class="green">
      <v-toolbar-items>
        <v-btn flat @click="selected = 'number'">Number</v-btn>
        <v-btn flat @click="selected = 'name'">Owner</v-btn>
        <v-btn flat @click="selected = 'cohort'">Cohort</v-btn>
        <v-btn flat @click="selected = 'free'">Free</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-layout row wrap>
      <v-alert v-if="cards.length == 0" :value="true" type="error">
        No cards in the database
      </v-alert>
      <v-flex xs10 offset-xs1 sm8 offset-sm2 v-for="card in cards" :key="card.id" class="my-1">
        <v-list>
          <v-container fluid>
            <v-layout>
              <v-flex xs12 sm12>
                <v-list-tile
                  class="mt-2"
                  avatar
                  :to="'/card/' + card.id"
                >
                  <v-list-tile-avatar>
                    <v-icon large>credit_card</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title><b># {{card.number}} <small> {{card.cohort ? "- " + card.cohort : ""}}</small></b></v-list-tile-title>
                    <v-list-tile-title><small>{{card.owner}}</small></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-btn icon ripple large>
                      <v-icon color="blue">remove_red_eye</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>

              </v-flex>
            </v-layout>
          </v-container>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "Cards",
      data(){
          return{
            selected: "",
            search: ""
          }
      },
        computed:{
          cards(){
            switch (this.selected) {
              case "number":
                return this.$store.getters.sortedCardsNumber.filter(card => JSON.stringify(card).toLowerCase().includes(this.search.toLowerCase()))
              break
              case "name":
                return this.$store.getters.sortedCardsOwner.filter(card => JSON.stringify(card).toLowerCase().includes(this.search.toLowerCase()))
              break
              case "cohort":
                return this.$store.getters.sortedCardsCohort.filter(card => JSON.stringify(card).toLowerCase().includes(this.search.toLowerCase()))
              break
              case "free":
                return this.$store.getters.freeCards.filter(card => JSON.stringify(card).toLowerCase().includes(this.search.toLowerCase()))
              break
              default:
                return this.$store.getters.sortedCardsNumber.filter(card => JSON.stringify(card).toLowerCase().includes(this.search.toLowerCase()))
            }
          },
      }
    }
</script>

<style scoped>

</style>
