const App = Vue.createApp({
  data() {
    return {
      inputClass: "",
      buttonActive: false,
      hidden: false,
      visible: false,
      color: "",
    };
  },
  computed: {
    hiddenClass() {
      return { hidden: this.hidden };
    },
    visibleClass() {
      return { visible: this.visible };
    },
  },
  methods: {
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
