const app = Vue.createApp({
    // Has to be data, which is a vue keyword.
    // () Is shorthand for function()
    data() {
        return {
            courseGoal: 'Finish this course!',
        };
    }
});

// Connect created view to section with id: user-goal
app.mount('#user-goal');