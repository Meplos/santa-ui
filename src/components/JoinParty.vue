<template>
    <v-container class="join-party">
        <v-row>
            <v-text-field
                class="ma-4"
                filled
                dense
                rounded
                v-model="partyId"
                placeholder="Entrer le code du tirage"
            ></v-text-field>
            <v-btn icon @click="joinParty">
                <v-icon class large primary>mdi-arrow-right</v-icon>
            </v-btn>
            <v-btn primary @click="createParty">Créer un tirage</v-btn>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        partyId: ''
    }),
    methods: {
        joinParty() {
            this.$emit('nav', { name: "Party", props: { id: this.partyId } });
        },
        createParty() {
            this.$emit('nav', { name: "Create" });
        }
    }
}
</script>
<style scoped></style>