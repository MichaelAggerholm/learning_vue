const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      isDisplayNone: false,
      displayNoneClass: "displayNone",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.mount("#assignment");
