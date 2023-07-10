import './Web.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { FaFacebook, FaYoutube, FaTwitter, FaGooglePlus, FaPhoneAlt, FaTelegramPlane, FaSearch, FaFacebookMessenger, FaBell, FaAward, FaCar, FaCarSide, FaTruck, FaClock, FaTrophy, FaNewspaper, FaRegNewspaper } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
export default function Web() {
    return (
        <div className='ms-3 me-3'>
            <div className="header1">
                <a href=""><FaFacebook className='ms-3' /></a>
                <a href=""><FaGooglePlus /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaYoutube /></a>
                <span><FaPhoneAlt /></span> 0332-9368599
                <i><FaTelegramPlane /></i> abs@gmail.com
                <i><IoLocation /> </i>street ABC  , Swabi
            </div>
            <Navbar expand="lg" className='my-4 ms-3 me-5 '>
                <Container fluid>
                    <Navbar.Brand href="#" className='brand-name'>T R O N I X</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" my-2 my-lg-0 nav-links"
                            navbarScroll
                        >
                            <a><Nav.Link href="#action1">Home</Nav.Link></a>
                            <a><Nav.Link href="#action1">About</Nav.Link></a>
                            <a><Nav.Link href="#action1">Blog</Nav.Link></a>
                            <a><Nav.Link href="#action1">Gallery</Nav.Link></a>
                            <a><Nav.Link href="#action1"></Nav.Link></a>

                        </Nav>
                        
                    </Navbar.Collapse>
                    <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className=""
                                aria-label="Search"
                            />
                            <FaSearch className='search' />
                        </Form>
                    <FaFacebookMessenger className='msg-icon' />
                        <FaBell className='bell-icon'/>
                </Container>
            </Navbar>
            <Breadcrumb className='ms-5 my-4'>
                <Breadcrumb.Item href="#">Tronix</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <div className=' ms-5 my-5 me-5  about'>
                <h1> About Tronix </h1>
                <p>  dfv sdfv ejvs,dm evvm, md fvd dnm vdfnm vsdmvbsdbvefv dmv sdvdbvjvdfmv dvvd vdfvd vefjkv evdvd vdfvdf vsdmvbsdbvefv
                    dfbvjkfbvdf df df cnm dfjvsdv d dfvdvv dfrfgebfberufevf cd dfv vdf vevbrvvuvdfvbfvfvervhrfvvvuiv edfsdgdfgdfgdfgdfgdfg
                </p>
                <Carousel className='my-5' slide={false}>
                    <Carousel.Item>
                        <img style={{ borderRadius: '10px' }}
                            className="d-block w-100 slides"
                            src="https://img.freepik.com/free-vector/flat-design-food-facebook-cover_23-2149108159.jpg?w=740&t=st=1688644151~exp=1688644751~hmac=1dabb1570c0c795beb2d9d94d04fc1c4249a574348c889d76a2da9d8ad042bc7"
                            alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ borderRadius: '10px' }}
                            className="d-block w-100 slides"
                            src="https://img.freepik.com/free-vector/flat-design-delicious-breakfast-facebook-cover_23-2149143261.jpg?t=st=1688614210~exp=1688614810~hmac=8b01e5004800a180b9b832c7ab8d066b3b509f6bf26da5cdcee47b48b650f1d2"
                            alt="second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='choose'>
                <h1> Why Choosing Us !</h1>
                <div className='blocks'>
                    <div>
                        <FaAward style={{ color: 'rgb(238, 104, 15)', fontSize: '3pc' }} />
                        <h3 style={{ fontWeight: 'bold', marginTop: '1.5pc' }}>54 Awards </h3>
                        <p style={{ marginLeft: '15%' }}> ejc djkf vjedf verbvdfjk bvdfvf vedfvefververv</p>
                    </div>
                    <div>
                        <FaTruck style={{ color: 'rgb(238, 104, 15)', fontSize: '3pc' }} />
                        <h3 style={{ fontWeight: 'bold', marginTop: '1.5pc' }}>Fast Delivery </h3>
                        <p style={{ marginLeft: '15%' }}> ejc djkf vjedf verbvdfjk bvdfv fvedfve fververv</p>
                    </div>
                    <div>
                        <FaClock style={{ color: 'rgb(238, 104, 15)', fontSize: '3pc' }} />
                        <h3 style={{ fontWeight: 'bold', marginTop: '1.5pc' }}>24/7 Service </h3>
                        <p style={{ marginLeft: '15%' }}> ejc djkf vjedf verbvdf jkbvdfvfvedf vefververv</p>
                    </div>
                    <div>
                        <FaTrophy style={{ color: 'rgb(238, 104, 15)', fontSize: '3pc' }} />
                        <h3 style={{ fontWeight: 'bold', marginTop: '1.5pc' }}> 100% Safety </h3>
                        <p style={{ marginLeft: '8%' }}> ejc djkf vjedf verbv dfjkbvd fvfvedfv efververv</p>
                    </div>
                </div>
            </div>
            <div className='team'>
                <h1 style={{ fontSize: '2pc', fontWeight: 'bold' }}> Our Team </h1>
                <p> nvedjkvne vcejk ejkc ec ejc erj ef ej ver vejverver ver veh ve vecev v v cwcwe cec ecn e cc c cdc</p>
                <div className='team-blocks'>
                    <Card style={{ width: '18rem', margin: '1pc' }} >
                        <Card.Img variant="top" src="https://c8.alamy.com/comp/EHTDW4/portrait-of-man-sitting-at-his-desk-in-office-EHTDW4.jpg" />
                        <Card.Body>
                            <Card.Title>X Y Z</Card.Title>
                            <Card.Text>
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '1pc' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/handsome-businessman-is-working-with-laptop-office_85574-4685.jpg" />
                        <Card.Body>
                            <Card.Title>A B C</Card.Title>
                            <Card.Text>
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '1pc' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/medium-shot-smiley-man-work_23-2149622834.jpg?w=2000" />
                        <Card.Body>
                            <Card.Title>X Y Z</Card.Title>
                            <Card.Text>
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '1pc' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/young-man-white-shirt-blue-jacket-works-indoors_146671-56180.jpg?w=2000" />
                        <Card.Body>
                            <Card.Title>A B C</Card.Title>
                            <Card.Text>
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='news'>
                <FaRegNewspaper style={{ color: 'white', fontSize: '5pc', marginLeft: '2pc' }} />
                <h1 style={{ color: 'white', marginLeft: '2pc', fontWeight: 'bold' }}> Join Our News Letter Now !</h1>
                <InputGroup  className='email'>
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="dark" id="button-addon2">
                        Send Now!
                    </Button>
                </InputGroup>
            </div>
            <MDBFooter  className='text-center text-lg-start text-muted' style={{backgroundColor :'rgb(238, 235, 235)'}}>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='facebook-f' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='twitter' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='google' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='instagram' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='linkedin' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='github' />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h4 className='text-uppercase fw-bold mb-4' style={{ fontWeight: 'bold', color: 'rgb(238, 104, 15)' }}>
                                    Tronix
                                </h4>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit.
                                </p>
                                <div className="header1">
                                    <a href="" style={{fontSize :'1.5pc' , marginLeft :'1pc'}}><FaFacebook /></a>
                                    <a href="" style={{fontSize :'1.5pc' , marginLeft :'1pc'}}><FaGooglePlus /></a>
                                    <a href="" style={{fontSize :'1.5pc' , marginLeft :'1pc'}}><FaTwitter /></a>
                                    <a href="" style={{fontSize :'1.5pc' , marginLeft :'1pc'}}><FaYoutube /></a>
                                </div>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 '>
                                <h6 className='text-uppercase fw-bold mb-4' style={{color:'black' }}>Company</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' style={{color:'black' }}>Information</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4' style={{color:'black' }}>Contact Us!</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </MDBFooter>
           <hr/>
            <div>
                <h6 style={{textAlign :'center' , fontWeight :'bold' ,}}> Developed By 
                <span style={{color:'rgb(238, 104, 15)' ,  fontFamily :'cursive'}}> Bilal Khan Yousafzai </span></h6>
            </div>
        </div>

    );
}