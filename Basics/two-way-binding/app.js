const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  // Computed methods are better performance wise, when outputting data.
  computed: {
    fullname() {
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Aggerholm';
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount("#events");
