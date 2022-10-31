import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieList from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import { APIKEY } from "../../common/api/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Ring";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
        .catch(error => {
          console.log(error);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);
  return (
    <>
      <div className="banner-img"></div>;
      <MovieList />;
    </>
  );
};

export default Home;
