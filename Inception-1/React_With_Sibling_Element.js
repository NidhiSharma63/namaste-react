
const h1 = React.createElement("h1", { id: "heading" }, "Hello World");
const h2 = React.createElement("h2", { id: "heading" }, "Hello World from h2");

const child = React.createElement("div", { id: "child" }, [h1, h2]); // one way but it will throw error so we will see in next ep
const parent = React.createElement("div", { id: "parent" }, child, child); // another way
// first is elemt type second is attributes third is children ()
// children is something what we want to put inside the element

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);
