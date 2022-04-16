const App = Vue.createApp({
  data() {
    return {
      classInput: "",
      user1: false,
      user2: false,
    };
  },
  computed: {
    user1Class() {
        return { user1: this.user1 };
    },
    user2Class() {
        return { user2: this.user2 };
    },
},
  methods: {
    setClass(event) {
      this.classInput = event.target.value;
      if (this.classInput === "user1") {
        this.user1 = true;
      } else if (this.classInput === "user2") {
        this.user2 = true;
      } else {
        this.user1 = false;
        this.user2 = false;
      }
    },
  },
});

App.mount("#assignment");
