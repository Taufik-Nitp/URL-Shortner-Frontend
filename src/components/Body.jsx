import React, { useRef, useState ,useEffect} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate} from "react-router-dom";

export default function BasicFormControl() {
  const [LongURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const navigate= useNavigate();
  var token;
  const handleLongURL = function (e) {
    setLongURL(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
      token= localStorage.getItem("jwttoken")
    setShortURL("");

    await axios
      .post("http://localhost:8080/longtoshorturl", {
        url: LongURL,
      },{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        //  console.log(res.data)
        setShortURL(res.data);
      })
      .catch((err) => {
        console.log(
          "error has occured  in  generating the shorURL as URL is Invalid====+++>>>>>+++>>>>>"
        );
        setShortURL("");
        alert("Enter a valid URL !!!");
      });
    console.log(shortURL);
    console.log("hellllllloooooooooo");
  };


  useEffect(() => {
      token = localStorage.getItem("jwttoken");

    if(!token || token===""){
        navigate("/login")
    }
  }, [token]);


  return (
    <>
      <div className="body-outer">
        <div>
          <h4>Short Your URL</h4>
        </div>

        <div className="body-div">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Long URL: </label>
            <input
              id="url"
              type="text"
              onChange={handleLongURL}
              placeholder="Enter the long URL"
            />
            <br></br>
            <br></br>
            Short URL: <input id="shorturl" value={shortURL} />
            <br></br>
            <br></br>
            {/* <button type='submit'> Generate short URL</button> */}
            <Button id="submit-button" variant="contained" type="submit">
              Generate
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
