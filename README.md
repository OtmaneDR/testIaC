# Backoffice - Tool-Template

![C2 - Internal](https://badgen.net/badge/C2/Internal/blue?icon=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAABeklEQVRIie2WP04CQRSHf4MNRCONhYYIHsAjaKONBZ2JtV4CPIDxAEbDHYwmHoZW0UjU0JGoQYl8FjtGXGZ3Bhas%2BCWTTd6%2B9743b%2F7sSnP9k0zSC6AiadOODUllSRVJi5KKkpas66ukrqQ3SfeSHu2zKalpjHkIqgSoAk9MT89A1TtjoC2pFFRluNrGmHUfmClDI5Axf1i5WUBCNAeH6FNSXdEGLEk6trZsCjgedUdM3RcUAu55cqw5YlY9Me%2FxGFeru57a%2Bg7blydmJKcLfOtJcuiwHXlifDkl4NzTtj5QG%2FKvW1uazkLAVU8S4HezhPgCe3GO68rMK%2FrCrKQV%2BHMFDheRoI6ksjHmY9g4ssbGmJ6khifZOGrEoYkCikDH074tYNvj8wIsj1UmsB%2B4fmk6mKRFAi4yQP07OQWcAy4ngN4ACxODLTwPXI8BvSI6GdllZ34KDFKAA%2BAESPyBzFLALtByQFvAztSBMXgBqAF3dtSAwkyhc2XRN5lGTdzGBTtBAAAAAElFTkSuQmCC)&nbsp;
[![Contact](https://badgen.net/badge/icon/Contact?label&icon=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAABIklEQVRIie3VMUoDQRTG8W9SZBslKVIoWyt4gXgML5JYeA5RvIMewEuYhBQJFtppqV3ELCn9WzhCWKP7xryA4H4wzc7j%2FWYGZlaq8xcDZMAxMASKOIZAH8g2hebAlO8zAXJvNKtAl3G%2FncfjtabnCY8S4IGlZzDCc0lbxnUWIYRtLxgj%2BtE0hMq%2BDWOvIsF9tRRZ4bsE2FRrhS8T4KuE2p8T7%2FHEeI%2BbbnDE8wrc%2F%2BVawptADxgA8zhu4jffndbxivXlakjqSjqSdCjpQFI7Ts8k3UsaSbqWNA4hvK21KmAXOAOeE34ST8ApsPMbsA1cAIsEsJwFcA60rOg%2B8LgGWM4DsGeBbx3Rz0zLzqq3umM6mrR86bkKPpH04ojOYs86%2Fyzv5x2Nqq3T2YwAAAAASUVORK5CYII%3D)](#Contact)&nbsp;

[![Node.js CI](https://github.com/bonprix/backoffice-tool-template/actions/workflows/prod-deployment.yml/badge.svg)](https://github.com/bonprix/backoffice-tool-template/actions/workflows/prod-deployment.yml)
[![Node.js CI](https://github.com/bonprix/backoffice-tool-template/actions/workflows/stage-deployment.yml/badge.svg)](https://github.com/bonprix/backoffice-tool-template/actions/workflows/stage-deployment.yml)
[![Node.js CI](https://github.com/bonprix/backoffice-tool-template/actions/workflows/build-validation.yml/badge.svg)](https://github.com/bonprix/backoffice-tool-template/actions/workflows/build-validation.yml)

This project contains the tool template, which can be used as a template repository for new tools in the backoffice. Many useful mechanisms are already pre-implemented in the tool template, so that the development of the new tool can be started immediately. The template includes complete user authentication, language selection, uniform code design and other elementary things. The project can be started directly after cloning the repository and used as a basis.

**Note**: The use of the notifications and the breadcrumbs is described in the [Backoffice Tool Library](https://github.com/bonprix/backoffice-tool-library).

# Installation & start

```
npm i
npm start
```

# Setting up a Test Environment with the Appshell

The [Appshell](https://github.com/bonprix/backoffice-appshell) can be used to test the tools locally. Possible tests are switching the light/dark mode and the language and testing breadcrumbs. The Appshell is started by using the identical commands as for the tool template. By default, the Appshell runs on port 3000 and the tools run on port 3001 in local mode. These ports should not be adjusted as they have been authorised by the Keycloak test instance.

The Appshell and the tool are started in separate IDEs. Nothing more needs to be done to start them. Since all tools in the Appshell point to port 3001 in local operation, it does not matter which tool is called in the Appshell. The tool that runs at https://127.0.0.1:3001 always appears.

**Note:** When testing locally, you will notice that after opening a tool via the Appshell, another login screen from Keycloak appears (but only with Chrome and FF, not with Opera/Edge). This is most likely (but not easily verifiable) a security policy of the web browser that isolates the browser context of iframes if the page and the iframe have different domain/port combinations (https://127.0.0.1:3000 and https://127.0.0.1:3001). In live mode, this is no longer the case, as the tools run under a subdomain of the Appshell and thus have the same domain/port combination (https://backoffice.bonprix.work:443 and https://tool.backoffice.bonprix.work:443). We have removed the loading circle in the local mode of the Appshell, as this would otherwise block the login of the keycloak mask.

# Testing tools with a connection to microservices in the local development environment

All microservices that are directly connected to a tool in the frontend require CORS (Cross-Origin Resource Sharing). The CORS header 'Access-Control-Allow-Origin' is enabled on the microservices for the domain `*.bonprix.work`. This means that local testing is not directly possible because `localhost`/`127.0.0.1` are not allowed. For this purpose, the back office team has implemented a CORS proxy that can be executed locally and provides the API requests with the appropriate CORS header. The CORS proxy can be found on [GitHub](https://github.com/bonprix/backoffice-cors-proxy).

# Directory Structure of the Backoffice Tool Template (extract)

```
backoffice-tool-template
│   .env.development                Automatically loaded in dev environment
│   .env.production                 Automatically loaded in prod environment
│   .env.staging                    Automatically loaded in staging environment
│   .prettierrc.json                Prettier settings (see section aliases)
│
└───src
│   │   App.tsx                     Does not need to be edited
│   │   main.tsx                    Does not need to be edited
│   │   routesConfig.ts             All URL paths and associated modules
│   │
│   └───data                        Translation files and other textual data
│   │
│   └───pages                       Views/pages and their components
```

# Use of Keycloak/Authentication

Keycloak is already fully integrated into the [Backoffice Tool Library](https://github.com/bonprix/backoffice-tool-library) (and accordingly also in the Backoffice Tool Template). When requesting the page, the user is automatically forwarded to the Keycloak server where he can authenticate himself. The user is then forwarded to the tool and receives an authorisation token. The tokens are also managed and stored by the Backoffice Tool Library.

## Use of the Bearer Token for Requests

The access token can be called with the function `getAccessToken()` from the [Backoffice Tool Library](https://github.com/bonprix/backoffice-tool-library). The import is done with the following command:

```
import { getAccessToken } from "@bonprix/backoffice-tool-library/utils/keycloak";
```

We always define the following function for our API requests:

```
const baseURL = import.meta.env.VITE_API;

interface RequestProps {
  method: string;
  path: string;
  params?: object;
  data?: object;
}

const request = async ({ method, path, params, data }: RequestProps) => {
  const axiosConfig: AxiosRequestConfig<any> = {
    method: method,
    url: new URL(path, baseURL).href,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
    timeout: 10000,
  };
  if (data) {
    axiosConfig.data = data;
  }
  if (params) {
    axiosConfig.params = params;
  }
  return await axios(axiosConfig);
};
```

The `baseURL` should point to the endpoint, which we implement in the `.env` files. This is located under the variable `VITE_API`.

The function can be called like this: `request({ method: "get", path: "/", params: { filter: "123" } });`.

If the parameters are to be passed via a query string, then the argument `params` must be used. If the parameters are transmitted via the content body (as is usual with POST/PUT), then the argument `data` must be used for the payload (https://stackoverflow.com/questions/25385559/rest-api-best-practices-args-in-query-string-vs-in-request-body).

# Environment Files (.env)

There are 3 environment files:

1. .env.development
2. .env.production
3. .env.staging

All files should contain the same keys, as they are loaded depending on the environment (dev/staging/prod). Thus API endpoints can be stored there. The variables must begin with `VITE_` if they are to be accessible from JavaScript. (Source: https://vitejs.dev/guide/env-and-mode.html).

**Attention**: do not store private keys in the files, as the files end up in the Git repository. If private keys (for certificates or similar) are to be stored in environment files, the files must end with `.local` (see https://vitejs.dev/guide/env-and-mode.html).

# Translations

To translate strings we use the addon i18n. The translation files are located in the directories `src/data/locales/de/translation.json` or `src/data/locales/en/translation.json` for English. These two files are passed to the [Backoffice Tool Library](https://github.com/bonprix/backoffice-tool-library), which i18n automatically integrates and receives the respective language from the Appshell.

To use a translation in the code, the translation hook can be used with `const { t } = useTranslation();`. The text itself is then called with `t("hello", { name: user.given_name })`. Here, in addition to the translation (key: `hello`), the parameter `name` is passed. This is displayed in the translation file as follows: `"hello": "Hello {{name}}"`. The example can be found in the file `src/pages/Main.tsx`.

If the translation text does not contain any parameter, the translation function is called with `t("path")`, so the second parameter is omitted.

# Headings

By convention, the heading tags should start from `h2` because an `h1` heading has already been placed in the Appshell header.

# Adding sub-pages/routes

The file `src/routesConfig.ts` is available for adding new (sub)pages. Here the main component (`import Main from "@pages/Main";`) can simply be exchanged with the start page of the new tool (or implemented directly in the main). To add new subpages, a new object is added in the `routes` array, which contains the path, the ID and the component that should be loaded when this subpage is called. A first subpage has already been created for exemplary use (`{ path: "/test", id: "test", component: Test }`).

# MUI (Material-UI)

[MUI](https://mui.com/material-ui/getting-started/overview/) is used in the project as component library and provides a variety of different pre-defined components. All components have extensive documentation with examples. Bonprix owns the Pro plan of MUI, the corresponding API key is already inserted in the tool template. This means that all MUI Pro components are available.

# Code formatting and consistent design

## Prettier

We use Prettier to automatically format the code. Prettier is already included in the `package.json` and configured via `.prettierrc.json`. An additional addon is also used, which takes care of the sorting of imports.

## Import Aliases

For the directories used in the template (`src/assets`, `src/components` etc.) _Import aliases_ (@) can be used when importing files from the directories: `import { getAccessToken } from "@utils/keycloak";`.

To add new aliases, the following 3 files need to be edited: `vite.config.js`, `tsconfig.json` and `prettierrc.json`. The configuration files already contain examples that can be copied and adapted for the new folder(s). In `prettierrc.json` the regExp `"^@(assets/|components/|contexts/|data/|hooks/|layouts/|pages/|utils/|/)(.*)$"` under the key `importOrder` must be extended by the new folder so that Prettier sorts the imports correctly. For example, if the folder `test/` is to be added, the RegExp looks like this: `"^@(assets/|components/|contexts/|data/|hooks/|layouts/|pages/|test/|utils/|/)(.*)$"` (please add new entries alphabetically sorted, so that the imports are also sorted alphabetically).

## Tsx Template

Since React does not provide any specifications for the structure of a component, a template was created that regulates the basic structure of a _function component_. The specifications are voluntary, but are based on the structure of our own tools in the back office.

The template can be inserted into VSCode: `File -> Preferences -> Configure User Snippets`, then select `typescriptreact.json` and use the following JSON:

```
{
  "tsxtpl": {
    "prefix": "tsxtpl",
    "description": "Creates a new tsx template",
    "body": [
      "// Imports",
      "",
      "// Interfaces, Types, Enums",
      "",
      "// Constants",
      "",
      "// Helper functions",
      "",
      "export default function _name$0 () {",
      "\t// Third party Hooks (translation, notifications, keycloak, ...)",
      "\t",
      "\t// Built in Hooks (useState, useCallack, useContext, ...) except useEffect",
      "\t",
      "\t// useEffect",
      "\t",
      "\t// Function constants (columns, userState, ...)",
      "\t",
      "\t// State-related helper functions",
      "\t",
      "\t// JSX-creating functions",
      "\t",
      "\treturn;",
      "}"
    ]
  }
}
```

When creating a new `.tsx` file, type `tsxtpl` and press Enter. The following code is then created:

```
// Imports

// Interfaces, Types, Enums

// Constants

// Helper functions

export default function _name () {
    // Third party hooks (translation, notifications, keycloak, ...)

    // Built in hooks (useState, useCallack, useContext, ...) except useEffect

    // useEffect

    // Function constants (columns, userState, ...)

    // State-related helper functions

    // JSX-creating functions

    return;
}
```

This code describes the areas for interfaces/functions/variables/hooks/JSX-components so that all tsx-files have the same structure, thus simplifying collaboration.

## Typescript Recommendations

We use `Array<string>` instead of `array[]` for arrays in Typescript.

Furthermore, modules (`.tsx`) are named in _PascalCase_, all other files (`.ts` etc.) in _camelCase_. Likewise, _props_ of modules are named in _camelCase_.

For the components (`.tsx`) we use "normal" JavaScript functions (`export default function functionName () {}`). For all other functions we use _Arrow Functions_ (https://www.w3schools.com/js/js_arrow_function.asp). The linked page shows again what the difference is between a "normal" and an _Arrow Function_.

## Themes/colour design

The colour design is based on a uniform theme. For this purpose, the identifiers `primary`/`secondary` can be used on components for the colour property (`color={"primary"}`).

# Contact

Backoffice Team

-   <a href="https://teams.microsoft.com/l/channel/19%3a7415840b4c714fb89d5061a3c75a86a6%40thread.skype/General?groupId=a9838f46-e44c-47a9-8f0b-94bb82704d50&tenantId=8794e153-c3bd-4479-8bea-61aeaf167d5a">
        <img align="center" src="https://img.icons8.com/fluency/24/microsoft-teams-2019.png" /> Support Channel
      </a>
-   <a href="https://bonprix.atlassian.net/jira/software/c/projects/BO/boards/10968/backlog?issueLimit=100">
        <img align="center" src="https://img.icons8.com/color/24/000000/jira.png"/> Issue Tracker
      </a>
