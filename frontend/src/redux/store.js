import { configureStore } from "@reduxjs/toolkit";
import experiencesReducer from "./features/portfolio/experiences";
import skillsReducer from "./features/portfolio/skills";
import projectsReducer from "./features/portfolio/projects";
import learningsReducer from "./features/portfolio/learnings";
import educationsReducer from "./features/portfolio/educations";
import companiesReducer from "./features/nailedIt/companies";
import sendingConfigsReducer from "./features/nailedIt/sendingConfigs";
import processesReducer from "./features/nailedIt/processes";
import emailTemplatesReducer from "./features/nailedIt/emailTemplates";
import configReducer from "./features/config";
// import testReducer from "./features/portfolio/test";

export default configureStore({
  reducer: {
    config: configReducer,
    experiences: experiencesReducer,
    learnings: learningsReducer,
    skills: skillsReducer,
    projects: projectsReducer,
    educations: educationsReducer,
    companies: companiesReducer,
    sendingConfigs: sendingConfigsReducer,
    processes: processesReducer,
    emailTemplates: emailTemplatesReducer,
    // test : testReducer
  },
});
