<template>
  <div>
    <template v-if="this.$store.state.cargando">
      <div>Cargando listas</div>
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </template>
    <template v-else>
      <div class="lists-container">
        <div class="list-tasks -shadow" v-for="list in listas" :key="list.id">
          <TaskList :list="list" />
          <!-- <h4 class="title">{{ list.title }}</h4> -->
        </div>
        <div v-if="newList">
          <div @keyup.enter="nameNewList" class="list-tasks add-list -shadow">
            <input
              @keyup.enter="addNewList(newListName)"
              name="new-list-name"
              type="text"
              v-model="newListName"
            />
          </div>
        </div>
        <div v-else>
          <div @click="nameNewList" class="list-tasks add-list -shadow">
            <BaseIcon id="new-list-icon" name="plus" width="50" height="50"
              >Nueva Lista</BaseIcon
            >
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import TaskList from "@/views/TaskList.vue";
// import EventService from "@/services/EventService.js";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      // lists: [],
      newList: false,
      newListName: ""
    };
  },
  components: {
    TaskList
  },
  mounted() {
    this.$store.dispatch("obtenerAsync");
  },
  computed: { ...mapState(["listas"]) },
  methods: {
    nameNewList() {
      //console.log("nueva lista");
      if (this.newList) {
        this.newList = false;
        this.newListName = "";
      } else {
        this.newList = true;
        this.newListName = "";
      }
    },
    ...mapActions(["addNewList"])
  }
};
</script>

<style scoped>
.lists-container {
  display: inline-flex;
}
.list-tasks,
.add-list {
  padding: 20px;
  margin-right: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  min-width: 350px;
}
.add-list {
  text-align: center;
}
.add-list:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
