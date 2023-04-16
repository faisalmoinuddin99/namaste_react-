import React from "react";
import ReactDOM from "react-dom/client";

/*
<h1>
    <h2>
        <div>
            <h3 class="title">Namaste React</h3>
        </div>
    </h2>
</h1>
*/

const header = React.createElement("h1", {}, [
  React.createElement("h2", {}, [
    React.createElement(
      "div",
      {},
      React.createElement("h3", { className: "title" }, "Namaste React")
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
