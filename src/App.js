import * as S from "./style"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Tilt from 'react-parallax-tilt'
import profilePicture from "./assets/img.png"
import {useEffect, useState} from "react";
import {WanderingDVDLogo} from "./WanderingDVDLogo";


function ProfilePicture() {
    return <S.ProfilePicture src={profilePicture} alt="Me"/>
}


function MainBox({text}) {
    const boxVariant = {
        visible: {opacity: 1, scale: 1},
        hidden: {opacity: 0, scale: 0},
    }
    const control = useAnimation()
    const [ref, inView] = useInView({threshold: 0.5})
    const [scrolled, setScrolled] = useState(0)

    useEffect(() => {
        console.log(scrolled)
        if (scrolled < 0.2) {
            control.start("visible")
        } else {
            control.start("hidden")
        }
    }, [control, scrolled])

    return (

        <S.MainBox ref={ref} variants={boxVariant}
                   initial="hidden"
                   animate={control}>
            <ProfilePicture/>
            <h1 style={{margin: "0px"}}> Hugues Devimeux </h1>
            <h4>Student in Communications Systems at EPFL</h4>
            <SocialMedia/>
        </S.MainBox>
    )
}

function SocialMedia() {
    return <S.SocialMedium>
        <a href={"https://github.com/huguesdevimeux"}> <FontAwesomeIcon icon={faGithub} size="2x"/> </a>
        <a href={"https://www.linkedin.com/in/hugues-devimeux-610580219/"}> <FontAwesomeIcon icon={faLinkedin}
                                                                                             size="2x"/> </a>
    </S.SocialMedium>
}

function App() {
    return (<div>
            <WanderingDVDLogo/>
            <S.Wrapper>
                <Tilt>
                    <MainBox/>
                </Tilt>
            </S.Wrapper></div>
    )
        ;
}

export default App;
