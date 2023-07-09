import React from 'react';
import Header from './Header';
import {Row,Col, Button, Container, ThemeProvider} from 'react-bootstrap'
import pic1 from "../Assets/hero.png"
import { Link } from 'react-router-dom';
import "./Home.css"
import Footer from './Footer';
/**
 * Renders the Home component displaying a hero section with a header and footer.
 *
 * @return {JSX.Element} Returns the JSX component to be rendered.
 */
const Home = () => {
    return (
        <div>
            <Header/>
        
            <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">

  <div className='hero'>
            <Container>
                <div className="herotext">
                    <Row>
                    <Col md={6}>
                        <h1 className='easy'>Easy-To-Use
                           <span className='point'><br/>Point of sale</span> 
                        </h1>
                        <h3 className='sell'>You may start selling in a matter of minutes
                        <br /> and easy to use. Appropriate for all devices.</h3>
                        <Link to = "/pos">
                        <Button variant="success" className='now' >Get Started Now!!!!</Button>
                        </Link>
                        </Col>
                        <Col md={6}>
                        <img src={pic1} alt="pos" className='herobg' />
                        </Col>

                    </Row>
                </div>
                </Container>
              
            </div>
            <Footer/>

    
 
</ThemeProvider>
    </div>       
    );
}

export default Home;
