<template>
  <v-container>
    <v-card class="pa-2">
      <v-card-text><h3>Create your card</h3></v-card-text>
      <form @submit.prevent="createCard">

        <v-layout row class="pt-2">
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              color="green"
              name="number"
              label="Number"
              id="number"
              v-model="number"
              outline
              prepend-icon="credit_card"
            ></v-text-field>
          </v-flex>
        </v-layout>


        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              color="green"
              name="owner"
              label="Owner"
              id="owner"
              v-model="owner"
              outline
              prepend-icon="face"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              color="green"
              name="cohort"
              label="Cohort"
              id="cohort"
              v-model="cohort"
              outline
              prepend-icon="computer"
              hint="For example 'Java 105' or STAFF"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 sm12 id="buttons" class="mt-3 text-xs-center text-sm-right">

            <v-btn
              type="submit"
              class="green"
              width="200"
              dark
            >Add card
              <v-icon class="pl-2">credit_card</v-icon>
            </v-btn>

          </v-flex>
        </v-layout>
      </form>
    </v-card>
  </v-container>
</template>

<script>
    export default {
        name: "addCard",
      data(){
          return{
            number: "",
            owner: "",
            cohort: ""
          }
      },
      methods:{
          createCard(){
            let card = {
              number: this.number,
              owner: this.owner,
              cohort: this.cohort
            }

            this.$store.dispatch('createCard', card)
              .then(() => this.$router.go(-1))


          }
      }
    }
</script>

<style scoped>

</style>
