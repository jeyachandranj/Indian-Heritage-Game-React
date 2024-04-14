import React from 'react';
import TopBar from './TopBar'; 
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Body = () => {
  return (
    <div style={{ backgroundColor: '#f2f2f2', animation: 'fadeIn 1s' }}>
      <TopBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
      <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg top width="150px" height="200px" src="Cricket.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Cricket</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Trumb Card game</CardSubtitle>
          <Button color="secondary" style={{ margin: '0 10px' }}>Button 2</Button>
          <Link to="/image/1">
            <Button>Play</Button>
          </Link>
        </CardBody>
      </Card>
        
        
        <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg top width="150px" height="200px" src="HandCricket.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Hand Cricket</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">cricket game</CardSubtitle>
            <Button color="secondary" style={{ margin: '0 10px' }}>Button 2</Button>
            <Link to="/image/2">
            <Button>Play</Button>
           </Link>          
         </CardBody>
        </Card>

        <Card style={{ width: '300px', margin: '10px' }}>
          <CardImg top width="150px" height="200px" src="RajaRani.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Game 3</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Description of Game 3</CardSubtitle>
            <Button color="secondary" style={{ margin: '0 10px' }}>Button 2</Button>
            <Link to="/image/3">
            <Button>Play</Button>
          </Link>          
          </CardBody>
        </Card>
        
        <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg top width="150px" height="200px" src="WW.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Game 2</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Description of Game 2</CardSubtitle>
            <Button color="secondary" style={{ margin: '0 10px' }}>Button 2</Button>
            <Link to="/image/1">
            <Button>Play</Button>
          </Link>
          </CardBody>
        </Card>

      </div>


      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        <Card style={{ width: '300px', margin: '10px' }}>
          <CardImg top width="150px" height="200px" src="Cricket.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Game 1</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Description of Game 1</CardSubtitle>
            <Button color="secondary" style={{ margin: '0 10px' }}>Button 2</Button>
            <Link to="/image/1">
            <Button>Play</Button>
          </Link>
          </CardBody>
        </Card>
        
        <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg top width="150px" height="200px" src="HandCricket.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Game 2</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Description of Game 2</CardSubtitle>
            <Button color="secondary" style={{ margin: '0 10px' }}>Button 2</Button>
            <Link to="/image/1">
            <Button>Play</Button>
          </Link>
          </CardBody>
        </Card>

        <Card style={{ width: '300px', margin: '10px' }}>
          <CardImg top width="150px" height="200px" src="RajaRani.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Game 3</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Description of Game 3</CardSubtitle>
            <Button color="secondary" style={{ margin: '0 10px' }}>Button 2</Button>
            <Link to="/image/1">
            <Button>Play</Button>
          </Link>
          </CardBody>
        </Card>
        
        <Card style={{ width: '300px', margin: '10px' }}>
        <CardImg top width="150px" height="200px" src="WW.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Game 2</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Description of Game 2</CardSubtitle>
            <Button color="secondary" style={{ margin: '0 10px' }}>Button 2</Button>
            <Link to="/image/1">
            <Button>Play</Button>
          </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Body;
