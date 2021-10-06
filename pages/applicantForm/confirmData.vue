<template>
    <b-container>
        <b-form @submit.prevent="confirmApplicant">
            <b-card class="px-3 mt-5 mx-5">
                <b-card-title>Personal Information</b-card-title>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Name:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.name }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Profile Photo:</span> </b-col>
                    <b-col md="6">
                        <b-img :src="applicantData.preshowImg"></b-img>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Date Of Birth:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.dob }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Email:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.email }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Primary Phone Number:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.phone_no1 }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Secondary Phone Number:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.phone_no2 }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Current Address:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.currentAddress }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Hometown Address</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.hometownAddress }}</strong>
                    </b-col>
                </b-row>
                <hr />

                <b-card-title class="mt-5">Education Background</b-card-title>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Bachelor Information:</span> </b-col>
                    <b-col md="6">
                        <strong
                            >{{ applicantData.bachelorUni }},
                            {{ applicantData.bachelorDegree }},
                            {{ applicantData.bachelorYear }}
                        </strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Master Information:</span> </b-col>
                    <b-col md="6">
                        <strong
                            >{{ applicantData.masterUni }},
                            {{ applicantData.masterDegree }},
                            {{ applicantData.masterYear }}
                        </strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Deploma Information:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.diplomaName }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span> Certificate:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.certificate }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"
                        ><span> Programming Language Skill:</span>
                    </b-col>
                    <b-col md="6">
                        <strong
                            >{{ applicantData.programmingLang }} :
                            {{ applicantData.programmingLevel }}
                        </strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>English Language Skill:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.english }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Japanes Language Skill:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.japanese }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Other Language Skill:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.otherLang }}</strong>
                    </b-col>
                </b-row>
                <hr />

                <b-card-title class="mt-5">Education Background</b-card-title>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Has Job Experience:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.hasJobExp }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Internship Information:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.internshipInfo }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Job Experience:</span> </b-col>
                    <b-col md="6">
                        <strong>{{ applicantData.jobExperience }}</strong>
                    </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                    <b-col md="6"><span>Total Experience Year:</span> </b-col>
                    <b-col md="6">
                        <strong
                            >{{ applicantData.totalExperience }}years</strong
                        >
                    </b-col>
                </b-row>
                <b-card-footer class="text-center">
                    <b-button @click="cancelApplicant" variant="danger"
                        >Cancel</b-button
                    >
                    <b-button type="submit" variant="primary">Confirm</b-button>
                </b-card-footer>
            </b-card>
        </b-form>
    </b-container>
</template>

<script src="../../services/pages/applicantForm/confirm.js"></script>

<style src="../../assets/css/pages/applicantForm/confirm.css"></style>
