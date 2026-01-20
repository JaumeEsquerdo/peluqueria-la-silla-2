import { Navigate } from "react-router";
import { useReserva } from "@/hooks/useReserva";

const ProtectedConfirmada = ({ children }) => {
  const { reserva } = useReserva();

  const isValid =
    reserva.servicio &&
    reserva.fecha &&
    reserva.hora &&
    reserva.nombre &&
    reserva.telefono &&
    reserva.email &&
    (reserva.servicio?.servicio !== "OTRO" ||
      (reserva.notas && reserva.notas.trim() !== ""));

  if (!isValid) {
    return <Navigate to="/reservas" replace />;
  }

  return children;
};

export default ProtectedConfirmada;
