<template>
    <UModal v-model="isOpen">
        <h2 class="pl-10 pt-5">Create your account</h2>

        <UForm :schema="registerSchema" :state="state" class="space-y-4 p-5" method="post">

            <UFormGroup label="Username" @submit="onSubmit">
                <UInput v-model="state.username" placeholder="Username" required />
            </UFormGroup>

            <UFormGroup label="Email" name="email" required>
                <UInput v-model="state.email" placeholder="Email" required />
            </UFormGroup>

            <UFormGroup label="Password" name="password" required>
                <UInput v-model="state.password" placeholder="Password" type="password" required />
            </UFormGroup>

            <div class="mt-1">
                <small>Already have an account? <a href="login.html">Login</a></small>
            </div>

            <div class="mt-1">
                <small>By clicking the button Register, you agree to our <a href="#">Terms & Conditions</a></small>
            </div>

            <div class="d-flex justify-between">
                <button type="button" onclick="closeRegisterDialog()">Cancel</button>
                <button type="submit">Register</button>
            </div>
        </UForm>
    </UModal>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import { registerSchema, type Schema } from '~/schemas/registerSchema'

const isOpen = ref(false)

const state = reactive({
  username: undefined,
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
    try {
        const userCredential = await aut.createUserWithEmailAndPassword(state.email, state.password);
        const user = userCredential.user;
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

</script>

<style scoped>

</style>