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

import { Experiences } from "../../redux/features/portfolio/experiences";
import { experiencesSchema } from "../../configs/modelSchemas";


function ExperiencesPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.experiences.collection);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(experiencesSchema);

  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(Experiences.getAll());
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
        [language]: { ...formValues[language], [e.target.name]: e.target.value },
      });
  };

  const deleteItem = (id) => {
    return () => {
      dispatch(Experiences.deleteItem(id));
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
    dispatch(Experiences.create(formValues));
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
      <PageTitle>Experiences</PageTitle>
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
                  <span>Expérience</span>
                  <Input
                    name="jobTitle"
                    className="mt-1"
                    placeholder="Développeur FullStack"
                    onChange={updateValues("fr")}
                  />
                </Label>
                <Label>
                  <span>Société</span>
                  <Input
                    name="society"
                    className="mt-1"
                    placeholder="SuperStartup"
                    onChange={updateValues("fr")}
                  />
                </Label>

                <Label>
                  <span>Lieu</span>
                  <Input
                    name="place"
                    className="mt-1"
                    placeholder="Montpellier 34"
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
                  <span>Experience</span>
                  <Input
                    name="jobTitle"
                    className="mt-1"
                    placeholder="FullStack Developer"
                    onChange={updateValues("en")}
                  />
                </Label>
                <Label>
                  <span>Society</span>
                  <Input
                    name="society"
                    className="mt-1"
                    placeholder="SuperStartup"
                    onChange={updateValues("en")}
                  />
                </Label>

                <Label>
                  <span>Place</span>
                  <Input
                    name="place"
                    className="mt-1"
                    placeholder="Montpellier 34"
                    onChange={updateValues("en")}
                  />
                </Label>
                <Label>
                  <span>Date</span>
                  <Input
                    name="date"
                    className="mt-1"
                    placeholder="November 2021"
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
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Experience</TableCell>
                <TableCell>Society</TableCell>
                <TableCell>Place</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {dataTable.map((document, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold">
                            {document.fr.jobTitle}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{document.fr.society}</span>
                    </TableCell>
                    <TableCell>{document.fr.place}</TableCell>
                    <TableCell>
                      <span className="text-sm">{document.fr.date}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Link to={`/pf/experiences/${document._id}`}>
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

export default ExperiencesPage;
