import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../../components/Typography/PageTitle";
import Table from "../../components/Table";
import { Input, Label, Button } from "@windmill/react-ui";
import { EditIcon } from "../../icons";
import SectionTitle from "../../components/Typography/SectionTitle";

import { Processes } from "../../redux/features/nailedIt/processes";
import { processesSchema } from "../../configs/modelSchemas";

function checkData(data) {
  let valid = true;
  for (const key in data) {
    if (data[key] === "") {
      valid = false;
    }
  }
  return valid;
}
function ProcessesPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.processes.collection);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(processesSchema);

  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(Processes.getAll());
  }, [dispatch]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = collection.items.length;

  // pagination change control
  function onPageChangeTable(p) {
    setPageTable(p);
  }

  const updateValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const deleteItem = (id) => {
    return () => {
      dispatch(Processes.deleteItem(id));
    };
  };

  const save = () => {
    if (!checkData(formValues)) {
      return;
    }
    dispatch(Processes.create(formValues));
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
      <PageTitle>Processes</PageTitle>
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
            <div>
              <div className="px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <SectionTitle>Français</SectionTitle>
                <Label>
                  <span>Name</span>
                  <Input name="name" className="mt-1" onChange={updateValues} />
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
        service="ni"
        type="processes"
          columns={[
            { name: "Name" },
          ]}
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

export default ProcessesPage;
