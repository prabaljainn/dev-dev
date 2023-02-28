import React, { useEffect, useState } from "react";
import "./homepage.css";
import Chip from "./components/Chips";
const details = JSON.parse(localStorage.getItem("details"));
const preferences = JSON.parse(localStorage.getItem("preferences"));
const location = localStorage.getItem("location");
function getDate(x) {
  var date = new Date(x);
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();
  return `${d}/${m}/${y}`;
}
function getTime(x) {
  var date = new Date(x);
  var h = date.getHours();
  var m = date.getMinutes();

  return `${h}:${m}`;
}

export default function Homepage() {
  const [blog, setBlog] = useState({
    status: "ok",
    totalResults: 98494,
    articles: [
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Insider Monkey Transcripts",
        title:
          "AVITA Medical, Inc. (NASDAQ:RCEL) Q4 2022 Earnings Call Transcript",
        description:
          "AVITA Medical, Inc. (NASDAQ:RCEL) Q4 2022 Earnings Call Transcript February 23, 2023 Operator: Good day and thank you for standing by. Welcome to AVITA...",
        url: "https://finance.yahoo.com/news/avita-medical-inc-nasdaq-rcel-111216593.html",
        urlToImage:
          "https://media.zenfs.com/en/insidermonkey.com/f90f8366dd6ecc85d3b487051d267b39",
        publishedAt: "2023-02-26T11:12:16Z",
        content:
          "AVITA Medical, Inc. (NASDAQ:RCEL) Q4 2022 Earnings Call Transcript February 23, 2023\r\nOperator: Good day and thank you for standing by. Welcome to AVITA Medical Fourth Quarter 2022 Earnings Conferenc… [+14195 chars]",
      },
    ],
  });

  useEffect(() => {
    console.log("USE EFFECT 2");
    const url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9cfa008654b04706bd26f469f8e4d78a";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBlog(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  // console.log(Date(blog.articles[0].publishedAt).toDateString);
  const [loc, setLoc] = useState({
    current: {
      temp_c: "...",
      condition: {
        text: "...",
        icon: "https://i.ibb.co/2qV7BRH/Youtube-loading-symbol-1-wobbly.gif",
      },
      wind_mph: "...",
      wind_kph: "...",
      pressure_mb: "...",
      humidity: "...",
    },
  });
  useEffect(() => {
    console.log("USEEFFECT 1");
    const lat = JSON.parse(location).latitude;
    const lng = JSON.parse(location).longitude;
    const url = `http://api.weatherapi.com/v1/current.json?key=a124fc156be0496fbca154859221606&q=${lat},${lng}&aqi=no
    `;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setLoc(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const [niggas, setNigga] = useState(preferences);
  const closeChipHandler = (e) => {
    setNigga({ ...niggas, [e]: false });
  };

  return (
    <>
      <div className="homepage">
        <div className="homepage-left">
          <div className="left-container1">
            <div className="homep-img-c">
              <img src="https://iili.io/HMDqD74.png" alt="" />
            </div>
            <div className="homep-text-top-section">
              <p>
                <span className="span1">{details.Name}</span>
                <br />
                <span className="span2">{details.Email}</span>
                <br />
                <span className="span3">{details.UserName}</span>
              </p>

              <div className="homep-chip-container">
                {Object.keys(niggas).map((key) => {
                  if (niggas[key] === true) {
                    return (
                      <>
                        <Chip
                          color="#9F94FF"
                          handler={closeChipHandler}
                          field={key}
                        ></Chip>
                      </>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </div>
            </div>
          </div>
          <div className="left-container2">
            <div className="c2-top">
              <p>{new Date().toLocaleDateString()}</p>
              <p>{date.toLocaleTimeString()}</p>
            </div>

            <div className="c2-bottom flex-row">
              <div className="bottom1">
                <img
                  id="b1-1"
                  src={loc ? loc.current.condition.icon : "Loading...."}
                  alt=""
                />
                <p id="b1-2">
                  {loc ? loc.current.condition.text : "Loading ..."}
                </p>
              </div>

              <div className="bottom2">
                <p id="b2-1">🌡️{loc ? loc.current.temp_c : "Loading ..."}°C</p>
                <p id="b2-2">
                  {loc ? loc.current.pressure_mb : "Loading ... "} ‎mbar <br />
                  Pressure
                </p>
              </div>

              <div className="bottom3">
                <p id="b3-1">
                  💨{loc ? loc.current.wind_kph : "Loading ..."} km/h
                  <br /> <span>Wind</span>
                </p>
                <br />
                <p id="b3-2">
                  💦{loc ? loc.current.humidity : "Loading ..."}%
                  <br />
                  <span>Humidity</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="homepage-right">
          <div className="right-container flex-column">
            <div
              style={{
                backgroundImage: `url(${blog.articles[0].urlToImage})`,
              }}
              className="right-top flex"
              alt=""
            >
              <div className="blog-title">
                <p>{blog.articles[0].title}</p>
                <p>
                  {" "}
                  {getDate(blog.articles[0].publishedAt)} |{" "}
                  {getTime(blog.articles[0].publishedAt)}
                </p>
              </div>
            </div>

            <div className="blog-body">
              <p className="blog-body-p">{blog.articles[0].content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
