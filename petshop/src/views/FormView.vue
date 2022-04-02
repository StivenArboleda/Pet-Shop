<template>
  <div class="form-wrapper">
    <v-form v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        required
        :rules="nameRules"
      ></v-text-field>
      <v-text-field
        label="Email"
        v-model="email"
        required
        :rules="emailRules"
      ></v-text-field>
      <v-text-field
        label="Phone"
        v-model="phone"
        required
        :rules="phoneRules"
        v-mask="'(###) ### - ####'"
      ></v-text-field>
      <v-btn @click="submit" :disabled="!valid">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: {
    mask,
  },

  data: () => ({
    name: "",
    phone: "",
    email: "",
    valid: false,
    nameRules: [
      (name) => !!name || "Name is required",
      (name) => name.length > 2 || "Name is too short",
    ],
    emailRules: [
      (email) => !!email || "Email is required",
      (email) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
        "Invalided email",
    ],
    phoneRules: [
      (phone) => !!phone || "Phone is required",
      (phone) => phone.length > 7 || "Phone is too short",
      (phone) =>
        (phone.keyCode < 48 && phone.keyCode > 57) || "Phone only numbers",
    ],
  }),
  methods: {
    submit() {
      console.log(
        "name: ",
        this.name,
        "email: ",
        this.name,
        "Phone: ",
        this.phone
      );
    },
  },
};
</script>


<style scoped>
.form-wrapper {
  padding: 30px;
}
</style>