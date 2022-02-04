import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const MyJobsScreen = () => {



  return (
  <Container fluid className='jobContainer text-light'>
      <Row className='JobRow2'>
        <Col className=''>
          <h1 className='myJobs text-center'>My Jobs</h1>
          <div className='titleLine d-flex justify-content-center'>
            <div className='line1'></div>
            <div className='line2Container'>
              <div className='line2'></div>
            </div>
            <div className='line3'></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          I am still working on the site, been busy with some project lately.....
        </Col>
      </Row>
  </Container>
  );
};

export default MyJobsScreen;
