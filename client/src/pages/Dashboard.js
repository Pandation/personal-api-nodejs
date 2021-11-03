import React from "react";

import InfoCard from "../components/Cards/InfoCard";
import PageTitle from "../components/Typography/PageTitle";
import { PagesIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <PageTitle>Projets</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <Link to="/portfolio"><InfoCard title="Portfolio" value="">
          <RoundIcon
            icon={PagesIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard></Link>
        <Link to="/portfolio"><InfoCard title="Crazy Party" value="">
          <RoundIcon
            icon={PagesIcon}
            iconColorClass="text-orange-500 dark:text-purple-100"
            bgColorClass="bg-orange-100 dark:bg-purple-500"
            className="mr-4"
          />
        </InfoCard></Link>
        <Link to="/portfolio"><InfoCard title="Loading Life" value="">
          <RoundIcon
            icon={PagesIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard></Link>
      </div>
    </>
  );
}

export default Dashboard;
