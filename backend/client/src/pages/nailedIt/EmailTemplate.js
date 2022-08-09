import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Textarea, Select } from "@windmill/react-ui";

import ItemPage from "../generics/ItemPage";

import { Config } from "../../redux/features/config";

function EmailTemplatePage() {
  const dispatch = useDispatch();
  const dataLists = useSelector((state) => state.config.dataLists);

  useEffect(() => {
    dispatch(Config.getSelectsLists());
  }, []);

  if (!dataLists.loaded || dataLists.fetching) {
    return <p>Chargement...</p>;
  }

  return (
    <ItemPage
      title="Email Template"
      type="emailTemplates"
      options={{
        selectKeys: {
          process: "_id",
        },
      }}
    >
      {(itemFormValues, updateValues) => {
        return (
          <div>
            <div className="px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <Label>
                <span>Name</span>
                <Input
                  name="name"
                  className="mt-1"
                  value={itemFormValues.values.name}
                  onChange={updateValues}
                />
              </Label>
              <Label>
                <span>Subject</span>
                <Input
                  name="subject"
                  value={itemFormValues.values.subject}
                  className="mt-1"
                  onChange={updateValues}
                />
              </Label>
              <Label>
                <span>Header</span>
                <Textarea
                  name="header"
                  value={itemFormValues.values.header}
                  className="mt-1"
                  onChange={updateValues}
                />
              </Label>

              <Label>
                <span>Content</span>
                <Textarea
                  name="content"
                  value={itemFormValues.values.content}
                  className="mt-1"
                  onChange={updateValues}
                />
              </Label>
              <Label>
                <span>Footer</span>
                <Textarea
                  name="footer"
                  className="mt-1"
                  value={itemFormValues.values.footer}
                  onChange={updateValues}
                />
              </Label>
              <Label>
                <span>Process</span>
                <Select
                  className="mt-1"
                  value={itemFormValues.values.process}
                  name="process"
                  onChange={updateValues}
                  placeholder="select a value"
                >
                  <option key={"process_default"} value=""></option>
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
                  value={itemFormValues.values.status}
                  name="status"
                  onChange={updateValues}
                >
                  <option value="first">PREMIER ENVOI</option>
                  <option value="relance">RELANCE</option>
                </Select>
              </Label>
            </div>
          </div>
        );
      }}
    </ItemPage>
  );
}

export default EmailTemplatePage;
