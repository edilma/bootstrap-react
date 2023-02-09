import  Container  from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import NavMain from "../NavMain";
import Modal from "react-bootstrap/Modal";
import "./layout.css"
import { useState } from "react";

export default function Layout(){
        const[show, setShow]= useState(false);
        const [fullscreen, setFullscreen] = useState(true);

        const handleClose = ()=>{setShow(false)};
        const handleShow = ()=>setShow(true);
        const handleFullscreen = () => setFullscreen(!fullscreen);



    return(
        <Container fluid>
            <Row>
                <Col><h1>HELLO My Is ... What</h1></Col>
            </Row>
            
            <Row>

                <Col sm={6}>Col 1</Col>
                <Col sm={6}>Col 2</Col>
                <Col> col 3</Col>
            </Row>

            <Row>
                <Col>
                <Button variant="sucess" onClick={handleShow}>Launch Modal</Button>
                </Col> </Row>
            
        
            <Row>
                <Col>
                    <img onClick={handleShow} width="400px" height="400px" src="https://assets-prd.ignimgs.com/2022/03/29/top-gun-maverick-new-button-1648560066641.jpg" />
                </Col>
            </Row>

                  

            <Row>
                <Col>

                <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Fine Title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <iframe width="100%" height="90%" src="https://www.youtube.com/embed/Ha2UW8a0Vzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                       <Button variant="secondary"
                       onClick={handleClose}>Close</Button>
               
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>Close</Button>
                            <Button variant="danger" onClick={handleFullscreen}>Toggle Fullscreen</Button>
                    </Modal.Footer>
                </Modal>


                </Col>
            </Row>
        </Container>
    )
}