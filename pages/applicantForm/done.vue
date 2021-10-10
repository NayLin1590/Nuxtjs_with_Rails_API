<template>
    <b-container>
        <h3 class="mt-5">
            Thank You ... For your applicant and submittion .. "GOOD LUCK GUY!"
        </h3>
        <NuxtLink :to="{ name: 'applicantForm' }" class="nav-link">
            submit another one....
        </NuxtLink>
    </b-container>
</template>
<script>
export default {
    auth: false,
    middleware({ store, redirect }) {
        if (!store.state.applicantData) {
            return redirect('/applicantForm')
        }
    },
}
</script>

<style>
</style>
