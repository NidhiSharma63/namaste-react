
const h1 = React.createElement("h1", { id: "heading" }, "Hello World");
const child = React.createElement("div", { id: "child" }, h1);
const parent = React.createElement("div", { id: "parent" }, child);
// first is elemt type second is attributes third is children ()
// children is something what we want to put inside the element

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);
