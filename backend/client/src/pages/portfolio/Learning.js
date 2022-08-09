import React from "react";

import { Input, Label } from "@windmill/react-ui";

import ItemPage from "../generics/ItemPage";

function LearningPage() {
  return (
    <ItemPage title="Learning" type="learnings">
      {(itemFormValues, updateValues) => {
        console.log(itemFormValues)
        return (
          <div className="flex flex-col">
            <div className="flex-col">
              <div className="flex-1 px-4 py-3 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label>
                  <span>Name</span>
                  <Input
                    name="name"
                    className="mt-1"
                    value={itemFormValues.values.name}
                    onChange={updateValues}
                  />
                </Label>
              </div>
            </div>
          </div>
        );
      }}
    </ItemPage>
  );
}

export default LearningPage;
