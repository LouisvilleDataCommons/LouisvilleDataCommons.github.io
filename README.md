# Louisville Data Commons Website
## About
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
Data files are stored in other repositories in the Louisville Data Commons organization on GitHub.

## Development
Note: All commits must be made to a non-protected branch and submitted via a pull request before they can be merged into the main branch.

### Initial setup
This project uses yarn to manage packages. You'll need to install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) on your development machine.\
Clone this repository.\
Install dependencies:\
$`yarn`

### Local Development
$`yarn start` \
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Deployment
Deployment is handled automatically with GitHub actions. __DO NOT TOUCH THE gh-pages BRANCH!!__

When a pull request is made to the main branch, the Test deployment workflow will run to ensure that the site builds successfully

Once a pull request is merged to the main branch or someone pushes to the main branch directly, the Deploy workflow will build and deploy to the gh-pages branch.
This will trigger the pages-build-deployment Action that automatically deploys to GitHub Pages.
