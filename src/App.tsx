import { StrictMode } from "react";
import { Route, Routes } from "react-router-dom";

import ToolContext from "@bonprix/backoffice-tool-library/contexts/ToolContext";
import { initializeCloudwatchRumMonitoring } from "@bonprix/backoffice-tool-library/utils";

import * as de from "@locales/de/translation.json";
import * as en from "@locales/en/translation.json";
import routes from "./routesConfig";

initializeCloudwatchRumMonitoring(import.meta.env.VITE_FE_MONITORING_APPLICATIONID, import.meta.env.MODE);

function App() {
    return (
        <ToolContext
            appshellUrl={import.meta.env.VITE_APPSHELL}
            keycloak={{
                keycloakUrl: import.meta.env.VITE_KEYCLOAK_AUTH_ENDPOINT,
                keycloakClientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
            }}
            i18n={{ deJson: de, enJson: en }}
        >
            <StrictMode>
                <Routes>
                    {routes.map((route) => {
                        return <Route path={route.path} key={route.id} element={<route.component />} />;
                    })}
                </Routes>
            </StrictMode>
        </ToolContext>
    );
}

export default App;
