import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Giphy from "./Components/Giphy";
import "./App.css";

export default function App() {
  const [gifUrl, setGifUrl] = useState({});
  const [gifTitle, setGifTitle] = useState([]);
  const key = "0s1Z0uR11VyND5CmDd1vwTI7SURf5w2J";

  const makeApiCall = async () => {
    const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    try {
      const res = await fetch(gifUrl);
      const json = await res.json(); //this changes the response from json into a js object
      setGifUrl({ image_url: json.data.images.downsized_large.url });
    } catch (err) {
      console.log("this is an error", err);
    }
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const handleSubmit = async (val) => {
    if (val) {
      const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${val}&limit=1`;
      const res = await fetch(gifUrl);
      const json = await res.json();
      setGifUrl({ image_url: json.data[0].images.downsized_large.url });
    } else {
      makeApiCall();
    }
  };

  return (
    <div className="App">
      <h1>Welcome To Giphy 😁</h1>
      <Form handleSubmit={handleSubmit} />
      <br />
      <br />
      {gifUrl.image_url ? (
        <Giphy gifUrl={gifUrl} />
      ) : (
        <h1>Get a random gif </h1>
      )}
    </div>
  );
}
