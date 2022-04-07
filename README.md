# SHD Angular Demo 

## General

This repo contains an Angular demo project.
Check out a preview on: https://studiohyperdrive.github.io/angular-demo-project/

It is build with:
- node: `v16.14.2` ( ~ `lts/gallium`)
- npm: `v8.5.0`
- angular: `v13.3.0`

For a complete list of packages and version check out the `package.json` file.

## Setup

### Clone and install dependencies
To setup this project, clone the repo and run `npm i` to install the dependencies.

### NPM

The available commands for development are:

| command      | runs                                                                                                 |
|--------------|------------------------------------------------------------------------------------------------------|
| ng           | Run a task for the angular CLI (local node_modules)                                                  |
| start        | Run `ng serve` which starts a dev server                                                             |
<br>

The available commands for building the project are:

| command     | runs                                                            |
|-------------|-----------------------------------------------------------------|
| build       | Run `ng build` which will bundle the project to the dist folder |
| build:pages | Run `ng build` which will bundle the project to the docs folder |
| build:watch | Run `ng build` with the watch flag and development config       |
<br>

The available commands for testing the project are:

| command      | runs                                                                                                 |
|--------------|------------------------------------------------------------------------------------------------------|
| test         | Run `ng test` to run all tests for the main project.                                                 |
<br>

Other available commands are:

| command      | runs                                                                                                 |
|--------------|------------------------------------------------------------------------------------------------------|
| none         | TBD                                                                                                  |
<br>

## OAuth
This project uses Auth0 for an example oauth implementation.
Login using the developer@studiohyperdrive.be account and move to the "Angular Demo" application.

We use the following library to connect:
https://www.npmjs.com/package/angular-oauth2-oidc

## Deploy

This project is a demo to use in workshops or as a local playground.
It has a preview on https://studiohyperdrive.github.io/angular-demo-project/

Take the following steps:
1. Run `npm run build:pages`.
2. Check if the `/docs` folder is present and up-to-date.
3. Push your changes, open a PR and merge to the main branch.

## Environment variables

This project uses environemnt variables. For local development, these can be found in the `.env` file in the root of the project. They are provided through the `env_file` property in the `docker-compose.yml` file.

TBD.
