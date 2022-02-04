import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {

  return (
    <header className='headerContainer'>
      <Nav fill='true' variant="tabs"  className='bg-dark'>
        <Nav.Item>
          <LinkContainer to={'/'}>
            <Nav.Link   eventKey="home"><strong>Home</strong> </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='/jobs'>
            <Nav.Link eventKey="myJobs"><strong>My Jobs</strong> </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="resume" > <strong>Resume</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contactMe"> <strong>Contact Me</strong></Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;

