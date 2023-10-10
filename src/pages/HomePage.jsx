export const HomePage = () => {
    return (
        <>
            <section className="welcome-page">
                <div className="banner-container">
                    <img
                        src="./images/banner.jpg"
                        alt="Welcome Banner"
                        className="banner-image"
                    />
                </div>
                <div className="content-overlay">
                    <div className="welcome-content">
                        <h6>Bienvenid@ a</h6>
                        <h1>IntegraFácil</h1>
                        <p>Tu puerta de entrada al aprendizaje</p>
                    </div>
                </div>
            </section>
        </>
    );
};