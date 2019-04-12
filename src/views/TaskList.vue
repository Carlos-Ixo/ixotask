<template>
  <div @click="check">
    <h1>
      <BaseIcon class="refresh-logo" name="refresh-cw" />
      {{ list.name }}
    </h1>
    <div>
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>

    <div v-if="newTask">
      <div class="-shadow">
        <input name="new-task-name" type="text" v-model="newTaskName" />
      </div>
    </div>
    <div v-else>
      <div class="-shadow">
        <BaseIcon id="new-task-icon" name="plus" width="30" height="30"
          >Nueva Tarea</BaseIcon
        >
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";
//import EventService from "@/services/EventService.js";
export default {
  props: {
    list: Object
  },
  data() {
    return {
      tasks: this.list.tasks,
      newTask: false,
      newTaskName: ""
    };
  },
  components: {
    TaskCard
  },
  methods: {
    check() {
      this.tasks = this.list.tasks;
      console.log("lista actualizada");
    }
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
</style>
