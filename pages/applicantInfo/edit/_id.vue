<template>
    <b-container>
        <ValidationObserver ref="observer">
            <b-form @submit.prevent="updateApplicant">
                <b-card class="px-3 mt-5 mx-5">
                    <b-card-title>Personal Information</b-card-title>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Name"
                        :rules="{
                            required: true,
                            max: this.onezerozero,
                        }"
                    >
                        <b-form-group
                            id="input-group-2"
                            label="Your Name:"
                            label-for="name"
                        >
                            <b-form-input
                                id="name"
                                v-model="applicant.name"
                                placeholder="Enter name"
                            ></b-form-input>

                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <!-- <div>
                        <b-img
                            onclick="document.getElementById('getFile').click()"
                            :src="applicant.profilePhoto"
                        ></b-img>
                        <input type="file" id="getFile" style="display: none" />
                    </div> -->

                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Profile Photo"
                        rules="image|size:5120"
                    >
                        <b-form-group
                            label="Profile Photo:"
                            label-for="profilePhoto"
                        >
                            <b-img
                                onclick="document.getElementById('profilePhoto').click()"
                                :src="applicant.comment"
                            ></b-img>
                            <b-form-file
                                id="profilePhoto"
                                placeholder="Choose a file or drop it here..."
                                accept="image/*"
                                style="display: none"
                                v-model="applicant.newProfile"
                                @change="onFileChange"
                            >
                            </b-form-file>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Date Of Birth"
                        rules="required"
                    >
                        <b-form-group label="Date Of Birth:" label-for="dob">
                            <b-form-datepicker
                                id="dob"
                                v-model="applicant.dob"
                                :min="min"
                                :max="max"
                                locale="en"
                            >
                            </b-form-datepicker>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email"
                    >
                        <b-form-group label="Email address:" label-for="email">
                            <b-form-input
                                id="email"
                                v-model="applicant.email"
                                type="email"
                                placeholder="Enter email"
                            >
                            </b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Phone Number"
                        :rules="{
                            required: true,
                            digits: 11,
                            regex: '^(09)\\d{9}$',
                        }"
                    >
                        <b-form-group
                            id="input-group-2"
                            label="Phone number:"
                            label-for="phone_no1"
                        >
                            <b-form-input
                                id="phone_no1"
                                v-model="applicant.phone_no1"
                                placeholder="Enter phone number"
                            >
                            </b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Secondary Phone Number"
                        :rules="{
                            digits: 11,
                            regex: '^(09)\\d{9}$',
                        }"
                    >
                        <b-form-group
                            id="input-group-2"
                            label="Secondary phone number:"
                            label-for="phone_no2"
                        >
                            <b-form-input
                                id="phone_no2"
                                v-model="applicant.phone_no2"
                                placeholder="Enter secondary phone"
                            ></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Current Address"
                        :rules="{
                            required: true,
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="Current Address:"
                            label-for="currentAddress"
                        >
                            <b-form-textarea
                                id="currentAddress"
                                v-model="applicant.currentAddress"
                                placeholder="Enter something..."
                                rows="3"
                                no-resize
                            ></b-form-textarea>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Hometown Address"
                        :rules="{
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="Hometown Address:"
                            label-for="hometownAddress"
                        >
                            <b-form-textarea
                                id="hometownAddress"
                                v-model="applicant.hometownAddress"
                                placeholder="Enter something..."
                                rows="3"
                                no-resize
                            ></b-form-textarea>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <b-card-title>Education Background</b-card-title>
                    <b-card-sub-title class="my-2"
                        >Bachelor Information:</b-card-sub-title
                    >
                    <b-row>
                        <b-col md="4">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Bachelor University"
                                :rules="{
                                    required: true,
                                    max: this.twofivezero,
                                }"
                            >
                                <b-form-group
                                    label="Bachelor University:"
                                    label-for="bachelorUni"
                                >
                                    <b-form-input
                                        id="bachelorUni"
                                        v-model="applicant.bachelorUni"
                                        placeholder="Enter University Name"
                                    ></b-form-input>
                                    <span class="input-invalid-message">
                                        {{ errors[0] }}
                                    </span>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col md="4">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Bachelor Year"
                                :rules="{
                                    max: this.twofivezero,
                                }"
                            >
                                <b-form-group
                                    label="Bachelor Year:"
                                    label-for="bachelorYear"
                                >
                                    <b-form-input
                                        id="bachelorYear"
                                        v-model="applicant.bachelorYear"
                                        placeholder="Enter bachelor year"
                                    ></b-form-input>
                                    <span class="input-invalid-message">
                                        {{ errors[0] }}
                                    </span>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col md="4">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Bachelor Degree"
                                :rules="{
                                    max: this.twofivezero,
                                }"
                            >
                                <b-form-group
                                    label="Bachelor Degree:"
                                    label-for="bachelorDegree"
                                >
                                    <b-form-input
                                        id="bachelorDegree"
                                        v-model="applicant.bachelorDegree"
                                        placeholder="Enter bachelor degree"
                                    ></b-form-input>
                                    <span class="input-invalid-message">
                                        {{ errors[0] }}
                                    </span>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                    </b-row>
                    <b-card-sub-title class="mb-2"
                        >Master Information:</b-card-sub-title
                    >
                    <b-row>
                        <b-col md="4">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Master University"
                                :rules="{
                                    max: this.twofivezero,
                                }"
                            >
                                <b-form-group
                                    label="Master University:"
                                    label-for="masterUni"
                                >
                                    <b-form-input
                                        id="masterUni"
                                        v-model="applicant.masterUni"
                                        placeholder="Enter University Name"
                                    ></b-form-input>
                                    <span class="input-invalid-message">
                                        {{ errors[0] }}
                                    </span>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col md="4">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Master Year"
                                :rules="{
                                    max: this.twofivezero,
                                }"
                            >
                                <b-form-group
                                    label="Master Year:"
                                    label-for="masterYear"
                                >
                                    <b-form-input
                                        id="masterYear"
                                        v-model="applicant.masterYear"
                                        placeholder="Enter master year"
                                    ></b-form-input>
                                    <span class="input-invalid-message">
                                        {{ errors[0] }}
                                    </span>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col md="4">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Master Degree"
                                :rules="{
                                    max: this.twofivezero,
                                }"
                            >
                                <b-form-group
                                    label="Master Degree:"
                                    label-for="masterDegree"
                                >
                                    <b-form-input
                                        id="masterDegree"
                                        v-model="applicant.masterDegree"
                                        placeholder="Enter master degree"
                                    ></b-form-input>
                                    <span class="input-invalid-message">
                                        {{ errors[0] }}
                                    </span>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                    </b-row>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Diploma Name"
                        :rules="{
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="Diploma Name:"
                            label-for="diplomaName"
                        >
                            <b-form-input
                                id="diplomaName"
                                v-model="applicant.diplomaName"
                                placeholder="Enter diploma Name"
                            ></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Certificate"
                        :rules="{
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="Certificate:"
                            label-for="certificate"
                        >
                            <b-form-input
                                id="certificate"
                                v-model="applicant.certificate"
                                placeholder="Enter certificate"
                            ></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>

                    <b-card-sub-title class="mt-1 mb-2"
                        >Programming Skill:</b-card-sub-title
                    >
                    <b-row>
                        <b-col md="6">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Programming Language"
                                :rules="{
                                    max: this.twofivezero,
                                }"
                            >
                                <b-form-group
                                    label="Programming Language:"
                                    label-for="programmingLang"
                                >
                                    <b-form-input
                                        id="programmingLang"
                                        v-model="applicant.programmingLang"
                                        placeholder="Ruby"
                                    ></b-form-input>
                                    <span class="input-invalid-message">
                                        {{ errors[0] }}
                                    </span>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col md="6">
                            <ValidationProvider
                                v-slot="{ errors }"
                                name="Programming Level"
                                :rules="{
                                    max: this.twofivezero,
                                }"
                            >
                                <b-form-group
                                    label="Programming Level:"
                                    label-for="programmingLevel"
                                >
                                    <b-form-input
                                        id="programmingLevel"
                                        v-model="applicant.programmingLevel"
                                        placeholder="C"
                                    ></b-form-input>
                                    <span class="input-invalid-message">
                                        {{ errors[0] }}
                                    </span>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                    </b-row>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="English Skill"
                        :rules="{
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="English Language Skill:"
                            label-for="english"
                        >
                            <b-form-input
                                id="english"
                                v-model="applicant.english"
                                placeholder="Enter english skill"
                            >
                            </b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Japanes skill"
                        :rules="{
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="Japanese Language Skill:"
                            label-for="japanese"
                        >
                            <b-form-input
                                id="japanese"
                                v-model="applicant.japanese"
                                placeholder="Enter Japanese skill"
                            >
                            </b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Other Language"
                        :rules="{
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="Other Language Skill:"
                            label-for="otherLang"
                        >
                            <b-form-input
                                id="otherLang"
                                v-model="applicant.otherLang"
                                placeholder="Enter Other Language skill"
                            ></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>

                    <b-card-title>Experience</b-card-title>
                    <b-form-checkbox id="hasJobExp">
                        Has Job Experience
                    </b-form-checkbox>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Internship Info"
                        :rules="{
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="Internship Info:"
                            label-for="internshipInfo"
                        >
                            <b-form-textarea
                                id="internshipInfo"
                                v-model="applicant.internshipInfo"
                                placeholder="Enter something..."
                                rows="3"
                                no-resize
                            ></b-form-textarea>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Job Experience"
                        :rules="{
                            max: this.twofivezero,
                        }"
                    >
                        <b-form-group
                            label="Job Experience:"
                            label-for="jobExperience"
                        >
                            <b-form-textarea
                                id="jobExperience"
                                v-model="applicant.jobExperience"
                                placeholder="Enter something..."
                                rows="3"
                                no-resize
                            ></b-form-textarea>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ errors }"
                        name="Total Experience"
                        rules="numeric|max:2"
                    >
                        <b-form-group
                            label="Total Experience Year:"
                            label-for="totalExperience"
                        >
                            <b-form-input
                                id="totalExperience"
                                v-model="applicant.totalExperience"
                                type="text"
                                placeholder="Enter Total Experience"
                            ></b-form-input>
                            <span class="input-invalid-message">
                                {{ errors[0] }}
                            </span>
                        </b-form-group>
                    </ValidationProvider>
                    <div class="errorMsg" :v-if="validateError">
                        <div v-for="(err, index) in validateError" :key="index">
                            <p>- {{ index + ' : ' + err[0] }}</p>
                        </div>
                    </div>
                    <b-card-footer class="text-center">
                        <b-button
                            @click="backToList"
                            variant="secondary"
                            class="mr-3"
                            >Back</b-button
                        >
                        <b-button type="submit" variant="success"
                            >Update</b-button
                        >
                    </b-card-footer>
                </b-card>
            </b-form>
        </ValidationObserver>
    </b-container>
</template>

<script src="../../../services/pages/applicantInfo/edit/index.js"></script>
<style src="../../../assets/css/pages/applicantInfo/edit/index.css"></style>
