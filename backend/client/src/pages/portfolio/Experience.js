import React from "react";
import { Input, Label } from "@windmill/react-ui";
import SectionTitle from "../../components/Typography/SectionTitle";
import ItemPage from "../generics/ItemPage";

function ExperiencePage() {
  return (
    <ItemPage title="Expérience" type="experiences" language>
      {(itemFormValues, updateValues) => {
        return (
          <div className="flex">
            <div className="flex-1 px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <SectionTitle>Français</SectionTitle>
              <Label>
                <span>Expérience</span>
                <Input
                  className="mt-1"
                  value={itemFormValues.values.fr.title}
                  name="title"
                  onChange={updateValues("fr")}
                />
              </Label>
              <Label>
                <span>Société</span>
                <Input
                  className="mt-1"
                  value={itemFormValues.values.fr.society}
                  name="society"
                  onChange={updateValues("fr")}
                />
              </Label>

              <Label>
                <span>Lieu</span>
                <Input
                  className="mt-1"
                  value={itemFormValues.values.fr.place}
                  name="place"
                  onChange={updateValues("fr")}
                />
              </Label>
              <Label>
                <span>Date</span>
                <Input
                  className="mt-1"
                  value={itemFormValues.values.fr.date}
                  name="date"
                  onChange={updateValues("fr")}
                />
              </Label>
            </div>
            <div className="flex-1 px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <SectionTitle>English</SectionTitle>
              <Label>
                <span>Experience</span>
                <Input
                  className="mt-1"
                  value={itemFormValues.values.en.title}
                  name="title"
                  onChange={updateValues("en")}
                />
              </Label>
              <Label>
                <span>Society</span>
                <Input
                  className="mt-1"
                  value={itemFormValues.values.en.society}
                  name="society"
                  onChange={updateValues("en")}
                />
              </Label>

              <Label>
                <span>Place</span>
                <Input
                  className="mt-1"
                  value={itemFormValues.values.en.place}
                  name="place"
                  onChange={updateValues("en")}
                />
              </Label>
              <Label>
                <span>Date</span>
                <Input
                  className="mt-1"
                  value={itemFormValues.values.en.date}
                  name="date"
                  onChange={updateValues("en")}
                />
              </Label>
            </div>
          </div>
        );
      }}
    </ItemPage>
  );
}

export default ExperiencePage;
