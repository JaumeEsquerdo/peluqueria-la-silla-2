import './Privacidad.css';
import { Header } from '../../components/Header/Header'
import PrivacidadCondiciones from '../../components/AcordeonPyT/Acordeon.jsx';


export const Privacidad = () => {
    return ( 
        <>
        <Header />
        <main>
            <PrivacidadCondiciones />
        </main>
        </>
    );
}