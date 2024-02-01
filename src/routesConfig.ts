import Main from "@pages/Main";
import Test from "@pages/Test";

export interface Route {
    path: string;
    id: string;
    component: () => JSX.Element;
}

const routes: Array<Route> = [
    { path: "/", id: "main", component: Main },
    { path: "/test", id: "test", component: Test },
];

export default routes;
