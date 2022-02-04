import React, {useEffect} from 'react';
import Typical from 'react-typical'
import {Row, Col, Container, Button} from 'react-bootstrap'
import { Particle } from 'jparticles'
import { Link } from 'react-router-dom';
// import MyJobsScreen from '../components/MyJobsScreen'

const HomeScreen = () => {

  useEffect(() => {
    new Particle('#demo', {
      range: 1000,
      proximity: 100,
    })
  }, []);
  

  return (
    <Container fluid className='homeScreen'>
      <div id="demo" className='particles'></div>
      <Row className='text-center dayveCont'>
        <Col xs={12} sm={8} className='row1-col1'>

          <div style={{fontSize:'24px'}} className='m-5'>
            Hello, I'm <span className='highlighted-text'>Okafor David</span>
          </div>
          <div className='m-5'>
            <h1 className='dayve-typical display-3 my-5'>
              <Typical
                steps={[
                  'Highly motivated 💪' , 3000, 
                  'Result Oriented 👌', 3000,
                  'Full Stack Dev 💻', 3000,
                  'Cross Platform Dev 🌐', 3000,
                  'MERN Stack Dev 😎', 3000
              ]}
                loop={Infinity}
              />
            </h1>
            <span className='dayve-note m-5'>
              knack for scalability, security, optimization, responsiveness and above all meeting customer deadline
            </span>
            <div>
              <button className='btn p-2 px-4 mx-2 my-5 hire-1 hire-me ' style={{borderRadius:'25px'}}> 
                hire me
              </button>
              <a href="/images/dave-cv.pdf" download={'Okafor David.pdf'}>
                <button style={{borderRadius:'25px'}} className='btn p-2 mx-2 my-5 px-3 hire-me hire-2'><i className="fa">&#xf0ab;</i> get resume </button>
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={4} className='d-flex justify-content-center align-items-center dayve-pics-back'>
          <img src="../images/dave.jpg" alt="dave" className='dayve-pics' width="250" height="250"/>
        </Col>
      </Row>
      <Row className='jobRow my-5 text-light'>
        <Col xs={12}>
          <h1 className='myJobs text-center pt-3'>My Jobs</h1>
          <div className='titleLine d-flex justify-content-center'>
            <div className='line1'></div>
            <div className='line2Container'>
              <div className='line2'></div>
            </div>
            <div className='line3'></div>
          </div>
        </Col>

        <Col xs={12} className='myJobsCol2'>
          <div>
            <p className=''>
              Among numerous sample projects on my {' '}
              <a href="https://github.com/Dayvyno" rel="noreferrer" target={'_blank'} className='decoo'>GitHub</a>
              {' '} account, I consider the following two projects outstanding and worth investing on
            </p>
          </div>
          <div>
            <ul>
              <li>
                <strong>
                   <a href="https://dayveoshop.herokuapp.com/" target={'_blank'} rel="noreferrer" className='decoo' >
                     <span className='linked'>DayveOshop</span>
                     </a>
                  {' '} e-commerce  web app (MERN full stack project)
                </strong>
                  {' '} <a href="https://dayveoshop.herokuapp.com/" target={'_blank'} rel="noreferrer" class="btn decoo text-light">Launch Project{'>>'} </a>
                  {' '}
                  <Link to='/jobs'>
                   <Button class="btn btn-primary text-light">About Project {'>>'}</Button>
                  </Link> 
              </li>
              <li className='my-3'>
                <strong>
                  <a href="https://dayve-hotel.herokuapp.com/" target={'_blank'} rel="noreferrer" className='decoo' >
                     <span className='linked'>DayveHotel </span>
                     </a>
                  {' '} booking application (MERN full stack project)
                </strong>
                  {' '} <a href="https://dayve-hotel.herokuapp.com/" target={'_blank'} rel="noreferrer" className="btn decoo text-light">Launch Project{'>>'} </a>
                  {' '}
                  <Link to='/jobs'>
                    <Button class="btn btn-primary text-light">About Project {'>>'}</Button>
                  </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};

export default HomeScreen;
