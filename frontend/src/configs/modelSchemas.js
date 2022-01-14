//PORTFOLIO

export const experiencesSchema = bothLanguage({
  jobTitle: "",
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
