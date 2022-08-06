import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../../components/Typography/PageTitle";
import { Textarea, Input, Label, Button } from "@windmill/react-ui";
import { EditIcon } from "../../icons";

import Table from "../../components/Table";
import SectionTitle from "../../components/Typography/SectionTitle";

import { Skills } from "../../redux/features/portfolio/skills";
import { skillsSchema } from "../../configs/modelSchemas";

function SkillsPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.skills.collection);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(skillsSchema);

  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(Skills.getAll());
  }, [dispatch]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = collection.items.length;

  // pagination change control
  function onPageChangeTable(p) {
    setPageTable(p);
  }
  const updateValues = (language) => {
    return (e) =>
      setFormValues({
        ...formValues,
        [language]: {
          ...formValues[language],
          [e.target.name]: e.target.value,
        },
      });
  };

  const deleteItem = (id) => {
    return () => {
      dispatch(Skills.deleteItem(id));
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
    dispatch(Skills.create(formValues));
  };
  useEffect(() => {
    if (collection.items.length > 0) {
      setDataTable(
        collection.items.slice(
          (pageTable - 1) * resultsPerPage,
          pageTable * resultsPerPage
        )
      );
    }
  }, [pageTable, collection.items]);

  return (
    <>
      <PageTitle>Skills</PageTitle>
      <div>
        <Button
          className="mb-5"
          iconLeft={EditIcon}
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          {isFormOpen ? "Fermer" : "Ajouter"}
        </Button>
        {isFormOpen && (
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
        )}
      </div>
      {collection.fetching && <p>Chargement...</p>}
      {collection.loaded && collection.items.length > 0 && (
        <Table
          columns={[{ name: "Name" }, { name: "Text" }]}
          data={dataTable}
          pagination={{
            totalResults,
            resultsPerPage,
            onPageChangeTable,
          }}
          deleteItem={deleteItem}
          languages={true}
        />
      )}
    </>
  );
}

export default SkillsPage;
