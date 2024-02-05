import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Добро пожаловать {props.username}</h2>;
    const loginPrompt =  <h2 className="login-prompt">Пожайлуста войдите чтобы продолжить</h2>;
   
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Пользователь",
}
export default UserGreeting