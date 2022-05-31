import { configureStore } from "@reduxjs/toolkit";
import SkillSlice from "./SkillSlice";

export default configureStore({
  reducer: {
    skill: SkillSlice,
  },
});
