import { Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import MyJobsScreen from './screens/MyJobsScreen';

const App = () =>{
  return (
    <div className="">
      <Header/>     
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/jobs' element={<MyJobsScreen/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
