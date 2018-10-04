<template>
  <v-container>
    <v-card class="pa-2">
      <form @submit.prevent="updateCard">
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              color="green"
              name="id"
              label="Id"
              id="id"
              v-model="cardId"
              outline
              disabled
              prepend-icon="format_list_numbered"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              color="green"
              name="number"
              label="Number"
              id="number"
              v-model="number"
              outline
              disabled
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
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12 sm12 id="buttons" class="mt-3 text-xs-center text-sm-right">
            <v-btn xs4
              type="submit"
              class="blue"
              dark
            >Update
              <v-icon>update</v-icon>
            </v-btn>

            <v-btn xs4
              @click="freeCard"
              type="submit"
              class="green"
              dark
            >Free
              <v-icon>credit_card</v-icon>
            </v-btn>

            <v-btn xs4
              @click="removeCard"
              class="red"
              dark
            >Remove
              <v-icon>credit_card</v-icon>
            </v-btn>

          </v-flex>
        </v-layout>
      </form>
    </v-card>
  </v-container>
</template>

<script>
    export default {
      name: "AddCard",
      props:['id'],
      data(){
        return {
          cardId: "",
          number: "",
          owner: "",
          cohort: ""
        }
      },
      created(){
        this.cardId = this.card.id
        this.number = this.card.number
        this.owner = this.card.owner
        this.cohort = this.card.cohort
      },
      computed:{
          card(){
            return this.$store.getters.loadedCard(this.id)
          }
      },
      methods:{
        updateCard(){
          this.$store.dispatch('updateCard', {
            id: this.cardId,
            owner: this.owner,
            cohort: this.cohort
          })
            .then(() => this.$router.go(-1))
        },
        freeCard(){
          this.owner = ""
          this.cohort = ""
        },
        removeCard(){
          this.$store.dispatch('removeCard', {id: this.id})
            .then(() => this.$router.go(-1))
        }
      }
    }
</script>

<style scoped>

</style>
