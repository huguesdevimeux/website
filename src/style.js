import styled from 'styled-components'
import {motion} from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(192, 230, 246);
  height: 100vh;
`;

export const MainBox = styled(motion.div)`
  background-color: #a1f3ff;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  gap: 10px;
  text-align: center;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 5px;
  max-width: 300px;
`;

export const SocialMedium = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-around;
`;

export const ProfilePicture = styled.img`
  width: 100px;
  border-radius: 30%;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

`
export const CVBox = styled(motion.div)`
  background-color: antiquewhite;
  padding: 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  text-align: center;

  .react-pdf__Document {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .react-pdf__Page {
    max-width: calc(100%);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    margin: 1em;
  }

  .react-pdf__Page canvas {
    max-width: 100%;
    height: 100% !important;
  }
`