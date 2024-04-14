import React, { useEffect ,useState} from "react";
import GoogleLogin from "react-google-login";
import { Card, CardBody, CardTitle } from "reactstrap";
import BgVideo from "../assets/game.mp4";
import Audio from "../assets/bg_game.mp3"



const gradient = {
  padding: "20px",
  width: "100%",
  height: "740px",
  position: "relative",
};

const videoStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: "1",
};

const contentStyle = {
  position: "relative", // Ensure content is positioned relative to its container
  zIndex: "2", // Set a higher zIndex to ensure content is displayed above the video
};


export default function Login() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  useEffect(() => {
    const audio = document.getElementById("bgAudio");
    if (audio) {
      if (isAudioPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isAudioPlaying]);
  const successRes = (res) => {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("email", res.profileObj.email);
    localStorage.setItem("name", res.profileObj.givenName);
    console.log(res.profileObj);
    window.location.pathname = "/game";
  };

  const failureRes = (res) => {
    console.log(res);
  };

  return (
    <div style={gradient}>
      <video autoPlay loop muted style={videoStyle} >
        <source src={BgVideo} type="video/mp4" />
      </video>
       <audio autoPlay loop style={{ display: 'none' }}>
        <source src={Audio} type="audio/mp3" />
      </audio> 

      <div style={contentStyle}>

      <h2 style={{ marginLeft:"600px" ,marginTop:"100px", font:"550px"}}>
        Welcome To Indian Heritage Game
      </h2>
      <br />

      <div className="d-flex justify-content-center">
        <Card style={{ padding: "10px",marginLeft:"600px",marginTop:"100px" }} className="resDiv">
          <CardBody>
            <CardTitle>
              <h3 style={{marginBottom:"30px"}}>Login/Signup</h3>
            </CardTitle>
          </CardBody>
          <CardBody >
            <GoogleLogin
              clientId="871321053050-mkn67jcqu3dkt6be0pel1nj82boh97kp.apps.googleusercontent.com"
              onSuccess={successRes}
              onFailure={failureRes}
              redirectUri="/game"
              buttonText={<b> Sign in with Google </b>}
              className="googlebutton mt-4 rounded-pill"
            />
          </CardBody>
        </Card>
      </div>
    </div>
    </div>
  );
}
