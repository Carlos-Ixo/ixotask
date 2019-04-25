<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ task[0].due_date }}</span>
      <h1 class="title">{{ task[0].title }}</h1>
      <h5>Descripcion: {{ task[0].description }}</h5>
      <p>{{ task[0].status }}</p>
      <p>{{ task[0].created_at }}</p>
      <!-- <p>{{ task[0].files_attached[0].file_url }}</p> -->
      <div v-for="file in files" :key="file.file_url">
        <p>{{ file.file_name }}</p>
        <img :src="file.file_url" class="task-img">
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  props: ["id", "list"],
  data() {
    return {
      task: {},
      files: {}
    };
  },
  created() {
    EventService.getTask(this.list, this.id)
      .then(response => {
        console.log(response.data);
        this.task = response.data;
        this.files = this.task[0].files_attached;
      })
      .catch(error => {
        console.log("Error to get task data", error.response);
      });
  }
};
</script>

<style>
.location {
  margin-bottom: 1px;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
.task-img {
  width: 100%;
  max-width: 500px;
}
</style>
