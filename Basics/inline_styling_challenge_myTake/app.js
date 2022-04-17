const App = Vue.createApp({
  data() {
    return {
      classInput: "",
      user1: false,
      user2: false,
      buttonActive: false,
      hidden: false,
      visible: false,
      color: "",
    };
  },
  computed: {
    user1Class() {
      return { user1: this.user1 };
    },
    user2Class() {
      return { user2: this.user2 };
    },
    hiddenClass() {
      return { hidden: this.hidden };
    },
    visibleClass() {
      return { visible: this.visible };
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
    buttonSelected() {
      this.buttonActive = !this.buttonActive;
      if (this.buttonActive) {
        this.visible = true;
        this.hidden = false;
      } else if (!this.buttonActive) {
        this.visible = false;
        this.hidden = true;
      }
    },
    setBackground(event) {
      if (event != "") {
        // her burde laves noget andet, eller en bedre løsning.. 
        if (this.color.length >= 5) {
          this.color = "";
        }
        console.log("background-color");
        this.color += event.data;
        console.log("#" + this.color);
      }
    },
  },
});

App.mount("#assignment");
