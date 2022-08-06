import React, { useState } from "react";
import { useDispatch } from "react-redux";

import PageTitle from "../../components/Typography/PageTitle";
import { Input, Label, Textarea, Button } from "@windmill/react-ui";
import SectionTitle from "../../components/Typography/SectionTitle";
import { EditIcon } from "../../icons";

import { Skills } from "../../redux/features/portfolio/skills";

import { skillsSchema } from "../../configs/modelSchemas";

function SkillPage() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(skillsSchema);

  const updateValues = (language) => {
    return (e) =>
      setFormValues({
        ...formValues,
        [language]: { ...formValues.en, [e.target.name]: e.target.value },
      });
  };

  // const deleteItem = (id) => {
  //   return () => {
  //     dispatch(Skills.deleteItem(id));
  //   };
  // };
  const save = () => {
    for (const languages in formValues) {
      for (const key in languages) {
        if (languages[key] === "") {
          return;
        }
      }
    }
    dispatch(Skills.create(formValues));
  };

  return (
    <>
      <PageTitle>Skill</PageTitle>
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <SectionTitle>Français</SectionTitle>
            <Label>
              <span>Nom</span>
              <Input
                name="name"
                className="mt-1"
                placeholder="JavaScript"
                onChange={updateValues("fr")}
              />
            </Label>
            <Label>
              <span>Texte</span>
              <Textarea
                name="text"
                className="mt-1"
                rows="3"
                placeholder="..."
              />
            </Label>
          </div>
          <div className="flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <SectionTitle>English</SectionTitle>
            <Label>
              <span>Name</span>
              <Input
                name="name"
                className="mt-1"
                placeholder="JavaScript"
                onChange={updateValues("en")}
              />
            </Label>
            <Label>
              <span>Text</span>
              <Textarea
                name="text"
                className="mt-1"
                rows="3"
                placeholder="..."
              />
            </Label>
          </div>
        </div>
        <Button className="mb-5 self-end" iconLeft={EditIcon} onClick={save}>
          Ajouter
        </Button>
      </div>
    </>
  );
}

export default SkillPage;
