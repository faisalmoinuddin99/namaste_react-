import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    // Api calls this method

    const data = await fetch("https://api.github.com/users/faisalmoinuddin99");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    clearInterval(this.timer);
  }
  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <h2>Name: {name} </h2>
        <h3>Location: {location} </h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
