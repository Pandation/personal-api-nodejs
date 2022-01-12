import React, { useState, useEffect, useRef } from "react";
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

import { Projects } from "../../redux/features/portfolio/projects";

import { projectsSchema } from "../../configs/modelSchemas";

function ProjectsPage() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(projectsSchema);
  const collection = useSelector((state) => state.projects.collection);
  const [isFormOpen, setIsFormOpen] = useState(false);
  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(Projects.getAll());
  }, [dispatch]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = collection.items.length;

  // pagination change control
  function onPageChangeTable(p) {
    setPageTable(p);
  }
  const updateValues = (language = false) => {
    if (!language) {
      return (e) => setFormValues({ ...formValues, url: e.target.value });
    }
    return (e) =>
      setFormValues({
        ...formValues,
        [language]: {
          ...formValues[language],
          [e.target.name]: e.target.value,
        },
      });
  };
  const updateUpload = (e) => {
    const file = e.target.files[0];
    setFormValues({ ...formValues, file });
  };

  const deleteItem = (id) => {
    return () => {
      dispatch(Projects.deleteItem(id));
    };
  };
  const save = () => {
    const FORM_DATA = new FormData();
    for (const formKey in formValues) {
      if (formKey === "en" || formKey === "fr") {
        let data = {};
        for (const key in formValues[formKey]) {
          if (formValues[formKey][key] === "" || undefined) {
            return;
          }
          data[key] = formValues[formKey][key];
          FORM_DATA.append(key, JSON.stringify(data));
        }
      } else if (formKey === "url") {
        FORM_DATA.append(formKey, formValues[formKey]);
      }
    }
    dispatch(Projects.upload(FORM_DATA));
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
      <PageTitle>Projects</PageTitle>
      <div>
        <Button
          className="mb-5"
          iconLeft={EditIcon}
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          {isFormOpen ? "Fermer" : "Ajouter"}
        </Button>
        {isFormOpen && (
          <div className="flex flex-col px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
              </div>
            </div>
            <Label>
              <span>Image</span>
              {/* <Input
                name="url"
                className="mt-1"
                placeholder="Montpellier 34"
                onChange={updateValues()}
              /> */}
              <input type="file" onChange={updateUpload} name="file" />
            </Label>
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
                <TableCell>Stacks</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {dataTable.map((document, i) => {
                console.log(document);
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold">{document.fr.name}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">$ {document.fr.society}</span>
                    </TableCell>
                    <TableCell>{document.fr.stacks}</TableCell>
                    <TableCell>
                      <span className="text-sm">{document.fr.date}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Link to={`/pf/projects/${document._id}`}>
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

export default ProjectsPage;
