<template>
  <v-container class="join-party">
    <v-text-field filled dense rounded v-model="partyId" placeholder="Entrer le code du tirage">
      <template v-slot:append-outer>
        <v-btn icon @click="joinParty" class="join-party__next">
          <v-icon class large primary>mdi-arrow-right</v-icon>
        </v-btn>
      </template>
    </v-text-field>
    <v-btn class="join-party__create" color="primary" @click="createParty">Créer un tirage</v-btn>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    partyId: "",
  }),
  methods: {
    joinParty() {
      this.$emit("nav", { name: "Party", params: { id: this.partyId.trim() } });
    },
    createParty() {
      this.$emit("nav", { name: "Create" });
    },
  },
};
</script>
<style scoped></style>
