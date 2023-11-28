import style from "./Error.module.css";

const Error = ({ title, status }) => {
    return(
        <div className={style.pageError}>
            <h2>{ status }</h2>
            <h1>{ title }</h1>
        </div>
    );
}

export { Error };