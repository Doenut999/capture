import clock from './img/clock.svg';
import diaphragm from './img/diaphragm.svg';
import money from './img/money.svg';
import teamwork from './img/teamwork.svg';
import home2 from './img/home2.png';
import {About, Description, Image} from "./styles";
import styled from "styled-components";


const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <div className="icon">
                        <img src={clock} alt="clock"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Cards>

                <Cards>
                    <div className="icon">
                        <img src={teamwork} alt="clock"/>
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Cards>

                <Cards>
                    <div className="icon">
                        <img src={diaphragm} alt="clock"/>
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Cards>

                <Cards>
                    <div className="icon">
                        <img src={money} alt="clock"/>
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="sweets"/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ServicesSection