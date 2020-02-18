/**
 *
 * Asynchronously loads the component for CodeSamples
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
