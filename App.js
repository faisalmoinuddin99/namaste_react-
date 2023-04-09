import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 className="heading">Namaste React using JSX</h1>;

console.log("JSX: ");
console.log(heading);

// React Functional Component
const HeadingComponent1 = () => {
  // return some piece of JSX
  return <h1 className="heading">Namaste React Functional Component 1</h1>;
};

const Title = () => <h2>I am React Functional Component Title</h2>;

const HeadingComponent2 = () => (
  <div id="container">
    <h1 className="heading">Bonjour React Functional Component 2</h1>
    {/* Component Composition */}
    <Title />
  </div>
);

const NavigationComponet = () => {
  return (
    <div id="navigation">
      <Title />
      <HeadingComponent1 />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
