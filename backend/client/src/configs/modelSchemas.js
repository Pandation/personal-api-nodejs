//PORTFOLIO

export const experiencesSchema = bothLanguage({
  title: "",
  society: "",
  place: "",
  date: "",
});
export const learningsSchema = {
  name: "",
};
export const educationsSchema = bothLanguage({
  title: "",
  school: "",
  place: "",
  date: "",
});
export const skillsSchema = bothLanguage({
  name: "",
  text: "",
});
export const projectsSchema = {
  ...bothLanguage({
    name: "",
    stacks: [],
    date: "",
  }),
  file: undefined,
  url: "",
};

function bothLanguage(schema) {
  return { en: { ...schema }, fr: { ...schema } };
}

//NAILED IT
export const companiesSchema = {
  name: "",
  address: "",
  email: "",
  contactGender: "0",
  contactLastname: "",
  contactFirstname: "",
};
export const processesSchema = {
  name: "",
};
export const sendingConfigsSchema = {
  company: "",
  process: "",
  status: "",
  customText: "",
  lastMailDate: "",
  nextMailDate: "",
  enabled: true,
};
export const emailTemplatesSchema = {
  name: "",
  subject: "",
  header: "",
  content: "",
  footer: "",
  status: "first",
  process: "",
};
