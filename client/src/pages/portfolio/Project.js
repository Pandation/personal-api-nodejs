import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../../components/Typography/PageTitle";
import { Input, Label, Button } from "@windmill/react-ui";
import SectionTitle from "../../components/Typography/SectionTitle";
import { EditIcon } from "../../icons";


import { Projects } from "../../redux/features/portfolio/projects";

import { projectsSchema } from "../../configs/modelSchemas";

function ProjectPage() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(projectsSchema);

  const updateValues = (language) => {
    return (e) =>
      setFormValues({
        ...formValues,
        [language]: { ...formValues.en, [e.target.name]: e.target.value },
      });
  };

  const deleteItem = (id) => {
    return () => {
      dispatch(Projects.deleteItem(id));
    };
  };
  const save = () => {
    for (const languages in formValues) {
      for (const key in languages) {
        if (languages[key] === "") {
          return;
        }
      }
    }
    dispatch(Projects.create(formValues));
  };

  return (
    <>
      <PageTitle>Project</PageTitle>
      <div>
      <div className="flex flex-col">
            <div className="flex">
              <div className="flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <SectionTitle>Français</SectionTitle>
                <Label>
                  <span>Name</span>
                  <Input
                    name="name"
                    className="mt-1"
                    placeholder="Crazy Party"
                    onChange={updateValues("fr")}
                  />
                </Label>
                <Label>
                  <span>Stacks</span>
                  <Input
                    name="stacks"
                    className="mt-1"
                    placeholder="Stacks"
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
                <Label>
                  <span>Image</span>
                  <Input
                    disabled
                    name="url"
                    className="mt-1"
                    placeholder="Montpellier 34"
                    onChange={updateValues("fr")}
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
                    placeholder="Crazy Party"
                    onChange={updateValues("en")}
                  />
                </Label>
                <Label>
                  <span>Stacks</span>
                  <Input
                    name="stacks"
                    className="mt-1"
                    placeholder="Stacks"
                    onChange={updateValues("en")}
                  />
                </Label>
                <Label>
                  <span>Date</span>
                  <Input
                    name="date"
                    className="mt-1"
                    placeholder="Novembre 2021"
                    onChange={updateValues("en")}
                  />
                </Label>
                <Label>
                  <span>Image</span>
                  <Input
                    disabled
                    name="url"
                    className="mt-1"
                    placeholder="Montpellier 34"
                    onChange={updateValues("en")}
                  />
                </Label>
              </div>
            </div>
            <Button
              className="mb-5 self-end"
              iconLeft={EditIcon}
              onClick={save}
            >
              Ajouter
            </Button>
          </div>
      </div>
    </>
  );
}

export default ProjectPage;
