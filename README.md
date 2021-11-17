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
