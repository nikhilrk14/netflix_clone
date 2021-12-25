import React, { Fragment } from "react";
import ListMovies from "../Components/Movies/ListMovies";
import PreLoadedVideo from "../Components/Slider/PreloadedVideo";

const HomePage = () => {
  return (
    <Fragment>
      <PreLoadedVideo />
      <ListMovies />
    </Fragment>
  );
};

export default HomePage;
