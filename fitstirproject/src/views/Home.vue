<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            color="#22273A"
    >
      <v-list dense>
        <v-list-item
                link
                :to="{name : 'VideoexerciseIndex'}"


        >
          <v-list-item-action>
            <v-icon color="white">mdi-play-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Video</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
                link
                :to="{name : 'PlaylistIndex'}"

        >
          <v-list-item-action>
            <v-icon>mdi-playlist-play</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Playlist</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="#22273A"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
              style="width: 300px"
              class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Fitstir</span>
      </v-toolbar-title>
      <v-text-field
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
              class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-chip
              class="ma-2"
              color="primary"
      >
        BMI: 18.4
      </v-chip>
      <v-chip
              class="ma-2"
              color="primary"
      >
        Username: xxxxxxx
      </v-chip>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>