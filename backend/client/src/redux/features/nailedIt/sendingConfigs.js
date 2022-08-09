import createGenericSlice from "../../generics/createGenericSlice";

const sendingConfigsSlice = createGenericSlice("sendingConfigs", "/api/nailedIt");

export const SendingConfigs = {
  ...sendingConfigsSlice.actions,
};

export default sendingConfigsSlice.reducers;
