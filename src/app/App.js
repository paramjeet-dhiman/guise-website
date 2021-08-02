import { BrowserRouter } from "react-router-dom";
import { Routes } from './Routes';

export const App = () => {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

