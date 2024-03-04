
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/Mycard';
import Footer from './components/Footer'

function App() {

  const perrito1= {url:"https://images.pexels.com/photos/373467/pexels-photo-373467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nombre:"Mopita", descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis quos quam explicabo, quaerat dolorem.",color:"primary", texto:"Adoptar"}

  const perrito2= {url:"https://images.pexels.com/photos/9675789/pexels-photo-9675789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nombre:"Cottom", descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis quos quam explicabo, quaerat dolorem.",color:"primary", texto:"Adoptar"}

  const perrito3= {url:"https://images.pexels.com/photos/4679182/pexels-photo-4679182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nombre:"Igor", descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis quos quam explicabo, quaerat dolorem.",color:"primary", texto:"Adoptar"}
  
  const perrito4= {url:"https://images.pexels.com/photos/9313656/pexels-photo-9313656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nombre:"Carnaval", descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perspiciatis quos quam explicabo, quaerat dolorem.",color:"primary", texto:"Adoptar"}
  
  const footer = "Todos los derechos reservados © Adopta un perrito 2024 "

  const titulo="Adopta un perrito"
  
  return (
    <>
      <Header titulo={titulo} />
     <div className="cards">
       <MyCard {...perrito1}/>
      <MyCard {...perrito2}/>
      <MyCard {...perrito3}/>
      <MyCard {...perrito4}/>
      </div>
      <Footer Texto={footer}/>

    </>
  )
}

export default App
