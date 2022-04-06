const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name1: "",
      name2: "",
      confirmedFullname: "",
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    increaseMultiple(num) {
      this.counter = this.counter + num;
    },
    subtract() {
      this.counter--;
    },
    subtractMultiple(num) {
      this.counter = this.counter - num;
    },
    // event parameter is provided by the browser, so no need to set it in the html function call.
    setName(event) {
      this.name1 = event.target.value;
    },
    setNameWithLastname(event, lastname) {
      this.name2 = event.target.value + " " + lastname;
    },
    confirmFullname() {
      this.confirmedFullname = this.name2;
    },
    submitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
