# WP-Design-Playground
A sandbox that mirrors our current WP-Spectrum article layouts but uses Site-components primarily for standard components. A place where designers can freely adjust code, layout without fear of screwing up production or dev environments. 



## Getting started
- First you will need to install a IDE (a place to open and edit code) go to [Visual Studio Code](https://visualstudio.microsoft.com/) and download **visual studio code** not ~~studio~~

- After installing please be sure you have node installed. (*If you have no idea what I am talking about you probably don't have it installed*) go to [Node](https://nodejs.org/en/) and download the latest node version. 

- Once done installing node clone this repository and open Visual Studio Code and click open and find the folder WP-Design-Playground

- After opening the folder you should see all the files now open the terminal by pressing `^ + ~` or click terminal>new terminal

- In the terminal Type `npm i` and let things install. (Feel free to reach out to someone if you come across problems)

- You will need access to our prism API key please make a [Keybase](https://keybase.io/) account and reach out to any of us using this repository and we will share with you there the api key and how to set up your api key. 

- Once done you are ready to fire it up `npm run dev` will launch the server and you will see the playground



## Folder structure
There are only a few folders you should really be concerned about that is **Layouts** and **Pages** and **styles**

### Layouts Folder 
This folder houses all layouts that we have in our playground. You will spend most of your time in this folder click on the layout you like to change and play around with. You can modify the css code and as you get more comfortable move things around. 

 #### How to make a new layout
Type in the terminal `node newlayout` this will generate a new layout in the layouts foldfer. However you can also select any file in the layout folder and duplicate it by right clicking copy paste. Just be sure to always rename the layout accordingly and keep that file in the layouts folder. 

### Pages Folder
This is important place where the data is called to populate the article layout files. You should not have to change anything but one file. the **Index.js** file is where you will got to update line 8 and change the article layout to whatever layout you like to test and playaround with. 

### How to change the layout 
in the Index.js file line 8 of that file reads `import ArticleLayout from "../Layouts/standard";` to change the layout to the layout you want simple change the */standard* to */[LayoutFilename]* save the file and that is it. You can now go to your layout file and start making changes. 


## Create and make changes on Github
In this repository we are not too concern about how you go about commiting changes if things break its okay because this is just a playground and nothing can impact any part of the production code anywhere. However we do like to keep things really straight forward. Please always work in your own file meaning if you see another layout you did not work on please be sure to either create a new branch to modify if you are working with another person or create a new file. As we grow as a team we will become more comfortable with Git standards but for now the only one is this. Never work in the main branch work on your own branch. (To learn more how to do that please ask any of us who work on this repository we will be happy to help. 




