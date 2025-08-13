"use client";
import { createContext, useContext, useState } from "react";
interface IAppoiontment {
  appointmentForm: boolean;
  setAppointmentForm: React.Dispatch<React.SetStateAction<boolean>>;
}

// 1. Create the context
const AppointmentContext = createContext<IAppoiontment | null>(null);

// 2. Create the provider component
export const AppointmentProvider = ({ children }: any) => {
  const [appointmentForm, setAppointmentForm] = useState(false);


  return (
    <AppointmentContext.Provider
      value={{ setAppointmentForm, appointmentForm }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

// 3. Custom hook for easy access
export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
