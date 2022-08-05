import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PageTitle from "../../components/Typography/PageTitle";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Input,
  Label,
  Button,
  Pagination,
} from "@windmill/react-ui";
import { EditIcon, TrashIcon } from "../../icons";
import SectionTitle from "../../components/Typography/SectionTitle";

import { Companies } from "../../redux/features/nailedIt/companies";
//TODO: UPDATE
import { companiesSchema } from "../../configs/modelSchemas";

function checkData(data) {
  let valid = true;
  for (const key in data) {
    if (data[key] === "") {
      valid = false;
    }
  }
  return valid;
}
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
    if(!checkData(formValues)) {
        return;
    }
    dispatch(Companies.create(formValues));
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
                <SectionTitle>Français</SectionTitle>
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
                  <Input
                    name="contactGender"
                    className="mt-1"
                    onChange={updateValues}
                  />
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
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact Gender</TableCell>
                <TableCell>Contact Name</TableCell>
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {dataTable.map((document, i) => {
                if (!document) return null;
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold">{document.name}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{document.address}</span>
                    </TableCell>
                    <TableCell>{document.email}</TableCell>
                    <TableCell>
                      <span className="text-sm">{document.contactGender}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {document.contactFirstname +
                          " " +
                          document.contactLastname}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Link to={`ni/companies/${document._id}`}>
                          <Button layout="link" size="icon" aria-label="Edit">
                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                          </Button>
                        </Link>
                        <Button
                          layout="link"
                          size="icon"
                          aria-label="Delete"
                          onClick={deleteItem(document._id)}
                        >
                          <TrashIcon className="w-5 h-5" aria-hidden="true" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={onPageChangeTable}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      )}
    </>
  );
}

export default CompaniesPage;
