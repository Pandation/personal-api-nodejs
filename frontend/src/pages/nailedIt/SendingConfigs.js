import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Textarea, Label, Button, Select, Input } from "@windmill/react-ui";
import { EditIcon } from "../../icons";

import PageTitle from "../../components/Typography/PageTitle";
import Table from "../../components/Table";

import { SendingConfigs } from "../../redux/features/nailedIt/sendingConfigs";
import { Config } from "../../redux/features/config";
import { sendingConfigsSchema } from "../../configs/modelSchemas";

function SendingConfigsPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.sendingConfigs.collection);
  const dataLists = useSelector((state) => state.config.dataLists);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    ...sendingConfigsSchema,
    enabled: true,
    status: "first",
  });

  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(SendingConfigs.getAll());
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
      dispatch(SendingConfigs.deleteItem(id));
    };
  };

  const save = () => {
    dispatch(SendingConfigs.create(formValues));
  };

  const handleCheckboxChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.checked,
    });
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
      console.log(dataLists.companiesList);
      setFormValues(s => ({
        ...s,
        company: dataLists.companiesList?.[0]._id,
        process: dataLists.processesList?.[0]._id,
      }));
    }
  }, [dataLists]);

  return (
    <>
      <PageTitle>Sending Configurations</PageTitle>
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
            {!collection.lists.error && (
              <>
                <div>
                  <div className="px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <Label>
                      <span>Company</span>
                      <Select
                        className="mt-1"
                        name="company"
                        value={formValues.company}
                        onChange={updateValues}
                      >
                        {dataLists.companiesList?.map((companyItem) => (
                          <option
                            key={"company_" + companyItem.name}
                            value={companyItem._id}
                          >
                            {companyItem.name}
                          </option>
                        ))}
                      </Select>
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
                        name="company"
                        onChange={updateValues}
                      >
                        <option value="first">PREMIER ENVOI</option>
                        <option value="relance">RELANCE</option>
                      </Select>
                    </Label>
                    <Label>
                      <span>Custom Text</span>
                      <Textarea
                        className="mt-1"
                        rows="3"
                        name="customText"
                        onChange={updateValues}
                        placeholder="Enter some long form content."
                      />
                    </Label>
                    <Label className="mt-3" check>
                      <Input
                        type="checkbox"
                        name="enabled"
                        checked={formValues.enabled}
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-2">
                        {formValues.enabled ? "Activé" : "Désactivé"}
                      </span>
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
              </>
            )}
          </div>
        )}
      </div>
      {collection.fetching && <p>Chargement...</p>}
      {collection.loaded && collection.items.length > 0 && (
        <Table
          columns={[
            { name: "Company", subKey: "name" },
            { name: "Process", subKey: "name" },
            { name: "Status" },
            { name: "Custom Text", key: "customText" },
            { name: "Last Sending", key: "lastMailDate" },
            { name: "Next Sending", key: "nextMailDate" },
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

export default SendingConfigsPage;
