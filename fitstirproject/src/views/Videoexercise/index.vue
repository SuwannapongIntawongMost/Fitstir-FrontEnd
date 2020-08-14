<template>
    <v-content>
        <v-container >
            <h1> How to play Multifunction Machine</h1>
        </v-container>
        <v-container>
                <h1>How to exercise</h1>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Arm</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Biseb</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Belly</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Chest</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1> Leg</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Thigh</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Calf leg</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Wing</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Shoulder</h1>
            </v-chip>
        </v-container>
        <v-container>
            <v-chip
                    class="ma-2"
                    color="primary"
            >
                <h1>Tricep</h1>
            </v-chip>
        </v-container>
    </v-content>

</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                alignmentsAvailable: [
                    'start',
                    'center',
                    'end',
                    'baseline',
                    'stretch',
                ],
                alignment: 'center',
                dense: false,
                justifyAvailable: [
                    'start',
                    'center',
                    'end',
                    'space-around',
                    'space-between',
                ],
                justify: 'center',
            }
        },


    }
</script>

<style scoped>

</style>