const app = Vue.createApp({
    // Has to be data, which is a vue keyword.
    // () Is shorthand for function()
    data() {
        return {
            courseGoal: 'Finish this course!',
            vueLink: 'https://vuejs.org',
            courseGoalA: 'Finish this course!',
            courseGoalB: '<h3>Build amazing vue application!</h3>',
        };
    },
    methods: {
        outputGoalA() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn vue!';
            } else {
                return 'Master vue!';
            }
        },
        outputGoalB() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    },  
});

// Connect created view to section with id: user-goal
// Can only be bound to one html id, but automaticly gets access to all child elemetns of that id.
app.mount('#user-goal');