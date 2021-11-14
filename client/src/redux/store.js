import { configureStore } from "@reduxjs/toolkit";
import experiencesReducer from "./features/portfolio/experiences";
import skillsReducer from "./features/portfolio/skills";
import projectsReducer from "./features/portfolio/projects";
import learningsReducer from "./features/portfolio/learnings";
import educationsReducer from "./features/portfolio/educations";
import testReducer from "./features/portfolio/test";

export default configureStore({
  reducer: {
    experiences: experiencesReducer,
    learnings: learningsReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    educations: educationsReducer,
    // test : testReducer
  }
});
