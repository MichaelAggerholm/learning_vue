const app = Vue.createApp({
  data() {
    return {
      output: "",
      outputOnEnter: "",
    };
  },
  methods: {
    clickAlert() {
      alert("Alert!");
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    confirmOutput(event) {
      this.outputOnEnter = this.output;
    },
  },
});

app.mount("#assignment");
