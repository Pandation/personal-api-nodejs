import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { EditIcon } from "../../icons";

import PageTitle from "../../components/Typography/PageTitle";
import { Input, Label, Button } from "@windmill/react-ui";
import SectionTitle from "../../components/Typography/SectionTitle";

import { Educations } from "../../redux/features/portfolio/educations";

import { educationsSchema } from "../../configs/modelSchemas";

function EducationPage() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(educationsSchema);

  const updateValues = (language) => {
    return (e) =>
      setFormValues({
        ...formValues,
        [language]: { ...formValues.en, [e.target.name]: e.target.value },
      });
  };

  // const deleteItem = (id) => {
  //   return () => {
  //     dispatch(Educations.deleteItem(id));
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
    dispatch(Educations.create(formValues));
  };

  return (
    <>
      <PageTitle>Education</PageTitle>
      <div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <SectionTitle>Français</SectionTitle>
              <Label>
                <span>Title</span>
                <Input
                  name="title"
                  className="mt-1"
                  placeholder="Développeur Web et Web Mobile"
                  onChange={updateValues("fr")}
                />
              </Label>
              <Label>
                <span>School</span>
                <Input
                  name="school"
                  className="mt-1"
                  placeholder="Super School"
                  onChange={updateValues("fr")}
                />
              </Label>

              <Label>
                <span>Lieu</span>
                <Input
                  name="place"
                  className="mt-1"
                  placeholder="Montpellier 34"
                  onChange={updateValues("fr")}
                />
              </Label>
              <Label>
                <span>Date</span>
                <Input
                  name="date"
                  className="mt-1"
                  placeholder="Novembre 2021"
                  onChange={updateValues("fr")}
                />
              </Label>
            </div>
            <div className="flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <SectionTitle>English</SectionTitle>
              <Label>
                <span>Title</span>
                <Input
                  name="title"
                  className="mt-1"
                  placeholder="Développeur Web et Web Mobile"
                  onChange={updateValues("en")}
                />
              </Label>
              <Label>
                <span>School</span>
                <Input
                  name="school"
                  className="mt-1"
                  placeholder="Super School"
                  onChange={updateValues("en")}
                />
              </Label>

              <Label>
                <span>Place</span>
                <Input
                  name="place"
                  className="mt-1"
                  placeholder="Montpellier 34"
                  onChange={updateValues("en")}
                />
              </Label>
              <Label>
                <span>Date</span>
                <Input
                  name="date"
                  className="mt-1"
                  placeholder="November 2021"
                  onChange={updateValues("en")}
                />
              </Label>
            </div>
          </div>
          <Button className="mb-5 self-end" iconLeft={EditIcon} onClick={save}>
            Ajouter
          </Button>
        </div>
      </div>
    </>
  );
}

export default EducationPage;
