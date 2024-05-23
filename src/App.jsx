
import About from './components/About'
import Counter from './components/Counter'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Insighthub from './components/Insighthub'
import Mymarquee from './components/Mymarquee'
import Merch_Store from './components/Merch_Store'
import Navbar from './components/Navbar'




function App() {
 

  return (
    <>
    <div className="bg-[url('./assets/imgs/bg.png')] bg-no-repeat lg:bg-cover bg-contain ">
      <Navbar/>
   <Header/>
   </div>
   <Mymarquee/>
   <About/>
   <Counter/>
   <Insighthub/>
   <Merch_Store/>
   <Faq/>
   <Footer/>

   
    
    </>
  )
}

export default App
