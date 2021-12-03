<template>
    <div class="create-party">
        <v-row
            class="justify-content align-content"
            v-for="(participant, index) in participants"
            :key="index"
        >
            <v-spacer></v-spacer>
            <v-text-field
                style="max-width: fit-content; float: left;"
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
            <v-spacer></v-spacer>
            <v-col col="1">
                <v-btn fab @click="add">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-col>
            <v-col col="1">
                <v-btn fab @click="create" class="ma-2">
                    <v-icon>mdi-send</v-icon>
                </v-btn>
            </v-col>
            <v-spacer></v-spacer>
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
        create() {
            const trueParticipants = this.participants.filter(participant => participant.length > 0);

            //TODO : REST request to create
            console.log(trueParticipants);
            const id = "jflqsdjfmlsjdfuem";
            this.$router.push({ name: "id", params: { id } });
        }
    }
}
</script>
<style>
.create-party {
}
