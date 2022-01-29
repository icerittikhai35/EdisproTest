import Header from './components/Header'
import Banner from './components/Banner'
import Content from './components/Content'
import CTA from './components/CallToAction'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div style={{backgroundColor:'#eeeeee'}}>
      <div style={{width:'50%',margin:'auto'}}>
        <div style={{ position: 'fixed', width: '50%', }}>
          <Header />
        </div>
        <Banner />
        <Content />
        <CTA />
        <Footer />
      </div>

    </div>
  );
}

export default App;
