<template>
    <div class="participants-list">
        <h3>Veuillez selectionner votre prénom</h3>
        <v-list>
            <v-list-item
                v-for="(name, index) in participants "
                :key="index"
                @click="selectParticipant(name)"
            >
                <v-list-item-content>{{ name }}</v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
export default {
    name: 'ParticipantList',
    props: {
    },
    data() {
        return {
            id: "",
            participants: ["Nina", "Cloé", "Léa"]
        }
    },
    methods: {
        fetchParticipants() {
            this.id = this.$route.params.id;
        },
        selectParticipant(name) {
            this.$emit('nav', { name: "Santa", params: { id: "fjqlsdkfj", name } })
        }
    },

    mounted: function () {
        this.fetchParticipants();
    }
}
</script>
<style scoped></style>