import React from 'react';
import GoogleLogin from 'react-google-login';
import {
  Card, CardBody, CardTitle
} from 'reactstrap';

const gradient = {
  padding: "20px",
  width: "100%",
  height: "740px",
}

const videoStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: "-1",
}

export default function Login() {

  const successRes = (res) => {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("email", res.profileObj.email);
    localStorage.setItem("name", res.profileObj.givenName);
    console.log(res.profileObj);
    window.location.pathname = '/game';
  }

  const failureRes = (res) => {
    console.log(res);
  }

  return (
    <div style={gradient}>
      <video style={videoStyle} autoPlay loop muted>
        <source src="your-background-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 style={{ fontWeight: "bold", zIndex: "1",marginTop:'10rem' ,color:'black'}}>INDIAN HERITAGE GAMES</h1><br />

      <div className="d-flex justify-content-center">
        <Card style={{ padding: "10px", zIndex: "1" }} className="resDiv">
          <CardBody>
            <CardTitle>
              <h3 style={{ fontWeight: "bold" ,textAlign:"center" ,marginTop:"5rem",fontSize:'2rem',color:'black'}}>Login/Signup</h3>
            </CardTitle>
          </CardBody>
          <CardBody style={{textAlign:"center"}}>
            <GoogleLogin
            style={{padding:'5rem'}}
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
  );
}
