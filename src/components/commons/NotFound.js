import './NotFound.css';

const NotFound = () => {
    return (
        <>
        <h1>Ooops!!! Something go wrong!!</h1>
        <section class="error-container">
            <span class="four"><span class="screen-reader-text">4</span></span>
            <span class="zero"><span class="screen-reader-text">0</span></span>
            <span class="four"><span class="screen-reader-text">4</span></span>
        </section>
        <div class="link-container">
            <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" class="more-link">Visit the original article</a>
        </div>
        </>
    )
}

export default NotFound;