import { creatSlice, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AiFillPhone } from "react-icons/ai";
import { MdFormatIndentDecrease } from "react-icons/md";
import Api from "./api";

export const createproject = createAsyncThunk(
  "skils/skill",
  async (formData) => {
    try {
      const response = await axios.post("https://porfolio-tech-savvy.herokuapp.com/api/post/createproject", formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createskill = createAsyncThunk(
    "skils/createskill",
    async (skillData) => {
      try {
        const response = await axios.post("https://porfolio-tech-savvy.herokuapp.com/api/post/createskill", skillData);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
export const getposts = createAsyncThunk(
    "skils/getposts",
    async () => {
      try {
        const response = await axios.get("https://porfolio-tech-savvy.herokuapp.com/api/post/getposts");
        console.log(response.data);
        return response.data;  
      } catch (error) {
        console.log(error);
      }
    }
  );
const SkillSlice = createSlice({
  name: "skill",
  initialState: {
    posts: [],
    message: "",
  },
  reducers: {},
  extraReducers: {
    [createproject.pending]: () => {
      return { message: "Pending" };
    },
    [createproject.fulfilled]: (state, action) => {
      return { ...state, message: action.payload };
    },
    [createproject.rejected]: (state) => {
      return { ...state, message: "failed to retrieve the data" };
    },
    [getposts.pending]: (state) => {
      return { ...state, message: "collecting data" };
    },
    [getposts.fulfilled]: (state, action) => {
      return { ...state, message: "sucessful", posts: action.payload };
    },
    [getposts.rejected]: (state) => {
      return { ...state, message: "failed to retrieve the data" };
    },
  },
});

export const getSkill = (state) => state.skill.skill;
export const getMessage = (state) => state.message.message;
export default SkillSlice.reducer;
