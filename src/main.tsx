import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./screens/login.tsx"
import { ChakraProvider } from "@chakra-ui/react"
import GenerateQRCode from "./screens/GenerateQRCode.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/qr-code",
		element: <GenerateQRCode />,
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
)
