<template>
  <div :class="{ listDeleted: isDeleted }" @click="check">
    <div class="delete-list" @click="deleteList()" id="trash">
      <BaseIcon name="trash" width="20" height="20"></BaseIcon>
    </div>
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
import EventService from "@/services/EventService.js";
import swal from "sweetalert";

export default {
  props: {
    list: Object
  },
  data() {
    return {
      tasks: this.list.tasks,
      newTask: false,
      newTaskName: "",
      isDeleted: false
    };
  },
  components: {
    TaskCard
  },
  methods: {
    check() {
      this.tasks = this.list.tasks;
      console.log("lista actualizada");
    },
    deleteList() {
      //console.log(this.list.id);
      swal({
        title: "Estas seguro que deseas borrar la lista?",
        text:
          "Todas las tareas programadas en la lista seran borradas tambien!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          EventService.delList(this.list.id)
            .then(() => {
              this.isDeleted = true;
            })
            .catch(error => {
              console.log("There was an error en el check", error.response);
            });
          swal("Poof! Tu lista a sido borrada!", {
            icon: "success"
          });
        } else {
          swal("Tu lista esta a salvo!");
        }
      });
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
#trash {
  float: right;
}
.listDeleted {
  display: none;
}
</style>
