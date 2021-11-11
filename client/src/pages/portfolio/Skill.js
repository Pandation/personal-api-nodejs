import React from "react";

import PageTitle from "../../components/Typography/PageTitle";
import { Input, Label } from "@windmill/react-ui";
import SectionTitle from "../../components/Typography/SectionTitle";

function SkillPage() {
  return (
    <>
      <PageTitle>Skill</PageTitle>
      <div>
        <div className="flex">
          <div className="flex-1 px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
          <div className="flex-1 px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
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
      </div>
    </>
  );
}

export default SkillPage;
