import {StateSchema} from "app/providers/StoreProvider";

export const getLoginState = (state: StateSchema) => state?.loginForm


// export const getUsernameState = (state: StateSchema) => state?.loginForm.username

// export const getPasswordState = (state: StateSchema) => state?.loginForm.password

export const getLoadingState = (state: StateSchema) => state?.loginForm.isLoading

