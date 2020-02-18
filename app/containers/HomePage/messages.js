/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Velimir Tchatchevsky's resume website",
  },
  aboutTitle: {
    id: `${scope}.header`,
    defaultMessage: "Introduction",
  },
  aboutContent: {
    id: `${scope}.header`,
    defaultMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  techExperienceTitle: {
    id: `${scope}.technicalExperience`,
    defaultMessage: "Professional Experience",
  },
  workExperienceTitle: {
    id: `${scope}.technicalExperience`,
    defaultMessage: "Work Experience",
  },
  certificatesTitle: {
    id: `${scope}.certificatesTitle`,
    defaultMessage: "Certificates",
  },
});
