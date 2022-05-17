const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(value) {
        if(value > 37) {
            const that = this;
            setTimeout(function() {
                that.count = 0;
            }, 1000)
        }
    }
  },
  methods: {
    addOne() {
      return (this.count = this.count + 1);
    },
    addFive() {
      return (this.count = this.count + 15);
    },
    outputResult() {
        if(this.count > 37) {
            return "Too much!";
        } else if(this.count === 37) {
            return "We hit 37!";
        } else {
            return "Not there yet";
        }
    }
  },
});

app.mount("#assignment");
