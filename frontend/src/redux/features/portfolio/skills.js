import createGenericSlice from "../../generics/createGenericSlice";

const skillsSlice = createGenericSlice("skills", "/api/portfolio");

export const Skills = {
  ...skillsSlice.actions,
};

export default skillsSlice.reducers;
