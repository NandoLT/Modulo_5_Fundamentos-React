import './NotFound.css';

const NotFound = () => {
    return (
        <>
        <h1>Ooops!!! Something go wrong!!</h1>
        <section className="error-container">
            <span className="four"><span className="screen-reader-text">4</span></span>
            <span className="zero"><span className="screen-reader-text">0</span></span>
            <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className="link-container">
            <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" className="more-link">Visit the original article</a>
        </div>
        </>
    )
}

export default NotFound;