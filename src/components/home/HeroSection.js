/*

// Function Based Component

function Component(props) {
    var name = "John Doe";
    return (
        <>
        <div></div>
        <div></div>
        </>
    )
};

//Class Based Component

class Component extends React.Component{
    render(){
        return (
            <>
            <div></div>
            <div></div>
            </>
        )
    }
}

*/
import Carousel from "react-bootstrap/Carousel";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img
            alt=""
            height="700"
            src="https://cdn.shopify.com/s/files/1/0070/7032/articles/trending-products_7ed711c4-206c-4b41-a321-711785f3a917.png"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt=""
            height="700"
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt=""
            height="700"
            src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5b0be03cefcc8.jpg"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
