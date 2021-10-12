import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../components/ui/header";
import { HomePage } from "../pages/home.page";
import { PeliculaPage } from "../pages/pelicula.page";

export const PagesRouter = () => {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />0
          <Route exact path="/peliculas" component={PeliculaPage} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
