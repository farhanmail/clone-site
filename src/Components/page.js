import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import Logo from './helloFresh.png'

function Page () {
    return (
        <div className='body'>
            <Navbar bg="light" expand="lg" className='navbar' fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={Logo} style={{height:'50px'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className='ms-auto'
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">
                        <div >
                            <h4 style={{fontSize:'20px', color:'rgb(62, 219, 23)'}}><strong>Discover</strong></h4>
                            <text style={{fontSize:'15px'}}>find what you are looking for</text>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="/">
                        <div style={{}}>
                            <h4 style={{fontSize:'20px', color:'rgb(62, 219, 23)'}}><strong>Watch</strong></h4>
                            <text style={{fontSize:'15px'}}>watching becomes more fun and easy</text>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="/">
                        <div style={{}}>
                            <h4 style={{fontSize:'20px', color:'rgb(62, 219, 23)'}}><strong>Detox</strong></h4>
                            <text style={{fontSize:'15px'}}>add content that you find interesting</text>
                        </div>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div style={{marginTop:'85px'}}>
                <div className='content'>
                    <h2 style={{textAlign:'center', color:'rgb(62, 219, 23)'}}>The Decision Detox</h2>
                    <h2 style={{textAlign:'center', marginBottom:'60px'}}>starts tonight with your personalised meal plan.</h2>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">How many people are you cooking for?</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>1 people</option>
                        <option>2 people</option>
                        <option>3 people</option>
                        <option>4 people</option>
                        <option>5 people</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">What's your cooking style?</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Use Grilling </option>
                        <option>Use Steaming </option>
                        <option>Use Searing </option>
                        <option>Use Boiling </option>
                        <option>Use Baking</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Choose your favorite Cuisine :</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                        <option>Choose...</option>
                        <option>Thai Cuisine</option>
                        <option>Middle Eastern Cuisine</option>
                        <option>Vietnamese Cuisine</option>
                        <option>Indian Cuisine</option>
                        <option>Mexican Cuisine</option>
                        <option>Chinese Cuisine</option>
                        </select>
                    </div>
                    <div className='center'>
                        <button type="button" className="btn btn-success" style={{display:'flex', justifyContent:'center'}}>Generate plane</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;