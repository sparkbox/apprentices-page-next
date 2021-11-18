# Sparkbox Apprentice Page

## Getting Started

- run the following in your terminal: ```git clone https://github.com/sparkbox/apprentices-page-next.git``` 

##### Installing Deps:

- ```npm install```

##### Running the Project:

- ```npm run dev```

##### Running the linter:

- ```npm run lint```

##### Running Tests with watch mode:

- ```npm test```

##### Runnnig tests without watch mode:

- ```npm test:ci```    
## Technical Overview 

#### Tech Stack:

- [Next.js][]
- [Sass Modules][]
- [Jest][]
- [React Testing Library][]

#### CI/CD:

- [Netlify][] is used for automatic deployments and deployment previews. 
- [Github Actions][] allows us to make sure all tests and linters pass for each PR.
  - [Sparkbox eslint config][] is used to enforce JavaScript code styles. 
  - [Sparkbox stylelint config][] is used to enforce Scss code styles. 

[Next.js]: https://nextjs.org/ 
[Sass Modules]: https://nextjs.org/docs/basic-features/built-in-css-support#sass-support
[Jest]: https://jestjs.io/
[React Testing Library]: https://testing-library.com/docs/react-testing-library/intro/
[Netlify]: https://app.netlify.com/sites/sb-apprentices/overview
[Github Actions]: https://docs.github.com/en/actions
[Sparkbox eslint config]: https://github.com/sparkbox/eslint-config-sparkbox
[Sparkbox stylelint config]: https://github.com/sparkbox/stylelint-config-sparkbox

## Contributing 

##### Git:

- When you want to make a contribution please follow the [Sparkbox git process](https://github.com/sparkbox/standard/tree/main/code-style/git) for naming branches, writing commit messages, and rebasing before submitting PRs.

##### Updating Apprentices Data:

  ###### Images 

  - All image files should be added to ```/public/apprentices``` with the file name being ```[ApprenticeName].png```

  ###### Apprentice Data

  - To add/change the current apprentices or previous apprentices data navigate to ```/data``` folder and find the ```apprentices.json``` file

  - Add to and/or adjust the data, see below how the data for each group is structured:
    - *Current Apprentices*:
    ```js
    "currentApprentices": {
      "version": "[Version Number]",
      "apprentices": [
        ...,
        {
          "name": "[Apprentice Name]",
          "image": "/apprentices/[Name].png",
          /* Links are optional and can be any link the apprentice provides as long as it follows 
          the structure of the objects below: */
          "links": [
            { "href": "https://www.personalportfolio.com", "text": "Personal" },
            { "href": "https://www.linkedin.com/", "text": "Linkedin" },
            { "href": "https://www.github.com/", "text": "Github" },
          ],
        },
      ],
    },
     ```
    - *Previous Apprentices*:
    ```js 
    "previousApprentices": [
      ...,
      {
        "version": "[Version Number]",
        "apprentices": [
          ...,
          {
            "name": "[Apprentice Name]",
            /* Status is optional and states the apprentice employment status with Sparkbox
            and can be one of the following values, if the apprentice was never an employee omit
            status entirely: */
            "status": [ "current" || "previous" ]
          }
        ]
      }
    ]
    ```

  ##### Updating Snapshot: 
    
  - If any markup is changed the snapshot will need to be updated to represent those changes in the test
  - run ```npm run test:snapshot:update``` to update the snapshot

  ##### Accessing Netlify:

  - Use your Sparkbox affiliated 1Password account to get access to the Sparkbox developer account in Netlify.
  - There you can make any necessary changes to the Netlify deploy such as editing the name of the url, the automatic deploy process or evironmental variables.
