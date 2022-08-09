import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../../components/Typography/PageTitle";
import Table from "../../components/Table";
import { Input, Label, Button } from "@windmill/react-ui";
import { EditIcon } from "../../icons";

import { Learnings } from "../../redux/features/portfolio/learnings";

import { learningsSchema } from "../../configs/modelSchemas";

function LearningsPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.learnings.collection);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(learningsSchema);

  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(Learnings.getAll());
  }, [dispatch]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = collection.items.length;

  // pagination change control
  function onPageChangeTable(p) {
    setPageTable(p);
  }
  const updateValues = () => {
    return (e) =>
      setFormValues({
        [e.target.name]: e.target.value,
      });
  };

  const deleteItem = (id) => {
    return () => {
      dispatch(Learnings.deleteItem(id));
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
    dispatch(Learnings.create(formValues));
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
      <PageTitle>Learnings</PageTitle>
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
          service="pf"
          type="learnings"
          columns={[{ name: "Name" }]}
          data={dataTable}
          pagination={{
            totalResults,
            resultsPerPage,
            onPageChangeTable,
          }}
          deleteItem={deleteItem}
        />
      )}
    </>
  );
}

export default LearningsPage;
