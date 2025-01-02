import PropTypes from "prop-types";

function UserGreating(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.userName}</h2>
  );
  const loginPropmpt = (
    <h2 className="login-prompt">Plese log in to continue</h2>
  );
  return props.isLoggedIn ? welcomeMessage : loginPropmpt;
}

UserGreating.protoTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};


UserGreating.defaultProps = {
  isLoggedIn: true,
  userName: "Guest",
}
export default UserGreating;
