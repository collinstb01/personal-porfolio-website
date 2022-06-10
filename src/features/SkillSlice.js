import {creatSlice, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { AiFillPhone } from "react-icons/ai"
import Api from "./api"

export const FetchSkills =  createAsyncThunk(
    "skils/skill",
    async ({message}) => {
        const response = await axios.get("http://localhost:1337/api/skills")
        return response.data
    }
)

export const FetchProjects = createAsyncThunk(
    "projects/project",
    async () => {
       const response = await axios.get("http://localhost:1337/api/projects?populate=*")
       return response.data
    }
)

const SkillSlice = createSlice({
    name: "skill",
    initialState: {
        skill: [],
        project: [],
        message: ""
    },
    reducers: {

    },
    extraReducers: {
        [FetchSkills.pending]: () => {
          return { message: "Pending"}
        },
        [FetchSkills.fulfilled]: (state, action) => {
            return {...state, message: "sucessful", skill: action.payload }
        },
        [FetchSkills.rejected]: (state) => {
            return {...state, message: "failed to retrieve the data"}
        },
        [FetchProjects.pending] : (state) => {
            return {...state, message: "collecting data" }
        },
        [FetchProjects.fulfilled]: (state, action) => {
            return {...state, message: "sucessful", project: action.payload }
        },
        [FetchProjects.rejected]: (state) => {
            return {...state, message: "failed to retrieve the data"}
        },
    }
})

export const getSkill = (state) => state.skill.skill
export const getMessage = (state) => state.message.message
export default SkillSlice.reducer