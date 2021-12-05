<template>
  <div class="create-party">
    <v-row
      class="justify-content align-content create-party__row"
      v-for="(participant, index) in participants"
      :key="index"
    >
      <v-spacer></v-spacer>
      <v-text-field
        style="max-width: fit-content; float: left"
        v-model="participants[index]"
        dense
        filled
        rounded
      ></v-text-field>
      <v-btn icon @click="remove(index)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="ma-auto align-center">
      <v-col sm="5" md="2" lg="2">
        <v-btn fab @click="add" color="secondary">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col sm="5" md="2" lg="2">
        <v-btn fab @click="create" color="secondary" style="float: right">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    participants: [""],
  }),
  methods: {
    remove(index) {
      this.participants.splice(index, 1);
    },
    add() {
      this.participants.push("");
    },
    async create() {
      const trueParticipants = this.participants.filter(
        (participant) => participant.length > 0
      );
      const { data } = await this.$axios.post("/api/create", trueParticipants);
      console.log(data.id);
      const id = data.id;
      this.$router.push({ name: "id", params: { id } });
    },
  },
};
</script>
<style></style>
