import React from 'react';
import App from 'components/App'
import ReactDOM from 'react-dom';

// We are not going to house the 'App' root component in this index.js file, because this file will be for all the React setup/configuration code (e.g., Redux) we will need to have
// We don't want to have all the React setup/configuration code AND the App component in the same file, that will make it difficult for us, and other developers, to understand and read the code
// For the sake of sanity, efforts to write clean code, and maintain community-agreed-upon project structure/rganization and conventions, we will separate out our components to a dedidcated 'components' folder within src, and we will keep all our components (including the root 'App') in there
// Also helpful to have a separate 'components' folder for all the components' associate stylesheets, because we don't want to have everything in the src folder and have it be inundated with files, that will confuse us and also goes against our efforts to maintain sustainable React project structure/organization

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
