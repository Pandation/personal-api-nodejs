import createGenericSlice from "../../generics/createGenericSlice";

const companiesSlice = createGenericSlice("companies", "/api/nailedIt");

export const Companies = {
  ...companiesSlice.actions,
};

export default companiesSlice.reducers;
