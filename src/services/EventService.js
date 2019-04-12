import axios from "axios";

const apiClient = axios.create({
  baseURL: ` https://ixotask-api.herokuapp.com`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getLists() {
    return apiClient.get("/lists");
  },
  getTask(list_id, task_id) {
    return apiClient.get("/lists/" + list_id + "/tasks/" + task_id);
  },
  postLists(list) {
    return apiClient.post("/lists", { name: list });
  }
};
