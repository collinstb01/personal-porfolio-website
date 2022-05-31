import {creatSlice, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { AiFillPhone } from "react-icons/ai"
import Api from "./api"

export const FetchSkills =  createAsyncThunk(
    "skils/skill",
    async ({message}) => {
        const response = await axios.get("http://localhost:1337/api/skills")
        message = "hello"
        return {data: response.data, message: message}
    }
)

const SkillSlice = createSlice({
    name: "skill",
    initialState: {
        skill: [],
        message: ""
    },
    reducers: {

    },
    extraReducers: {
        [FetchSkills.pending]: () => {
          return { message: "Pending"}
        },
        [FetchSkills.fulfilled]: (state, action) => {
            return {...state, message: action.payload.message, skill: action.payload.data }
        },
        [FetchSkills.rejected]: (state) => {
            return {...state, message: "failed to retrieve the data"}
        }
    }
})

export const getSkill = (state) => state.skill.skill
export const getMessage = (state) => state.message.message
export default SkillSlice.reducer