import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
// const Projects = lazy(() => import("../pages/portfolio/Projects"));
// const Project = lazy(() => import("../pages/portfolio/Project"));
const Learnings = lazy(() => import("../pages/portfolio/Learnings"));
const Learning = lazy(() => import("../pages/portfolio/Learning"));
const Skills = lazy(() => import("../pages/portfolio/Skills"));
const Skill = lazy(() => import("../pages/portfolio/Skill"));
const Experiences = lazy(() => import("../pages/portfolio/Experiences"));
const Experience = lazy(() => import("../pages/portfolio/Experience"));
const Educations = lazy(() => import("../pages/portfolio/Educations"));
const Education = lazy(() => import("../pages/portfolio/Education"));
const Companies = lazy(() => import("../pages/nailedIt/Companies"));
const EmailTemplates = lazy(() => import("../pages/nailedIt/EmailTemplates"));
const Processes = lazy(() => import("../pages/nailedIt/Processes"));
const SendingConfigs = lazy(() => import("../pages/nailedIt/SendingConfigs"));

const Test = lazy(() => import("../pages/Test"));

const Page404 = lazy(() => import("../pages/404"));


const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/pf/experiences",
    component: Experiences,
  },
  {
    path: "/pf/experiences/:id",
    component: Experience,
  },
  // {
  //   path: "/pf/projects",
  //   component: Projects,
  // },
  // {
  //   path: "/pf/projects/:id",
  //   component: Project,
  // },
  {
    path: "/pf/learnings",
    component: Learnings,
  },
  {
    path: "/pf/learnings/:id",
    component: Learning,
  },
  {
    path: "/pf/skills",
    component: Skills,
  },
  {
    path: "/pf/skills/:id",
    component: Skill,
  },
  {
    path: "/pf/educations",
    component: Educations,
  },
  {
    path: "/pf/educations/:id",
    component: Education,
  },
  {
    path: "/ni/companies",
    component: Companies,
  },
  {
    path: "/ni/sendingConfigs",
    component: SendingConfigs,
  },
  {
    path: "/ni/processes",
    component: Processes,
  },
  {
    path: "/ni/emailTemplates",
    component: EmailTemplates,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: "/404",
    component: Page404,
  },
  // {
  //   path: '/blank',
  //   component: Blank,
  // },
];

export default routes;
