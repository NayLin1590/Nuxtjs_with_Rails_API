import { mapGetters } from 'vuex'

export default {
    auth: false,
    middleware({ store, redirect }) {
        if (!store.state.applicantData) {
            return redirect('/applicantForm')
        }
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            applicantData: 'applicantForm/applicantData',
        }),
    },
    created() {
        // if (this.applicantData == null) {
        //     this.$router.push('/applicantForm')
        // }
    },
    methods: {
        /**
         * click cencel button and change route
         * @returns void
         */
        cancelApplicant() {
            this.$router.push('/applicantForm')
        },
        /**
         * if applicant confirm , create new applicant
         * @returns void
         */
        confirmApplicant() {
            const formData = new FormData()
            if (this.applicantData.profilePhoto !== null) {
                formData.append('imgfile', this.applicantData.profilePhoto)
                Object.entries(this.applicantData).forEach(([key, value]) => {
                    formData.append(key, value)
                })
            }
            if (
                this.applicantData.programmingLang &&
                this.applicantData.programmingLevel
            ) {
                formData.append(
                    'programming',
                    this.applicantData.programmingLang +
                        ' : ' +
                        this.applicantData.programmingLevel
                )
            } else {
                formData.append('programming', '')
            }

            formData.append(
                'profilePhoto',
                this.applicantData.profilePhoto.name
            )
            this.$store.dispatch('applicantForm/createApplicant', {
                applicantData: formData,
                $axios: this.$axios,
            })
        },
    },
}
