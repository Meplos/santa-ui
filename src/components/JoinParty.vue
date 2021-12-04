<template>
  <v-container class="join-party">
    <v-row>
      <v-text-field
        class="join-party__input"
        filled
        dense
        rounded
        v-model="partyId"
        placeholder="Entrer le code du tirage"
      ></v-text-field>
      <v-btn icon @click="joinParty" class="join-party__next">
        <v-icon class large primary>mdi-arrow-right</v-icon>
      </v-btn>
      <v-btn primary @click="createParty" class="join-party__create"
        >Créer un tirage</v-btn
      >
    </v-row>
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
