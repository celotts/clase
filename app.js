new Vue({
    el: '#app',

    data() {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: -1,
            price: 8400,

            color: 'f4f4f4',

            showPrices: false,

            value: 0,

            priceWithDay: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 85400 },
                { day: 'Sábado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ]

        }

    },
    computed: {
        title() {
            return `${this.name} - ${this.symbol}`
        },

        convertedValue() {
            if (!this.value) {
                return 0;
            }

            return (this.value / this.price);
        }
    },

    watch: {
        showPrices(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    },

    methods: {
        thoggleShowPrice() {
            this.showPrices = !this.showPrices;

            this.color = this.color.split('').reverse().join('')
        }
    }
})