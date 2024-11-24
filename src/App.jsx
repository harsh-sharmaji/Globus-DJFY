import './App.css'
import Card from './components/Card'
import DJSearchTool from './components/DJSearchTool'
// import "./components/FAQ"
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Testimonials from './components/Testimonials'
import UsageVideo from './components/UsageVideo'
import UseCases from './components/UseCase'
import WebApp from './components/WebApp'

function App() {
  
  return (
    <>
    <Header/>
    <Card/>
    <UseCases/>
    <DJSearchTool/>
    <WebApp/>
    <UsageVideo/>
    <Gallery/>
    <Testimonials/>
    <FAQ/>
    <Footer/>

    </>
  )
}

export default App
