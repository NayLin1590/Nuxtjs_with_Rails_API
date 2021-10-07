export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            show: true,
            y: null,
        }
    },
    methods: {
        /**
         * admin Login
         * @param {*} event onclick event
         */
        async userLogin(event) {
            event.preventDefault()
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
            try {
                await this.$auth.loginWith('local', {
                    data: this.form,
                })
                this.$router.push({
                    name: 'applicantInfo',
                })
            } catch (err) {
                console.error(err)
            }
        },
    },
}
