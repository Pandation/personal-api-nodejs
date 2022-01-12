import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../../components/Typography/PageTitle";
import { Input, Label, Button } from "@windmill/react-ui";
import SectionTitle from "../../components/Typography/SectionTitle";
import { EditIcon } from "../../icons";

import { Learnings } from "../../redux/features/portfolio/learnings";

import { learningsSchema } from "../../configs/modelSchemas";

function LearningPage() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(learningsSchema);

  const updateValues = (e) => {
    setFormValues({
      [e.target.name]: e.target.value,
    });
  };

  // const deleteItem = (id) => {
  //   return () => {
  //     dispatch(Learnings.deleteItem(id));
  //   };
  // };

  const save = () => {
    dispatch(Learnings.create(formValues));
  };

  return (
    <>
      <PageTitle>Learning</PageTitle>
      <div className="flex flex-col">
        <div className="flex-col">
          <div className="flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <Label>
              <span>Learning</span>
              <Input
                name="name"
                className="mt-1"
                placeholder="TypeScript"
                onChange={updateValues("en")}
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

export default LearningPage;
