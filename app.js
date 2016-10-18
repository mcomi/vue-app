new Vue({

    // Este es el target id 'events' en el template
    el: '#events',

    // Aqui se declaran los datos de la aplicacion
    data: {
        event: {
            name: '',
            description: '',
            date: ''
        },
        events: []
    },

    // Cuando la aplicacion carga aqui se puede declarar lo que queremos realizar 
    created: function () {
        // Inicializo con algunos datos
        this.fetchEvents();
    },

    // Se declaran nuestras funciones que queremos ocupar
    methods: {

        // Este metodo carga algunos datos al inicializar la app
        fetchEvents: function () {
            var events = [{
                id: 1,
                name: 'TIFF',
                description: 'Toronto International Film Festival',
                date: '2015-09-10'
            }, {
                id: 2,
                name: 'The Martian Premiere',
                description: 'The Martian comes to theatres.',
                date: '2015-10-02'
            }, {
                id: 3,
                name: 'SXSW',
                description: 'Music, film and interactive festival in Austin, TX.',
                date: '2016-03-11'
            }];
            // $set is a convenience method provided by Vue that is similar to pushing
            // data onto an array
            this.events = events;
        },

        // Adds an event to the existing events array
        addEvent: function () {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = {
                    name: '',
                    description: '',
                    date: ''
                };
            }
        },

        deleteEvent: function (index) {
            if (confirm("¿Seguro quieres elminar?")) {
                // $remove is a Vue convenience method similar to splice
                this.events.splice(index,1);
            }
        }
    }
});