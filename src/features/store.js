import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./BlogSlice";
import SkillSlice from "./SkillSlice";

export default configureStore({
  reducer: {
    skill: SkillSlice,
    blog: BlogSlice
  },
});
