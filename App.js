import "./styles.css";
import styled from "styled-components";

const BlueButton = styled.button`
  background-color : blue;
  color:white;
`

const BigBlueButton = styled(BlueButton)`
  padding : 10px;
  `

const BigRedButton = styled(BigBlueButton)`
  background-color : red;
`

export default function App() {
  return <>
  <button id="practice">Practice!</button>
  <BlueButton>BlueButton</BlueButton>
  <BigBlueButton>BigBlueButton</BigBlueButton>
  <BigRedButton>BigRedButton</BigRedButton>
  </>;
}
