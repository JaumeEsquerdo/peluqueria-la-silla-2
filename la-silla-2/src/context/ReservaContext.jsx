import { useState } from "react";
import { ReservaContext } from "./ReservaContext";

export const ReservaProvider = ({ children }) => {
  const [reserva, setReserva] = useState({
    servicio: null,
    fecha: null,
    hora: null,
    nombre: "",
    telefono: "",
    email: "",
    notas: "",
  });

  const updateReserva = (data) => setReserva((prev) => ({ ...prev, ...data }));

  return (
    <ReservaContext.Provider value={{ reserva, updateReserva }}>
      {children}
    </ReservaContext.Provider>
  );
};
