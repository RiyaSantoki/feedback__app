import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './Context/FeedbackContext';

function App() {

    return (
      <FeedbackProvider>
    <Router>
        {/* <Routes>
          <Route path='/' element={
            <Header  />
        } />
        </Routes> */}
        <Header  />
        <div className='container'>
              
        <Routes>
          <Route path='/' element={
            <FeedbackForm />
        } />
        </Routes>
        <Routes>
          <Route path='/' element={
            <FeedbackStats/>
        } />
        </Routes>
        <Routes>
          <Route path='/' element={
            <FeedbackList />
        } />
        </Routes>   
        <Routes>
          <Route path='/about' element={<AboutPage/>} />
         
        </Routes>
        
        {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}

        <AboutIconLink />
        </div>   
    </Router> 
    </FeedbackProvider>
    )
}
export default App