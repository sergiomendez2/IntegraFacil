export const PartesTeoria = () => {
    const containerStyle = {
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const leftColumnStyle = {
        flex: '1',
        padding: '20px',
        width: '100%',
    };

    const rightColumnStyle = {
        flex: '1',
        padding: '20px',
        width: '100%',
    };

    const headerStyle = {
        fontSize: '24px',
        color: '#333',
    };

    const textStyle = {
        fontSize: '16px',
        color: 'black',
        textAlign: 'justify',
        margin: '20px 0',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        margin: '20px 0',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    // CSS en línea para pantallas pequeñas
    const mobileStyles = {
        containerStyle: {
            flexWrap: 'wrap',
        },
        leftColumnStyle: {
            flex: '1',
            padding: '20px',
            width: '100%', // Añade un ancho del 100% para que ocupe toda la pantalla en dispositivos móviles.
        },
        rightColumnStyle: {
            flex: '1',
            padding: '20px',
            width: '100%', // Añade un ancho del 100% para que ocupe toda la pantalla en dispositivos móviles.
        },
        // Ajusta otros estilos según sea necesario para dispositivos móviles.
    };

    // Aplicar los estilos en línea en función de la ventana de visualización.
    const stylesToApply = window.innerWidth < 768 ? mobileStyles : {};

    return (
        <div style={{ ...containerStyle, ...stylesToApply.containerStyle }}>
            <div style={{ ...leftColumnStyle, ...stylesToApply.leftColumnStyle }}>
                <h1 style={headerStyle}>Integral por Partes - Teoría</h1>

                <p style={textStyle}>
                    Particularmente útil para integrandos que contengan funciones algebraicas. Si 𝑢 y 𝑣 son funciones de 𝑥 y tienen derivadas continuas, entonces:
                </p>
                <img src="./images/img_1.png" alt="Sustitución" style={imageStyle} />
                <ul style={textStyle}>
                    <li>Volver 𝑑𝑣 la porción más complicada y 𝑢 el valor restante del integrando</li>
                    <li>Intentar tomar como 𝑢 la porción del integrando, cuya derivada de la función sea más simple que 𝑢 y 𝑑𝑣 el factor restante del integrando.</li>
                </ul>
            </div>

            <div style={{ ...rightColumnStyle, ...stylesToApply.rightColumnStyle }}>
                <p style={textStyle}>
                    Una forma práctica de poder elegir qué tomar como 𝑢 es utilizando el análisis por medio de ILATE
                </p>
                <ul style={textStyle}>
                    <li><strong style={{ color: 'red' }}>I - </strong>  <strong style={{ color: 'red' }}>Inversas</strong></li>
                    <li><strong style={{ color: 'purple' }}>L - </strong>  <strong style={{ color: 'purple' }}>Logarítmicas</strong></li>
                    <li><strong style={{ color: 'magenta' }}>A - </strong>  <strong style={{ color: 'magenta' }}>Algebraicas</strong></li>
                    <li><strong style={{ color: 'limegreen' }}>T - </strong>  <strong style={{ color: 'limegreen' }}>Trigonométricas</strong></li>
                    <li><strong style={{ color: 'orange' }}>E - </strong>  <strong style={{ color: 'orange' }}>Exponenciales</strong></li>
                </ul>
            </div>
        </div>
    );
};
