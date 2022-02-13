import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "remix";

import tailwindStyles from "./styles/index.css";

export let links = () => {
    return [
        // {
        //   rel: "stylesheet",
        //   href: darkStylesUrl,
        //   media: "(prefers-color-scheme: dark)",
        // },
        { rel: "stylesheet", href: tailwindStyles },
    ];
};

export function meta() {
    return { title: "My Remix App" };
}

export default function App() {
    return (
        <html lang="en" data-theme="wireframe">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
