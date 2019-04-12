<template>
  <div @click="check">
    <h1>
      <BaseIcon name="copy"/>
      {{ list.name }}
    </h1>
    <div>
      <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
    </div>

    <p></p>
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
      tasks: this.list.tasks
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

<style></style>
