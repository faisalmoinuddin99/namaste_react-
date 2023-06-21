import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is namaste React web Series🙏</h2>
      <User name={"Akshay Saini"} location={"Dheradun"} />
      <UserClass name={"Akshay Saini Class"} location={"Dheradun Class"} />
    </div>
  );
};

export default About;
