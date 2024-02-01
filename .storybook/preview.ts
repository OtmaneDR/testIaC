// use the whole predefined configuration, your own customized one or a mix of both
import { decorators as decoratorsGetter, globalTypes, parameters } from "@bonprix/backoffice-tool-library/storybook";

import * as de from "../src/data/locales/de/translation.json";
import * as en from "../src/data/locales/en/translation.json";

// pass your locales for the i18n decorator
const decorators = decoratorsGetter(de, en);

export default { parameters, decorators, globalTypes };
