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
    <v-row class="ma-auto align-cente create-party__btns">
      <v-col cols="2">
        <v-btn fab @click="add" color="secondary">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2" offset-sm-10>
        <v-btn fab @click="create" color="secondary">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    participants: ["Cloé", "Nina", "Léa"],
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
<style>
.create-party__btns {
  bottom: 0px;
  position: fixed;
  z-index: 2;
}

.create-party__row {
  z-index: 2;
}
</style>
