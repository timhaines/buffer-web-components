import { configure, getStorybook } from '@kadira/storybook';

// automatically import all story.js files, excluding buffer components
const req = require.context('../', true, /^(?!.*@bufferapp\/components).*(story\.jsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

if (typeof window === 'object') window.__storybook_stories__ = getStorybook();
