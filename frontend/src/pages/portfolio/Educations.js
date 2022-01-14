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

import { Educations } from "../../redux/features/portfolio/educations";
import { educationsSchema } from "../../configs/modelSchemas";

function EducationsPage() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.educations.collection);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState(educationsSchema);

  // setup pages control for every table
  const [pageTable, setPageTable] = useState(1);
  // setup data for every table
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(Educations.getAll());
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
      dispatch(Educations.deleteItem(id));
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
    dispatch(Educations.create(formValues));
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
      <PageTitle>Educations</PageTitle>
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
                  <span>Title</span>
                  <Input
                    name="title"
                    className="mt-1"
                    placeholder="Développeur Web et Web Mobile"
                    onChange={updateValues("fr")}
                  />
                </Label>
                <Label>
                  <span>School</span>
                  <Input
                    name="school"
                    className="mt-1"
                    placeholder="Super School"
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
                  <span>Title</span>
                  <Input
                    name="title"
                    className="mt-1"
                    placeholder="Développeur Web et Web Mobile"
                    onChange={updateValues("en")}
                  />
                </Label>
                <Label>
                  <span>School</span>
                  <Input
                    name="school"
                    className="mt-1"
                    placeholder="Super School"
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
                <TableCell>Title</TableCell>
                <TableCell>School</TableCell>
                <TableCell>Place</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {dataTable.map((document, i) => {
                console.log(document)
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold">
                            {document.fr.title}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{document.fr.school}</span>
                    </TableCell>
                    <TableCell>{document.fr.place}</TableCell>
                    <TableCell>
                      <span className="text-sm">{document.fr.date}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Link to={`/pf/educations/${document._id}`}>
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

export default EducationsPage;
