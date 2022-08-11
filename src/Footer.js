import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
 
  return (   
    <Container fluid className="footer-container">
      <Row> 
        <Col className="logofooter-col" md={3}>
          <img id="logofooter" src="https://cdn.discordapp.com/attachments/600146794445537281/996146582879748166/qeqwewqeqwe.png" />
        </Col>
        <Col md={2} className="footer-heading footer-left">
          <h2>About Us</h2>
          <a href="#" target="_blank"> Guidelines </a>          
          <a href="#" target="_blank"> Legal </a>
          <a href="#" target="_blank"> Jobs </a>
          <a href="#"> Terms of Service </a>
        </Col>
        <Col md={2} className="footer-heading footer-mid">
          <h2>Contact</h2>
          <a href="#" target="_blank"> Support </a>          
          <a href="#"> Sponsorship </a>
          <a href="#"> FAQ </a>
          <a href="#"> Cookies Policy </a>
        </Col>
        <Col md={2} className="footer-heading footer-right">
          <h2>Social Media</h2>
          <img id="socialmedia" src="https://cdn.discordapp.com/attachments/600146794445537281/998884535141933056/pngegg.png" />
        </Col>
        <Col md={3} className="footer-email-form">
          <h2>Join Our Newsletter</h2>
          <input type="email" placeholder="Enter your E-Mail " id="footer-email"/>
          <img id="newsletter-email" src="https://cdn.discordapp.com/attachments/600146794445537281/998884936285179904/pngegg_1.png" />
        </Col>
      </Row>
    </Container>
  )
}

export default App;


