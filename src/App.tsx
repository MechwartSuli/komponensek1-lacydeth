import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
function App() {
  


  return (
    <>
      <Header title="Első weboldal" />
      <Content isActive={true} content="Lorem ipsum sit amen dolorem" ></Content>
      <Footer links={["Home", "About", "Contact"]} />
    </>
  )
}

export default App
