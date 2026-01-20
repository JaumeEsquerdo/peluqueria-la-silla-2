import { useContext } from "react";
import { ReservaContext } from "../context/ReservaContext.js";

export const useReserva = () => {
  const context = useContext(ReservaContext);
  if (!context)
    throw new Error("useReserva no está dentro de un ReservaProvider");
  return context;
};
