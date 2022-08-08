import createGenericSlice from "../../generics/createGenericSlice";

const learningsSlice = createGenericSlice("learnings", "/api/portfolio");

export const Learnings = {
  ...learningsSlice.actions,
};

export default learningsSlice.reducers;
