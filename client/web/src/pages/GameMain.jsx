import React from 'react';
import TopBar from './TopBar'; 
import '../pages/RPS.css'
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Body = () => {
  return (
    <div style={{ backgroundColor: '#f2f2f2', animation: 'fadeIn 1s' }}>
      <TopBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
      <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg className='cardimage' top width="150px" height="200px" src="Cricket.jpg" alt="Card image cap" />
        <CardBody style={{marginTop:"10px"}}>
          <CardTitle  className='cardtitle' tag="h5">Cricket</CardTitle>
          <Button className='btn' color="secondary">Rule</Button>
          <Link to="/image/1">
            <Button className='btn' style={{marginLeft:'10px'}}>Play</Button>
          </Link>
        </CardBody>
      </Card>
      <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg className='cardimage' top width="150px" height="200px" src="WW.jpg" alt="Card image cap" />
          <CardBody style={{marginTop:"10px"}}>
            <CardTitle className='cardtitle' tag="h5">WWE</CardTitle>
            <Button className='btn' color="secondary" >Rule</Button>
            <Link to="/image/1">
            <Button className='btn' style={{marginLeft:'10px'}}>Play</Button>
          </Link>
          </CardBody>
        </Card>

        <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg className='cardimage' top width="150px" height="200px" src="RajaRani.jpg" alt="Card image cap" />
          <CardBody style={{marginTop:"10px"}}>
            <CardTitle className='cardtitle'  tag="h5">Raja Rani</CardTitle>
            <Button className='btn' color="secondary">Rule</Button>
            <Link to="/image/1">
            <Button className='btn' style={{marginLeft:'10px'}}>Play</Button>
          </Link>
          </CardBody>
        </Card>
        
        
        <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg className='cardimage' top width="150px" height="200px" src="HandCricket.jpg" alt="Card image cap" />
          <CardBody style={{marginTop:"10px"}}>
            <CardTitle className='cardtitle' tag="h5">Hand Cricket</CardTitle>
            <Button className='btn' color="secondary" >Rule</Button>
            <Link to="/image/2">
            <Button className='btn' style={{marginLeft:'10px'}}>Play</Button>
           </Link>          
         </CardBody>
        </Card>

        
        
        

      </div>



      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>

      <Card style={{ width: '300px', margin: '10px' }}>
          <CardImg className='cardimage' top width="150px" height="200px" src="rock.jpg" alt="Card image cap" />
          <CardBody style={{marginTop:"10px"}}>
            <CardTitle className='cardtitle' tag="h5">Rock Paper Scissors</CardTitle>
            <Button className='btn' color="secondary">Rule</Button>
            <Link to="/image/3">
            <Button className='btn' style={{marginLeft:'10px'}}>Play</Button>
          </Link>          
          </CardBody>
        </Card>
        <Card style={{ width: '300px', margin: '10px' }}>
          <CardImg className='cardimage' top width="150px" height="200px" src="snake.jpg" alt="Card image cap" />
          <CardBody style={{marginTop:"10px"}}>
            <CardTitle className='cardtitle' tag="h5">Snake and Ladder</CardTitle>
            <Button className='btn' color="secondary" >Rule</Button>
            <Link to="/image/1">
            <Button className='btn' style={{marginLeft:'10px'}}>Play</Button>
          </Link>
          </CardBody>
        </Card>
        
        <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg className='cardimage' top width="150px" height="200px" src="pallanguli.jpg" alt="Card image cap" />
          <CardBody style={{marginTop:"10px"}}>
            <CardTitle className='cardtitle' tag="h5">Pallanguli</CardTitle>
            <Button className='btn' color="secondary" >Rule</Button>
            <Link to="/image/1">
            <Button className='btn' style={{marginLeft:'10px'}}>Play</Button>
          </Link>
          </CardBody>
        </Card>

        <Card style={{ width: '300px', margin: '10px' }}>
          <CardImg className='cardimage' top width="150px" height="200px" src="chess.jpg" alt="Card image cap" />
          <CardBody style={{marginTop:"10px"}}>
            <CardTitle className='cardtitle' tag="h5">Game 3</CardTitle>
            <Button className='btn' color="secondary">Rule</Button>
            <Link to="/image/1">
            <Button className='btn' style={{marginLeft:'10px'}}>Play</Button>
          </Link>
          </CardBody>
        </Card>
        
        
      </div>
    </div>
  );
}

export default Body;
