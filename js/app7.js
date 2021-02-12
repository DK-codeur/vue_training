//class notificationStore
class NotificationStore {
    constructor() {
        this.state = {
            count: 0
        }
    }

    increment() {
        this.state.count++
    }

    decrement() {
        this.state.count--
    }
}

//instance de la class notificationStore
let notification_store = new NotificationStore()



//composant counter
let Counter = {
    data: function() {
        return {
            state: notification_store.state
        }
    },

    computed: {
        count: function () {
            return this.state.count
        }
    },

    template: `<div> {{count}} </div>`
}


// composant Notifications
let Notifications = {

    components: { Counter },
    
    methods: {
        addNotification: function () {
            console.log('clic');
            notification_store.increment;
        }
    },

    template: `
        <div>
            <Counter></Counter>

            <button @click="addNotification"> Notification </button>
        </div>
    `
}


//instance vue
new Vue({
    el: '#app',

    data: { },
    components: {Notifications, Counter}
})