import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect } from "react";

import { Severity } from "@bonprix/backoffice-tool-library/contexts/NotificationProvider";
import useNotification from "@bonprix/backoffice-tool-library/hooks/useNotification";
import { usePageProperties } from "@bonprix/backoffice-tool-library/utils/messageTransfer";

import { test } from "./testGet";

const PAGETITLE = "Test Tool";

export default function Test() {
    const { notify, hide } = useNotification();

    useEffect(() => {
        usePageProperties(
            [
                { name: "Main", link: "/" },
                { name: "Test", link: "/test" },
            ],
            PAGETITLE
        );
    }, []);

    return (
        <Stack direction="row" gap={1} sx={{ py: 2 }}>
            <Button
                variant="contained"
                onClick={() => {
                    notify({ message: "Test erfolgreich", severity: Severity.success });
                    test();
                }}
            >
                Test Notification
            </Button>
            <Button variant="contained" onClick={hide}>
                Hide Notification
            </Button>
        </Stack>
    );
}
