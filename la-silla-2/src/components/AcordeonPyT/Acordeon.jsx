export const secciones = [
    {
        titulo: "Política de Privacidad",
        contenido: [
            "En La [2] Silla nos comprometemos a proteger la privacidad de nuestros clientes y usuarios. Esta política describe cómo recopilamos, utilizamos y protegemos su información personal.",

            "Recopilamos datos personales únicamente cuando el usuario los proporciona voluntariamente, como al solicitar una cita, rellenar formularios de contacto o suscribirse a comunicaciones.",

            "Los datos que podemos recopilar incluyen nombre, teléfono, correo electrónico y cualquier otra información necesaria para prestar nuestros servicios.",

            "La [2] Silla utiliza esta información para gestionar citas, responder consultas, mejorar la atención al cliente y, si el usuario lo autoriza, enviar comunicaciones informativas o promocionales.",

            "No compartimos datos personales con terceros salvo obligación legal o cuando sea necesario para la prestación del servicio, garantizando siempre la confidencialidad de la información.",

            "Los usuarios pueden solicitar en cualquier momento el acceso, rectificación o eliminación de sus datos personales a través de los canales de contacto oficiales de La [2] Silla.",

            "Aplicamos medidas de seguridad técnicas y organizativas para proteger los datos personales frente a accesos no autorizados, pérdida o alteración."
        ]
    },
    {
        titulo: "Condiciones de Uso",
        contenido: [
            "El acceso y uso del sitio web de La [2] Silla implica la aceptación de las presentes condiciones.",

            "El usuario se compromete a utilizar la web de forma lícita y respetuosa.",

            "La información mostrada en la web tiene carácter informativo y puede ser modificada sin previo aviso, incluyendo precios, servicios o promociones.",

            "La [2] Silla no se responsabiliza del uso indebido de la información contenida en la web ni de posibles daños derivados del acceso o uso del sitio.",

            "El usuario se compromete a facilitar información veraz cuando solicite una cita o complete formularios en la web."
        ]
    },
    {
        titulo: "Reservas y Cancelaciones",
        contenido: [
            "Las citas solicitadas a través de la web estarán sujetas a confirmación por parte de La [2] Silla.",

            "Se recomienda a los clientes avisar con la mayor antelación posible en caso de cancelación o modificación de una cita.",

            "La reiteración de cancelaciones sin previo aviso podrá limitar futuras reservas.",

            "La [2] Silla se reserva el derecho de modificar o cancelar citas por causas organizativas o de fuerza mayor, avisando al cliente con la mayor antelación posible."
        ]
    },
    {
        titulo: "Propiedad Intelectual",
        contenido: [
            "Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, diseño y material gráfico, son propiedad de La [2] Silla o cuentan con licencia de uso.",

            "Queda prohibida la reproducción, distribución o modificación de cualquier contenido sin autorización expresa del titular."
        ]
    },
    {
        titulo: "Legislación Aplicable",
        contenido: [
            "Las presentes condiciones se rigen por la legislación española.",

            "Cualquier conflicto que pudiera derivarse del uso del sitio web será sometido a los juzgados y tribunales que correspondan según la normativa vigente."
        ]
    }
];

import { useState } from "react";
import './Acordeon.css';

export default function PrivacidadCondiciones() {
    const [activo, setActivo] = useState(null);

    const toggle = (index) => {
        setActivo(activo === index ? null : index);
    };

    return (
        <>

            <div className="Contenedor-acordeon">
                <h2 className="Contenedor-titulo">Privacidad y Condiciones:</h2>

                {secciones.map((seccion, index) => (
                    <div key={index} className="Contenedor-seccion">
                        <button
                            onClick={() => toggle(index)}
                            className="Contenedor-btn"
                        >
                            {seccion.titulo}
                        </button>

                        <div className={`Contenedor-content ${activo === index ? 'activo' : ''}`}>

                            {seccion.contenido.map((parrafo, i) => (
                                <p key={i}>{parrafo}</p>
                            ))}

                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}