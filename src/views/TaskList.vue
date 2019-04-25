<template>
  <div>
    <div class="delete-list" @click="deleteList({ list })" id="trash">
      <BaseIcon name="trash" width="20" height="20"></BaseIcon>
    </div>
    <h1>
      <BaseIcon class="refresh-logo" name="refresh-cw"/>
      {{ list.name }}
    </h1>
    <div>
      <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
    </div>

    <div v-if="newTask">
      <div class="-shadow">
        <input name="new-task-name" type="text" v-model="newTaskName">
      </div>
    </div>
    <div v-else>
      <div class="-shadow">
        <BaseIcon id="new-task-icon" name="plus" width="30" height="30">Nueva Tarea</BaseIcon>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";
import EventService from "@/services/EventService.js";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    list: Object
  },
  data() {
    return {
      tasks: this.list.tasks,
      newTask: false,
      newTaskName: "",
      idList: ""
    };
  },
  mounted() {
    this.idlist = this.list.id;
    console.log(this.idlist);
  },
  components: {
    TaskCard
  },
  methods: {
    // deleteList(id) {
    //   console.log(id);
    // }
    ...mapActions(["deleteList"])
  }
};
</script>

<style>
h1 {
  color: #35495d;
  font-size: 2em;
}
.refresh-logo,
#new-task-icon {
  color: #35495d;
}
#trash {
  float: right;
}
.listDeleted {
  display: none;
}
</style>
