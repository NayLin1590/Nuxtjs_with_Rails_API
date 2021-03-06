import {
    extend,
    ValidationProvider,
    ValidationObserver,
    setInteractionMode,
} from 'vee-validate'
import {
    required,
    email,
    image,
    digits,
    regex,
    numeric,
    max,
    size,
} from 'vee-validate/dist/rules'
import { mapGetters } from 'vuex'
import constants from '../../../constants'
setInteractionMode('eager')
extend('required', {
    ...required,
    message: '{_field_} can not be empty',
})
extend('numeric', {
    ...numeric,
    required: '{_field_} must be number',
})
extend('email', {
    ...email,
    message: 'Your email name is invalid',
})
extend('image', {
    ...image,
    message: 'please select img file',
})
extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ',
})
extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
})
extend('size', {
    ...size,
    message: `file size is grater than {size} kb`,
})
extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match 09*********',
})
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },

    auth: false,
    data() {
        return {
            applicant: {
                name: '',
                profilePhoto: null,
                dob: '',
                phone_no1: '',
                phone_no2: '',
                email: '',
                currentAddress: '',
                hometownAddress: '',
                bachelorUni: '',
                bachelorYear: '',
                bachelorDegree: '',
                masterUni: '',
                masterYear: '',
                masterDegree: '',
                diplomaName: '',
                certificate: '',
                programmingLang: '',
                programmingLevel: '',
                english: '',
                japanese: '',
                otherLang: '',
                internshipInfo: '',
                jobExperience: '',
                totalExperience: '',
                hasJobExp: false,
                preshowImg: null,
            },
            min: '1990-01-01',
            max: new Date(),
            onezerozero: constants.ONEZEROZERO,
            twofivezero: constants.TWOFIVEZERO,
        }
    },
    computed: {
        ...mapGetters({
            validateError: 'applicantForm/validateError',
        }),
        ...mapGetters({
            applicantData: 'applicantForm/applicantData',
        }),
    },
    created() {
        if (this.applicantData) {
            this.applicant = this.applicantData
            this.$store.dispatch('applicantForm/cancelApplicant')
        }
    },
    mounted() {},
    methods: {
        /**
         * to validate applicant data and change confirm route
         * @returns void
         */
        async submitApplicant() {
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                this.$store.dispatch('applicantForm/validateApplicant', {
                    applicantData: this.applicant,
                    $axios: this.$axios,
                })
            } else {
                alert("Please Fix  'errors' first! ")
            }
        },
        /**
         * to setup file data to applicant arrayy
         * @param {*} e onchange event
         */
        onFileChange(e) {
            if (e.target.files[0]) {
                const file = e.target.files[0]
                this.applicant.preshowImg = URL.createObjectURL(file)
            }
        },
    },
}
