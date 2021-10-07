import { SET_APPLICANT_DATA, SET_VALIDATE_ERROR } from './mutation-types'
export default {
    /**
     * this is to confirm applicant data before save and push route after confirm
     * @param {*} commit to mutate the applicant data
     * @param { object } applicantData all information of the new applicant
     * @returns void
     */
    validateApplicant({ commit }, { applicantData, $axios }) {
        $axios
            .post('/api/applicants/validate', applicantData)
            .then((data) => {
                if (data) {
                    this.$router.push({
                        path: 'applicantForm/confirmData',
                    })
                    commit(SET_APPLICANT_DATA, applicantData)
                    commit(SET_VALIDATE_ERROR, null)
                }
            })
            .catch((err) => {
                commit(SET_VALIDATE_ERROR, err.response.data)
            })
    },

    /**
     * This is to create applicant and push route to 'done'
     * @param { * } commit
     * @param {object} formData the applicant value to save
     * @returns void
     */
    createApplicant({ commit }, { applicantData, $axios }) {
        try {
            $axios
                .post('/api/applicants/create', applicantData)
                .then((data) => {
                    if (data) {
                        this.$router.push({
                            name: 'applicantForm-done',
                        })
                        commit(SET_APPLICANT_DATA, null)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.error(error)
        }
    },
    /**
     *
     */
    cancelApplicant({ commit }) {
        commit(SET_APPLICANT_DATA, null)
    },
}
