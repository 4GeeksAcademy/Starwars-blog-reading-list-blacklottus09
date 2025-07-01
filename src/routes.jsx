import { createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Planet } from "./pages/Planet";
import { Character } from "./pages/Character";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path="/character/:id" element={ <Character />} /> 
        <Route path="/planet/:id" element={ <Planet />} />  
      </Route>
    )
);