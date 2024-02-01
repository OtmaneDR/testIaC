import { LicenseInfo } from "@mui/x-data-grid-pro";
import axios from "axios";
import ReactDOM from "react-dom/client";

import App from "./App";

LicenseInfo.setLicenseKey(
    "cd575c0f579053f91d83626d4528d540Tz03NDc5MixFPTE3MjY0MjEzNjUwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI="
);

// Change axios config to send cookies on every request
axios.defaults.withCredentials;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
