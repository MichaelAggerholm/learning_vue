const App = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragraphIsVisible: true,
      inputBackgroundColor: ''
    };
  },
  computed: {
    paragraphClasses() {
      // Defined like this, to make sure only the classes user1, and user2 is available.
      return {
        // If user input is user1, apply class user1. same for user2.
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        // If paragraphIsVisible === true, set visible class. if false, set hidden class.
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      // Toggle between paragraphIsVisible true and false on button click.
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});

App.mount("#assignment");
