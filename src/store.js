import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";
import swal from "sweetalert";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listas: {},
    cargando: true
  },
  mutations: {
    obtenerListas: (state, data) => (
      (state.listas = data), (state.cargando = false)
    )
  },
  actions: {
    obtenerAsync: context => {
      EventService.getLists()
        .then(response => {
          context.commit("obtenerListas", response.data);

          // this.lists = response.data
        })
        .catch(error => {
          console.log("There was an error", error.response);
        });
    },
    addNewList: (context, newListName) => {
      EventService.postLists(newListName)
        .then(() => {
          EventService.getLists()
            .then(response => {
              context.commit("obtenerListas", response.data);
              //this.lists = response.data;
            })
            .catch(error => {
              console.log("There was an erroren el add", error.response);
            });
        })
        .catch(error => {
          console.log("There was an error 1", error.response);
        });
    },
    deleteList: (context, { list }) => {
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
          EventService.delList(list.id)
            .then(() => {
              EventService.getLists()
                .then(response => {
                  context.commit("obtenerListas", response.data);
                })
                .catch(error => {
                  console.log("There was an erroren el add", error.response);
                });
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
});
