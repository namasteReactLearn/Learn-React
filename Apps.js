const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello React from Javascript");

console.log(heading) //it is an object

// when we are creating React.createElement it will create an Object not HTML
// ReactElement(Object) => HTML (Browser understands)

const parent = React.createElement(
    "div", 
    {id: "parent"}, 

    React.createElement(
        "div", 
        {id: "child"}, 
        // if we are trying to create multiple siblings we have to wrap it in an array

    [React.createElement("h1", {}, "I am a heading tag"),React.createElement("h2", {}, "I am a h2 heading tag")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);