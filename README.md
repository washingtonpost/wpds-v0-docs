# WPDS Documentation site

The site is powered by [docusarus](https://docusaurus.io/) and modified to meet our needs. The site is composed of pages, docs, and blogs. Pages are strictly written in HTML these include stand alone pages like our landing pages. Docs adn blogs are written in markdown and include html elements.

## Doc structure

Docs in particular are structured in such a way where there is developer docs and design docs. For every design doc there is a developer doc. Example when you create a button.md in design/docs you also create a button.md in developer docs. They will be linked through our secondary nav as tabs design & implementation. This makes it easy to toggle between the two

## Getting started

Prerequisite you will need code editor of your choice we use [VScode](https://code.visualstudio.com/download) as well install [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) & node v14.17.5 you should install this using [Node version manager](https://formulae.brew.sh/formula/nvm#default).

1. Type `nvm use` if you need install `nvm install`
2. Open `src` folder in your terminal `cd src`
3. Install modules `yarn install`
4. When it is done `yarn start` will launch docusarus.

## Contributing

To contribute to the doc site you must be familiar with primarly with markdown HTML CSS and small amount of react.

1. Create a new branch against `main`
2. Name the branch something meaningful to reflect the changes you are making
3. Make changes to the markdown files (do not change other files unless you are sure what you are doing)
4. Preview changes by `yarn start` to see the changes in realtime
5. Before opening a pull request `yarn build` the entire site and `yarn serve` to test to see if changes work in static build
6. Once all is good commit and push open the pr.
7. once reviewed it will be merged.

Reach out if you need any help at all.

## Site is available to view only for Github users in WP-Media organization

[https://wpds-docs.preview.now.washingtonpost.com/](https://wpds-docs.preview.now.washingtonpost.com/)
