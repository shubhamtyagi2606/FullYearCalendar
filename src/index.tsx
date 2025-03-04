import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
export { default as FullYearCalendar } from "./components/Calendar";
export { default as DateGrid } from "./components/DateGrid";
export { default as MonthGrid } from "./components/MonthGrid";
export { default as YearGrid } from "./components/YearGrid";
export { default as Schedule } from "./components/Schedule";
export { default as DateBlock } from "./components/DateBlock";
export { default as DayGrid } from "./components/DayGrid";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
