import { SET_APPLICANT_LIST, SET_APPLICANT_DETAIL } from './mutation-types'

export default {
    /**
     * Fetch Applicant List API
     * @param {Object} storeContext
     * @param {Object} nuxtContext
     * @returns
     */
    fetchPostList({ commit }, { $axios }) {
        return $axios.$get('/api/applicants').then((data) => {
            commit(SET_APPLICANT_LIST, data)
        })
    },
    /**
     * Fetch Applicant Detail with ID , API
     * @param {Object} storeContext
     * @param {Object} nuxtContext
     * @returns
     */
    fetchApplicantDetail({ commit }, { params, $axios }) {
        return $axios
            .$get(`/api/applicants/detail/?id=${params.id}`)
            .then((data) => {
                commit(SET_APPLICANT_DETAIL, data)
            })
    },

    // updateApplicant({ commit }, { applicant, $axios }) {
    //     try {
    //         $axios
    //             .post('/api/applicants/update', applicant)
    //             .then((data) => {
    //                 if (data) {
    //                     this.$router.push({
    //                         name: 'applicantForm-done',
    //                     })
    //                     commit(SET_APPLICANT_DATA, null)
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // },
}
