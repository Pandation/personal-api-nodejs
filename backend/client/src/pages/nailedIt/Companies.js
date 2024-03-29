import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "../../components/Typography/PageTitle";
import Table from "../../components/Table";
import { Input, Label, Button, Select } from "@windmill/react-ui";
import { EditIcon } from "../../icons";

import { Companies } from "../../redux/features/nailedIt/companies";
import { companiesSchema } from "../../configs/modelSchemas";

function CompaniesPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.companies.collection);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(companiesSchema);

  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(Companies.getAll());
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
      dispatch(Companies.deleteItem(id));
    };
  };

  const save = () => {
    dispatch(Companies.create(formValues));
  };

  //populate table data when mounted and page changing
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
      <PageTitle>Companies</PageTitle>
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
                  <span>Name</span>
                  <Input name="name" className="mt-1" onChange={updateValues} />
                </Label>
                <Label>
                  <span>Address</span>
                  <Input
                    name="address"
                    className="mt-1"
                    onChange={updateValues}
                  />
                </Label>

                <Label>
                  <span>Email</span>
                  <Input
                    name="email"
                    className="mt-1"
                    type="email"
                    onChange={updateValues}
                  />
                </Label>
                <Label>
                  <span>Contact Gender</span>
                  <Select
                    className="mt-1"
                    name="contactGender"
                    onChange={updateValues}
                  >
                    {["none", "female", "male"].map((gender, i) => (
                      <option key={"gender_" + gender} value={i}>
                        {gender.toUpperCase()}
                      </option>
                    ))}
                  </Select>
                </Label>
                <Label>
                  <span>Contact Firstname</span>
                  <Input
                    name="contactFirstname"
                    className="mt-1"
                    onChange={updateValues}
                  />
                </Label>
                <Label>
                  <span>Contact Lastname</span>
                  <Input
                    name="contactLastname"
                    className="mt-1"
                    onChange={updateValues}
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
          service="ni"
          type="companies"
          columns={[
            { name: "Name" },
            { name: "Address" },
            { name: "Email" },
            { name: "Contact Gender", key: "contactGender" },
            {
              name: "Contact Name",
              type: "concat",
              keys: ["contactFirstname", "contactLastname"],
            },
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

export default CompaniesPage;
