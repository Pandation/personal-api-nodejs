import React from "react";
import { Input, Label, Select } from "@windmill/react-ui";

import ItemPage from "../generics/ItemPage";

function CompanyPage() {
  return (
    <ItemPage title="Company" type="companies">
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
                <span>Address</span>
                <Input
                  name="address"
                  className="mt-1"
                  value={itemFormValues.values.address}
                  onChange={updateValues}
                />
              </Label>

              <Label>
                <span>Email</span>
                <Input
                  name="email"
                  className="mt-1"
                  type="email"
                  value={itemFormValues.values.email}
                  onChange={updateValues}
                />
              </Label>
              <Label>
                <span>Contact Gender</span>
                <Select
                  className="mt-1"
                  name="contactGender"
                  onChange={updateValues}
                  value={itemFormValues.values.contactGender}
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
                  value={itemFormValues.values.contactFirstname}
                  onChange={updateValues}
                />
              </Label>
              <Label>
                <span>Contact Lastname</span>
                <Input
                  name="contactLastname"
                  className="mt-1"
                  value={itemFormValues.values.contactLastname}
                  onChange={updateValues}
                />
              </Label>
            </div>
          </div>
        );
      }}
    </ItemPage>
  );
}

export default CompanyPage;
