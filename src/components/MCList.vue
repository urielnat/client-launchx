<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(mc, index) in MCs"
          :key="index"
          @click="setActiveMC(mc, index)"
        >
          {{ mc.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMC">
        <h4>Mission Commnader</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMC.name}}
          <br><label><strong>Username:</strong></label> {{ currentMC.username}}
          <br><label><strong>mainStack:</strong></label> {{ currentMC.mainStack}}
        </div>
        <router-link :to="'/MC/' + currentMC.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un mission commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MCService from "../services/MCService";

export default {
  name: "explorer-list",
  data() {
    return {
      tutorials: [],
      MCs: [],
      currentTutorial: null,
      currentMC: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllMCs(){
      MCService.getAll()
        .then(response => {
          this.MCs = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMC(MC, index) {
      this.currentMC= MC;
      this.currentIndex = MC? index : -1;
    }
  },
  mounted() {
    this.getAllMCs();
  }
};
</script>
