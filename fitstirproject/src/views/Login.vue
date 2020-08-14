<template>
    <v-app id="inspire">
        <v-main class="">
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Fitstir:Login</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <span>Source</span>
                                </v-tooltip>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            class="text-center"
                                            type="text"
                                            @change="user.username = $event.text"
                                            label="Username"
                                            prepend-icon="mdi-account"
                                    ></v-text-field>

                                    <v-text-field
                                            class="text-center"
                                            type="password"
                                            @change="user.password = $event.text"
                                            label="Password"
                                            prepend-icon="mdi-lock"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text="Login" @click="login">Login</v-btn>

                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Buttons from "../components/Buttons";
    import InputText from "../components/InputText";
    export default {
        name:"Login",
        component: {Buttons, InputText},
        comments: {
            InputText,
            Buttons
        },
        data: () => ({
            user: {
                username: null,
                password: null
            }
        }),
        methods: {
            login() {
                if (this.user.username === "admin" && this.user.password === "password") {
                    this.$router.push({name: "Home"})
                } else {
                    alert("Login Error")
                }
                console.log('login')
            }
        },
    }
</script>