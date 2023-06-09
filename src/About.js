import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Us</h1>
        <h2>This is namaste React web Series🙏</h2>

        {/* <UserClass name={"First"} location={"Dheradun Class"} /> */}

        <User />
      </div>
    );
  }
}

/*
  - parent Constructor
  - Parent Render

    - First Constructor
    - First Render 

    - Second Constructor
    - Second Render

    <DOM UPDATED - IN SINGLE BATCH>

    - First ComponentDidMount
    - Second ComponentDidMount
    - Parent ComponentDidMount
*/

export default About;
