import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";

import { usePageProperties } from "@bonprix/backoffice-tool-library/utils/messageTransfer";

const BREADCRUMBS = [{ name: "Main", link: "/" }];
const PAGETITLE = "Main Tool";

export default function Main() {
    const { t } = useTranslation();
    const auth = useAuth();

    useEffect(() => {
        usePageProperties(BREADCRUMBS, PAGETITLE);
    }, []);

    return (
        <Link to="/test">
            <p>{t("hello", { name: auth.user?.profile.given_name ? auth.user.profile.given_name : "" })}</p>
        </Link>
    );
}
