import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import  imageBanner  from "../assets/img/bannerImage.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Animes", "Mangás", "Notices"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === '') {
            setIsDeleting(true);
            setDelta(period);
        }else {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner">
            <Container className="">
                <Row classeName="d-flex" id="home">
                    <Col sx={12} md={6} xl={7} className="infoContainer">
                        <span className="tagline"> Welcome to PanimE!</span>
                        <h1 className="">
                            <span className="txt-rotate">
                                <span className="wrap"> {text}</span>
                            </span>
                        </h1>
                        <p>Lorem ipsum is simply dummy  text of the pritinng and typeset</p>
                        <button onClick={()=> { console.log("connect")}}>Let's connect
                            <ArrowRightCircle size={25}/>
                        </button>
                    </Col>
                    <img className="imageBanner" src={imageBanner} alt="Banner-PanimE" />
                    {/* <Col sx={12} md={6} xl={5} className="imageContainer">
                        
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
}