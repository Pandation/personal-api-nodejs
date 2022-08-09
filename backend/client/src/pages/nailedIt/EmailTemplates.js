import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../../components/Typography/PageTitle";
import Table from "../../components/Table";
import { Input, Label, Button, Textarea, Select } from "@windmill/react-ui";
import { EditIcon } from "../../icons";

import { EmailTemplates } from "../../redux/features/nailedIt/emailTemplates";
import { Config } from "../../redux/features/config";
import { emailTemplatesSchema } from "../../configs/modelSchemas";

function checkData(data) {
  let valid = true;
  for (const key in data) {
    if (data[key] === "") {
      valid = false;
    }
  }
  return valid;
}
function EmailTemplatesPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.emailTemplates.collection);
  const dataLists = useSelector((state) => state.config.dataLists);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    ...emailTemplatesSchema,
    status: "first",
  });

  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(EmailTemplates.getAll());
    dispatch(Config.getSelectsLists());
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
      dispatch(EmailTemplates.deleteItem(id));
    };
  };

  const save = () => {
    if (!checkData(formValues)) {
      return;
    }
    dispatch(EmailTemplates.create(formValues));
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

  useEffect(() => {
    if (dataLists.loaded) {
      setFormValues((s) => ({
        ...s,
        process: dataLists.processesList[0]._id,
      }));
    }
  }, [dataLists]);

  return (
    <>
      <PageTitle>Email Templates</PageTitle>
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
                <Label>
                  <span>Name*</span>
                  <Input name="name" className="mt-1" onChange={updateValues} />
                </Label>
                <Label>
                  <span>Subject*</span>
                  <Input
                    name="subject"
                    className="mt-1"
                    onChange={updateValues}
                  />
                </Label>
                <Label>
                  <span>Header*</span>
                  <Textarea
                    name="header"
                    className="mt-1"
                    onChange={updateValues}
                  />
                </Label>

                <Label>
                  <span>Content</span>
                  <Textarea
                    name="content"
                    className="mt-1"
                    onChange={updateValues}
                  />
                </Label>
                <Label>
                  <span>Footer*</span>
                  <Textarea
                    name="footer"
                    className="mt-1"
                    onChange={updateValues}
                  />
                </Label>
                <Label>
                  <span>Process</span>
                  <Select
                    className="mt-1"
                    value={formValues.process}
                    name="process"
                    onChange={updateValues}
                  >
                    {dataLists.processesList?.map((processItem) => (
                      <option
                        key={"process_" + processItem.name}
                        value={processItem._id}
                      >
                        {processItem.name}
                      </option>
                    ))}
                  </Select>
                </Label>
                <Label>
                  <span>Status</span>
                  <Select
                    className="mt-1"
                    value={formValues.status}
                    name="status"
                    onChange={updateValues}
                  >
                    <option value="first">PREMIER ENVOI</option>
                    <option value="relance">RELANCE</option>
                  </Select>
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
          type="emailTemplates"
          className="whiteSpaceNormal"
          columns={[
            { name: "Name" },
            { name: "Subject" },
            { name: "Header" },
            { name: "Content" },
            { name: "Footer" },
            { name: "Process", subKey: "name" },
            { name: "Status" },
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

export default EmailTemplatesPage;
