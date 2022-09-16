import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CarouselSlide({data}) {

  const [displayData, setDisplayData] = useState({
    title: "",
    logo: "",
    description: ""
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    const data = e.target.value;
    const detailData = data.split(',')
    setDisplayData({
      title: detailData[0],
      logo: detailData[1],
      description: detailData[2],
    })
    setShow(true);
  }

  return (
    <Carousel
      indicators={false}
    >
      {data.map((item, index)=> {
        return(
          <Carousel.Item key={index}>
            <img
              className="w-full"
              src={item.logo}
              alt="First slide"
            />
            <div className='bg-dark py-2 w-full flex flex-col items-center justify-center'>
              <h5 className='font-black text-titan text-white text-sm sm:text-xl'>
                {item.title}
              </h5>
              <Button 
                className='bg-primary text-white h-9 w-32 rounded-md text-sm sm:text-base'
                value={[item.title, item.logo, item.desc]}
                onClick={(e) => handleShow(e)}
              >
                Selengkapnya!
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{displayData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {displayData.description}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary">Understood</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default CarouselSlide;