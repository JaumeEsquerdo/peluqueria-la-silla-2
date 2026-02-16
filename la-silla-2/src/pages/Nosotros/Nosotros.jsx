import "./Nosotros.css"

export const Nosotros = () => {
    return (
        <section className="Nosotros-body" id="nosotros">
            <h2 className="Nosotros-title">SOBRE NOSOTROS</h2>

            <div className="Nosotros-content">
                <div className="Nosotros-text">
                    <p>SOMOS UN EQUIPO APASIONADO POR EL ARTE DEL CABELLO.<br /><br />
                        Nos gusta el olor a navaja recién afilada, el sonido de las
                        tijeras y el ritual de sentarte en la silla. Aquí cada corte
                        refleja dedicación, precisión y respeto por el oficio.<br /><br />
                        Un sitio donde puedes desconectar, charlar y sentirte como en
                        casa. Porque una buena barbería no es solo un lugar, es una
                        experiencia.
                    </p>
                </div>

                <div className="Nosotros-image Nosotros-imgTop">
                    <img
                        src="imgs/img-right.png"
                        alt="Imagen Barbería"
                        title="Imagen Barbería"
                    />
                </div>

                <div className="Nosotros-image Nosotros-imgBottom">
                    <img
                        src="imgs/img-left.png"
                        alt="Imagen Peluquería"
                        title="Imagen Peluquería"
                    />
                </div>

                <div className="Nosotros-text">
                    <p>
                        Combinamos técnica, estilo y creatividad para encontrar lo que
                        realmente encaja contigo, entender tu personalidad y tu actitud.<br /><br />
                        NOS GUSTA CONOCERTE, ENTENDER TU PERSONALIDAD Y HACER EL MEJOR
                        CORTE PARA TI.<br /><br />
                        Para nosotros, tu look es más que una imagen. Es una extensión de
                        quién eres, de cómo te mueves por el mundo y de la confianza que
                        transmites. Sin complicaciones. Solo tú, en tu mejor versión.
                    </p>
                </div>
            </div>
        </section>
    );
}