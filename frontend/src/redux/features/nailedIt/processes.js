import createGenericSlice from "../../generics/createGenericSlice";

const processesSlice = createGenericSlice("processes", "/api/nailedIt");

export const Processes = {
  ...processesSlice.actions,
};

export default processesSlice.reducers;
