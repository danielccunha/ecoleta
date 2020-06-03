<div align="center">
  <h1>
    :recycle: <i>ecoleta</i>
  </h1>

  <p>
    Garbage collection application developed during Next Level Week
  </p>

  <p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/danielccunha/ecoleta">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danielccunha/ecoleta">
	
  <a href="https://www.linkedin.com/in/daniel-cunha-53053816b/">
    <img alt="Made by Daniel Cunha" src="https://img.shields.io/badge/made%20by-Daniel%20Cunha-%23">
  </a>

  <a href="https://github.com/danielccunha/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielccunha/ecoleta">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">  
</p>
</div>

## :computer: Project

Ecoleta is a project developed based on international environment week. That aims to connect people to companies that collect specific waste such as light bulbs, batteries, cooking oil, etc.

<h1 align="center">
    <img alt="Example" title="Example" src=".github/ecoleta.png" />
</h1>

## :fire: Usage

To use this project you'll need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed on your computer. Optionally you can use [npm](https://www.npmjs.com/) instead of Yarn.

```sh
# Clone the project
git clone https://github.com/danielccunha/ecoleta.git
cd ecoleta

# Open server folder and install its dependencies
cd server
yarn

# Run migrations and seed
yarn knex:migrate
yarn knex:seed

# Optionally copy .env.example file. It contains server port and morgan mode. Both have default values
cp .env.example .env
nano .env

# Run the server in development mode
yarn dev

# Open another terminal and navigate to web folder
cd ../web

# Install web dependencies and start web application
yarn
yarn start

# Open another terminal and navigate to mobile folder
cd ../mobile

# And finally, install mobile project dependencies and start it
yarn
yarn start
```

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [TypeScript](https://www.typescriptlang.org/)

## :sparkles: Layout

To access the layout use [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/).

## :pray: Acknowledgments

I want to thank [Rocketseat](https://github.com/Rocketseat) for this initiative and awesome work (as always).

## :memo: License

This project is under the MIT license. See [LICENSE](LICENSE) for more details.

---

<h4 align="center">
	Made with :heart: by <a href="https://www.linkedin.com/in/daniel-cunha-53053816b/" target="_blank">Daniel Cunha</a> :wave:
</h4>
