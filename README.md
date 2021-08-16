# WPDS Documentation site

## Getting started
There are two main folders the docs is the static folder that houses the actual site that is generated from the src folder. All changes and contribution should happen on the src folder. 

To start `cd src` into the src folder `nvm use` and `yarn install` to get the project set up locally. You can now run the local build `yarn start` This will spin up the server with all of the site content. 


The site content is controlled via the folder structure. There are pages as main pages and then are two folders `Docs` and `blog` that generate the entire site. To read more about folder structure please refer to the (docusaurus docs)[https://docusaurus.io/docs/docs-introduction]


All pages are written in html while the docs & blogs are written in Markdown. 


## Building the site

To build the site run `yarn build` and when it has successfully build check to see if all things are working run `yarn serve` it will test the local build of the static site. If all is good and no links are broken run `yarn move` 
open a PR

