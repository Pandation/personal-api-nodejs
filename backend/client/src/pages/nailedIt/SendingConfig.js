import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Textarea, Select } from "@windmill/react-ui";

import ItemPage from "../generics/ItemPage";

import { Config } from "../../redux/features/config";

function SendingConfigPage() {
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
      title="Sending Configuration"
      type="sendingConfigs"
      options={{ selectKeys: {
        company: '_id',
        process: '_id',
      } }}
    >
      {(itemFormValues, updateValues, handleCheckboxChange) => {
        return (
          <div>
            <div className="px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <Label>
                <span>Company</span>
                <Select
                  className="mt-1"
                  name="company"
                  value={itemFormValues.values.company}
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
                  value={itemFormValues.values.process}
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
                  name="status"
                  value={itemFormValues.values.status}
                  onChange={updateValues}
                >
                  <option name="status" value="first">
                    PREMIER ENVOI
                  </option>
                  <option name="status" value="relance">
                    RELANCE
                  </option>
                </Select>
              </Label>
              <Label>
                <span>Custom Text</span>
                <Textarea
                  className="mt-1"
                  rows="3"
                  name="customText"
                  onChange={updateValues}
                  value={itemFormValues.values.customText}
                />
              </Label>
              <Label className="mt-3" check>
                <Input
                  type="checkbox"
                  name="enabled"
                  checked={itemFormValues.values.enabled}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2">
                  {itemFormValues.values.enabled ? "Activé" : "Désactivé"}
                </span>
              </Label>
            </div>
          </div>
        );
      }}
    </ItemPage>
  );
}

export default SendingConfigPage;
