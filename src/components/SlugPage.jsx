import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SlugPage = () => {
  const { slug } = useParams();
  const [longURL, setLongURL] = useState("");


  useEffect(() => {
    try {
      var token= localStorage.getItem("jwttoken");
      axios
        .get("http://localhost:8080/" + slug,{
          // headers: {
          //   Authorization: `Bearer ${token}`,
          //   "Content-Type": "application/json",
          // },
          // required when storing jwt in localStorage. Now it is in Cookie with HttpOnly as true
          withCredentials: true
        })
        .then((data) => {
          setLongURL(data.data);
          if (data.data["status"] === "EXPIRED") {
            setLongURL("EXPIRED");
          } else if (data.data["status"] === "ACTIVE") {
            setLongURL(data.data["longUrl"]);
            window.location.href = data.data["longUrl"];
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            setLongURL("Not Found");
          } else {
            console.log("Unexpected  server error");
          }
        });
    } catch (err) {
      
    }
  }, [longURL]);

  return (
    <div>
      {longURL === "EXPIRED" ? (
        <>Your short URL: {longURL}</>
      ) : (
        <>{longURL === "Not Found" ? <>Your short URL: {longURL}</> : <></>}</>
      )}
    </div>
  );
};

export default SlugPage;
