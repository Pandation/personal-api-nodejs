import React, { useState, useEffect } from "react";
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
  Badge,
  Input,
  Label,
  Button,
  Pagination,
} from "@windmill/react-ui";
import { EditIcon, TrashIcon } from "../../icons";

import response from "../../utils/demo/tableData";
import SectionTitle from "../../components/Typography/SectionTitle";
// make a copy of the data, for the second table
const response2 = response.concat([]);

function EducationsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  // setup pages control for every table
  const [pageTable2, setPageTable2] = useState(1);

  // setup data for every table
  const [dataTable2, setDataTable2] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(
      response2.slice(
        (pageTable2 - 1) * resultsPerPage,
        pageTable2 * resultsPerPage
      )
    );
  }, [pageTable2]);

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
                  <span>Expérience</span>
                  <Input className="mt-1" placeholder="Développeur FullStack" />
                </Label>
                <Label>
                  <span>Société</span>
                  <Input className="mt-1" placeholder="SuperStartup" />
                </Label>

                <Label>
                  <span>Lieu</span>
                  <Input className="mt-1" placeholder="Montpellier 34" />
                </Label>
                <Label>
                  <span>Date</span>
                  <Input className="mt-1" placeholder="Novembre 2021" />
                </Label>
              </div>
              <div className="flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <SectionTitle>English</SectionTitle>
                <Label>
                  <span>Experience</span>
                  <Input className="mt-1" placeholder="FullStack Developer" />
                </Label>
                <Label>
                  <span>Society</span>
                  <Input className="mt-1" placeholder="SuperStartup" />
                </Label>

                <Label>
                  <span>Place</span>
                  <Input className="mt-1" placeholder="Montpellier 34" />
                </Label>
                <Label>
                  <span>Date</span>
                  <Input className="mt-1" placeholder="November 2021" />
                </Label>
              </div>
            </div>
            <Button
              className="mb-5 self-end"
              iconLeft={EditIcon}
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              Ajouter
            </Button>
          </div>
        )}
      </div>
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
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Link to="/pf/educations/truc">
                      <Button layout="link" size="icon" aria-label="Edit">
                        <EditIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </Link>
                    <Link to="/pf/educations/truc">
                      <Button layout="link" size="icon" aria-label="Delete">
                        <TrashIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default EducationsPage;
