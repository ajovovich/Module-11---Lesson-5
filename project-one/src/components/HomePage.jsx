//Task 1: Integrating React-Bootstrap and Adding Buttons

import { Image, Button, Card } from 'react-bootstrap';
import welcomeImage from './welcome.jpg';

//Task 2/3/4: Adding Color/Shadows/Responsive Image

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#343a40', border: '1px solid #dee2e6', padding: '20px' }}>
      <Image src={welcomeImage} fluid className="mb-3" />
      <Button variant="primary" className="mt-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>Shop Now</Button>
      <Card className="mt-4" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Featured Product</Card.Title>
          <Card.Text>
            Check out our latest products and offers.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;