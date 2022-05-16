const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'Jack', name: 'Jack Andersen', phone: '+45 11 12 13 14', email: 'jackson@sol.dk' },
                { id: 'Mads', name: 'Mads Svendsen', phone: '+45 21 22 23 24', email: 'Svendson@sol.dk' },
            ],
        }
    },
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show Details' }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: { id: 'Jack', name: 'Jack Andersen', phone: '+45 11 12 13 14', email: 'jackson@sol.dk' },
        }
    },
    methods: {
        toggleDetails() {
            //console.log(this.detailsAreVisible);
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount("#app");