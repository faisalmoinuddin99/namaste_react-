import { Component } from "react";
import UserClass from "./UserClass";

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

        <UserClass name={"Akshay Saini Class"} location={"Dheradun Class"} />
      </div>
    );
  }
}

export default About;
