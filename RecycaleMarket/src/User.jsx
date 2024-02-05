import PropTypes from 'prop-types'
function User(props){
    return(
        <div className="user">
            <p>Имя: {props.name}</p>
            <p>Возраст: {props.age}</p>
            <p>Поставщик: {props.isProvider ? "Да" : "Нет"}</p>
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isProvider: PropTypes.bool
}

User.defaultProps = {
    name: "Пользователь",
    age:0,
    isProvider:false
}
export default User