 const root = ReactDOM.createRoot(document.querySelector(".root"));
	const h1 = React.createElement(
		"h1",
		{ id: "heading", "data-id": "nidhi", class: "heading" },
		"Hello World",
	);

	// console.log(h1); // it is an object creaed by create Element
	root.render(h1);