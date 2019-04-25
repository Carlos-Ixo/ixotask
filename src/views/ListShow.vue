<template>
  <div class="lists-container" @click="check()">
    <div class="list-tasks -shadow" v-for="list in lists" :key="list.id">
      <TaskList :list="list" />
      <!-- <h4 class="title">{{ list.title }}</h4> -->
    </div>
    <div v-if="newList">
      <div @keyup.enter="nameNewList" class="list-tasks add-list -shadow">
        <input
          @keyup.enter="addNewList"
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

<script>
import TaskList from "@/views/TaskList.vue";
import EventService from "@/services/EventService.js";
export default {
  data() {
    return {
      lists: [],
      newList: false,
      newListName: ""
    };
  },
  components: {
    TaskList
  },
  created() {
    EventService.getLists()
      .then(response => {
        //console.log(response.data);
        this.lists = response.data;
      })
      .catch(error => {
        console.log("There was an error", error.response);
      });
  },
  methods: {
    nameNewList() {
      //console.log("nueva lista");
      if (this.newList) {
        this.newList = false;
      } else {
        this.newList = true;
      }
    },
    check() {
      EventService.getLists()
        .then(response => {
          console.log(response.data);
          this.lists = [];
          this.lists = response.data;
        })
        .catch(error => {
          console.log("There was an error en el check", error.response);
        });
    },
    addNewList() {
      //console.log("add nueva lista");
      //console.log(this.newListName);
      EventService.postLists(this.newListName)
        .then(() => {
          EventService.getLists()
            .then(response => {
              //console.log(response.data);
              this.lists = response.data;
            })
            .catch(error => {
              console.log("There was an erroren el add", error.response);
            });
        })
        .catch(error => {
          console.log("There was an error 1", error.response);
        });
    }
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
