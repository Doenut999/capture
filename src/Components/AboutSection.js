import home1 from './img/home1.png'
// import styled from "styled-components";
import {About, Description, Image, HIDE} from "./styles";

const AboutSection = () => {

    return (
        <About>
            <Description>
                <HIDE className="title">
                    <HIDE>
                        <h2>We work to make</h2>
                    </HIDE>
                    <HIDE>
                        <h2>your <span>dreams</span> come </h2>
                    </HIDE>
                    <HIDE>
                        <h2>true </h2>
                    </HIDE>
                </HIDE>
                <p>Contact Us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>

            <Image>
                <figure>
                    <img src={home1} alt="Guy with camera"/>
                </figure>
            </Image>
        </About>
    );
};

export default AboutSection