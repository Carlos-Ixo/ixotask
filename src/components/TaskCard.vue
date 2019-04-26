<template>
  <transition name="fade">
    <div class="event-link">
      <div :class="classObject" class="event-card -shadow">
        <span class="eyebrow">@{{ task.created_at }}</span>
        <h4 class="title">{{ task.title }}</h4>
        <BaseIcon name="clock">Vencimiento {{ task.due_date }}</BaseIcon>
        <div @click.once.stop.prevent="showModal(true)">
          <BaseIcon name="check">Ver</BaseIcon>
        </div>
        <!-- use the modal component, pass in the prop -->
        <Modal v-if="showm" @close="showModal(false)">
          <h3 slot="header">Encabezado {{ this.task.title }}</h3>
        </Modal>
      </div>
    </div>
  </transition>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  props: {
    task: Object
  },
  components: { Modal },
  data() {
    return {
      delayed: false,
      completed: false,
      pending: false,
      showm: false
    };
  },
  computed: {
    classObject: function() {
      return {
        delayed: this.task.status == "delayed",
        completed: this.task.status == "completed",
        pending: this.task.status == "pending"
      };
    }
  },
  methods: {
    showModal(flag) {
      console.log(this.task.id);
      if (flag) {
        this.showm = true;
      } else {
        this.showm = false;
      }
    }
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.delayed {
  border-right: solid #ea5254 4px;
}
.completed {
  border-right: solid #35495d 4px;
}
.pending {
  border-right: solid #6ddad2 4px;
}
.event-card:hover {
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
