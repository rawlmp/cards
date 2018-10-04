<template>
  <v-app>
    <v-navigation-drawer app v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="green">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="sideNav = true"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/cards" tag="span" style="cursor:pointer">Card Manager</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat
               v-for="item in menuItems"
               :key="item.title"
               :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        // {icon: "face" , title: "Sign up", link:"/signup"},
        {icon: "lock_open", title: "Log in", link: "/signin"}
      ]

      if (true) {
        menuItems = [
          {icon: "credit_card", title: "Cards", link: "/cards"},
          {icon: "add", title: "Add Card", link: "/addcard"},
        ]
      }

      return menuItems;
    }
  },
  name: 'App'
}
</script>

<style>
  .fade-enter-active{
    transition: opacity .7s;
  }

  .fade-leave-active {
    transition: opacity 0;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
