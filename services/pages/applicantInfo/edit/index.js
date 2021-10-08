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
import constants from '../../../../constants'

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
                newProfile: null,
            },
            dob: '',
            editApplicantData: null,
            min: '1990-01-01',
            max: new Date(),
            onezerozero: constants.ONEZEROZERO,
            twofivezero: constants.TWOFIVEZERO,
        }
    },
    beforeCreate() {
        this.$axios
            .get(`/api/applicants/detail?id=${this.$route.params.id}`)
            .then((applicantData) => {
                this.dob = applicantData.data.dob
                this.applicant = applicantData.data.applicant
            })
            .catch((err) => {
                if (err) {
                    this.applicant = null
                }
            })
    },
    computed: {
        ...mapGetters({
            validateError: 'applicantForm/validateError',
        }),
    },
    created() {},
    mounted() {},
    methods: {
        /**
         * to edit applicant data and update function
         * @returns void
         */
        async updateApplicant() {
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                const formData = new FormData()
                if (this.applicant.newProfile != null) {
                    formData.append('imgfile', this.applicant.newProfile)
                    Object.entries(this.applicant).forEach(([key, value]) => {
                        formData.append(key, value)
                    })
                    formData.append(
                        'profilePhoto',
                        this.applicant.newProfile.name
                    )
                } else {
                    Object.entries(this.applicant).forEach(([key, value]) => {
                        formData.append(key, value)
                    })
                }
                if (
                    this.applicant.programmingLang &&
                    this.applicant.programmingLevel
                ) {
                    formData.append(
                        'programming',
                        this.applicant.programmingLang +
                            ' : ' +
                            this.applicant.programmingLevel
                    )
                } else {
                    formData.append('programming', '')
                }

                this.$axios
                    .patch('/api/applicants/edit', formData)
                    .then((data) => {
                        if (data) {
                            alert('update successfully!')
                            this.$router.push({
                                name: 'applicantInfo-detail-id',
                                params: { id: this.applicant.id },
                            })
                        }
                    })
                    .catch((err) => {
                        console.log(err)
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
                this.applicant.comment = URL.createObjectURL(file)
            }
        },
        /**
         * back fuction / change parent route
         */
        backToList() {
            this.$router.push({
                name: 'applicantInfo',
            })
        },
    },
}
