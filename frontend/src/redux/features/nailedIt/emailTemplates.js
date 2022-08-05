import createGenericSlice from "../../generics/createGenericSlice";

const emailTemplatesSlice = createGenericSlice("emailTemplates", "/api/nailedIt");

export const EmailTemplates = {
  ...emailTemplatesSlice.actions,
};

export default emailTemplatesSlice.reducers;
