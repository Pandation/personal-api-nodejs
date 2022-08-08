import createGenericSlice from "../../generics/createGenericSlice";

const educationsSlice = createGenericSlice("educations", "/api/portfolio");

export const Educations = {
  ...educationsSlice.actions,
};

export default educationsSlice.reducers;
