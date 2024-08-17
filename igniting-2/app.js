import React from "react";
import ReactDOM from "react-dom/client";

const JSXHeading = (
	<>
		<h1>Hello World from JSX</h1>
		<p>I am JSX</p>
	</>
);
// const Heading = React.createElement("h1", { id: "heading" }, "Hello World");

const Fun = () => (
	<h1>
		Hello World
		{JSXHeading}
	</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fun />);