import "./PropsF.css";
function PropsF(props) {
    return (
        <div>
            <label>{props.username}</label>
            <input className={"user"} type="text" placeholder="Enter Username"></input>
        </div>
    )

};
export default PropsF;