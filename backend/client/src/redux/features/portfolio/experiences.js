import createGenericSlice from "../../generics/createGenericSlice";

const experiencesSlice = createGenericSlice("experiences", "/api/portfolio");

export const Experiences = {
  ...experiencesSlice.actions,
};

export default experiencesSlice.reducers;
