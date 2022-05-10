<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mission commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="MC.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="MC.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">mainStack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="MC.mainStack"
          name="mainStack"
        />
      </div>
      <button @click="saveMC" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> MC creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMC">Add</button>
    </div>
  </div>
</template>

<script>
import MCService from '../services/MCService';
export default {
  name: "add-MC",
  data() {
    return {
      MC: {
        id: null,
        name: "",
        username: "",
        mainStack: ""
      },
      submitted: false
    };
  },
  methods: {
    saveMC() {
      var data = {
        name: this.MC.name,
        username: this.MC.username,
        mainStack: this.MC.mainStack
      };
      MCService.create(data)
        .then(response => {
          this.MC.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMC() {
      this.submitted = false;
      this.MC = {};
    }
  }
};
</script>
