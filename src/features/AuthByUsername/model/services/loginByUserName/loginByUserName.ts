import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "entities/User";

interface LoginByUserNameProps {
    username: string,
    password: string,
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async ({username, password}, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username, password
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('error')
        }

    }
)
