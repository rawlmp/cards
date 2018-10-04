import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cards: [
      // {id: 1, number: 1234, owner: "Peter", cohort: "Java 105"}
    ],
    loading: false
  },
  mutations: {
    addCard(state, payload) {
      state.cards.push(payload)
    },
    setCards(state, payload) {
      state.cards = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  getters: {
    cards(state) {
      return state.cards
    },
    sortedCardsNumber(state, getters) {
      return [...getters.cards.filter(card => card.owner !== "").sort((cardA, cardB) => {
        return cardA.number - cardB.number
      })]
    },
    sortedCardsOwner(state, getters) {
      return [...getters.cards.filter(card => card.owner !== "").sort((a, b) => (a.owner > b.owner) ? 1 : ((b.owner > a.owner) ? -1 : 0))]
    },
    sortedCardsCohort(state, getters) {
      return [...getters.cards.filter(card => card.owner !== "").sort((a, b) => (a.cohort > b.cohort) ? 1 : ((b.cohort > a.cohort) ? -1 : 0))]
    },
    freeCards(state, getters) {
      return [... getters.cards.filter(card => card.owner === "")]
    },
    loadedCard(state) {
      return (cardId) => {
        return state.cards.find(card => {
          return card.id == cardId
        })
      }
    },
    loading(state){
      return state.loading
    }
  },
  actions: {
    loadCards({commit}) {
      commit("setLoading", true)
      firebase.database().ref('cards').once("value")
        .then(data => {
          let cards = []
          let obj = data.val()
          for (let key in obj) {
            cards.push({
              id: key,
              owner: obj[key].owner,
              number: obj[key].number,
              cohort: obj[key].cohort
            })
          }
          commit('setCards', cards)
          commit("setLoading", false)

        })

    },
    createCard({commit}, payload){
      let card = {
        number: payload.number,
        owner: payload.owner,
        cohort: payload.cohort
      }
      firebase.database().ref('cards').push(card)
        .then(data => {
          commit("addCard", { ...card,
            id: data.key
          })

        })
        .catch()
    },
    updateCard({commit, dispatch}, payload){
      firebase.database().ref("cards/" + payload.id).update(payload)
      dispatch('loadCards')
    },
    removeCard({commit, dispatch}, payload){
      firebase.database().ref("cards/" + payload.id).remove()
        .then(() => dispatch('loadCards'))

    }
  }
})
