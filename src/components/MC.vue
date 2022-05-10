<template>
<div>
<h4>Mission commander</h4>
  <div v-if="currentMC" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMC.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMC.username"
        />
      </div>
      <div class="form-group">
        <label for="title">mainStack</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMC.mainStack"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteMC">
      Eliminar Mission Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMC">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un mission commander. </p>
  </div>
</div>
</template>
<script>
import MCService from "../services/MCService";
export default {
  name: "MC",
  data() {
    return {
      currentMC: null,
      message: ''
    };
  },
  methods: {
    getMC(id) {
      MCService.get(id)
        .then(response => {
          this.currentMC= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMC() {
      MCService.delete(this.currentMC.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "mission-commanders" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMC() {
      MCService.update(this.currentMC.id, this.currentMC)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMC(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
