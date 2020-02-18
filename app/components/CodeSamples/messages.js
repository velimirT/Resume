/*
 * CodeSamples Messages
 *
 * This contains all the text for the CodeSamples component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CodeSamples';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Code Samples',
  },
  github_alt: {
    id: `${scope}.github_alt`,
    defaultMessage: 'Link to Velimir`s personal GitHub account',
  },
});
