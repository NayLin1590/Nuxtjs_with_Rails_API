import { mapGetters } from 'vuex'
export default {
    async asyncData({ $axios, store }) {
        try {
            await store.dispatch('applicantInfo/fetchPostList', { $axios })
        } catch (error) {
            console.log(error)
        }
    },
    auth: true,
    data() {
        return {
            show: true,
            form: {
                searchParam: '',
            },
            currentPage: 1,
            perPage: 5,
            fields: [
                { key: 'id', label: 'ID', sortable: true },
                { key: 'name', label: 'Name', sortable: true },
                {
                    key: 'phone_no1',
                    label: 'Phone Number',
                    sortable: true,
                },
                {
                    key: 'email',
                    label: 'Email',
                    sortable: true,
                },
                {
                    key: 'bachelorUni',
                    label: 'Bachelor University',
                    sortable: true,
                },
                { key: 'operation', label: 'Operation' },
            ],
            showList: [],
            resultList: [],
            infoModal: {
                id: 'info-modal',
                title: '',
                content: '',
            },
        }
    },
    computed: {
        ...mapGetters({
            applicantList: 'applicantInfo/applicantList',
        }),
        rows() {
            return this.showList.length
        },
    },
    mounted() {
        this.selectAllApplicant()
    },
    methods: {
        /**
         * search form submit and filter applicant list
         */
        onSubmitSearch() {
            this.filterPostList()
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        /**
         * select all applicant from database
         */
        selectAllApplicant() {
            this.$axios.get('/api/applicants').then((res) => {
                this.resultList = res.data
                this.showList = this.resultList
            })
        },
        /**
         * get the value form search input form and filter applicant list
         */
        filterPostList() {
            if (this.form.searchParam === '') {
                this.showList = this.resultList
            } else {
                this.showList = this.resultList.filter((applicant) => {
                    return (
                        applicant.name
                            .toLowerCase()
                            .includes(this.form.searchParam.toLowerCase()) ||
                        applicant.phone_no1.includes(this.form.searchParam) ||
                        applicant.bachelorUni
                            .toLowerCase()
                            .includes(this.form.searchParam.toLowerCase())
                    )
                })
            }
        },
        /**
         * to show data in infobox when click detail btn
         * @param {object} item applicant data
         * @param {number}  index array index
         * @param {Event} button onclick event
         */
        info(item, index, button) {
            this.infoModal.title = `Row index: ${index}`
            this.infoModal.content = JSON.stringify(item, null, 2)
            this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        },
        /**
         * reset title and content when hide info modal
         */
        resetInfoModal() {
            this.infoModal.title = ''
            this.infoModal.content = ''
        },
        /**
         * change edit route when onclick edit btn
         * @param {number} id the applicant id to retrieve applicant data
         */
        edit(id) {
            this.$router.push({
                name: 'applicantInfo-edit-id',
                params: { id },
            })
        },

        /**
         * This is to delete the applicant
         * @param {id} id The applicant id to delete
         * @returns void
         */
        removeApplicant(id) {
            if (confirm('Do you really want to delete?')) {
                this.$axios
                    .delete('/api/applicants/delete?id=' + id)
                    .then((resp) => {
                        if (resp) {
                            // this.showList.splice(index, 1)\
                            this.selectAllApplicant()
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
    },
}
