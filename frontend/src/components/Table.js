import React from "react";
import { Link } from "react-router-dom";

import { EditIcon, TrashIcon } from "../icons";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Button,
  Pagination,
} from "@windmill/react-ui";

const DataTable = (props) => {
  return (
    <div className={props.className ?? ""}>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              {props.columns.map((column, i) => (
                <TableCell key={i}>{column.name}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {props.data.map((document, i) => {
              return (
                <TableRow key={i}>
                  {props.columns.map((column) => {
                    let key = column.key ?? column.name.toLowerCase();
                    let subKey = column.subKey ?? "";
                    let documentKey = props.languages
                      ? document.fr[key]
                      : document[key];
                    if (
                      column.type === "concat" &&
                      typeof column.keys !== "undefined"
                    ) {
                      documentKey = props.languages
                        ? document.fr[column.keys[0]] +
                          " " +
                          document.fr[column.keys[1]]
                        : document[column.keys[0]] +
                          " " +
                          document[column.keys[1]];
                    }
                    if (subKey) {
                      documentKey = documentKey?.[subKey] ?? documentKey;
                    }

                    return (
                      <TableCell key={`${column.name}_th`}>
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">{documentKey}</p>
                          </div>
                        </div>
                      </TableCell>
                    );
                  })}
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
                        onClick={props.deleteItem(document._id)}
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
            totalResults={props.pagination.totalResults}
            resultsPerPage={props.pagination.resultsPerPage}
            onChange={props.pagination.onPageChangeTable}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
};

export default DataTable;
