import { BrowserRouter } from "react-router-dom";
import { Routes } from './Routes';

export const App = () => {
  return (
    <div className="antialiased bg-dark-primary text-gray-100 ">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

