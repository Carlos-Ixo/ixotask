import Vue from "vue";
import Router from "vue-router"; //Include the Vue Router Library
import ListShow from "./views/ListShow.vue";
import TaskShow from "./views/TaskShow.vue";
import FileNotFound from "./views/FileNotFound.vue";

Vue.use(Router); // Use the Router

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "list-show",
      component: ListShow
    },
    {
      path: "/lists/:list/tasks/:id",
      name: "task-show",
      component: TaskShow,
      props: true
    },
    {
      path: "*",
      component: FileNotFound
    }

    // {
    //   path: "/create",
    //   name: "event-create",
    //   component: EventCreate
    // },
    // {
    //   path: "/user/:username",
    //   name: "user",
    //   component: User,
    //   props: true
    // }
  ]
});
