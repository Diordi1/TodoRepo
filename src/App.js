
import './App.css';
import Counter from './components/firstcomponent/Counter';
import Firstcomponent from './components/firstcomponent/Firstcomponent';
import SecondComponent from './components/firstcomponent/SecondComponent'
import ThirdComponen, { FourthCompo } from './components/ThirdComponen';
import Login,{Welcome} from './components/todopage/login/Login'
import {BrowserRouter,Routes,Route,useParams,Link} from 'react-router-dom';

import Header from './components/todopage/header/Header';
import Footer from './components/todopage/footer/Footer';
import Logout from './components/todopage/logout/logout';
import ErrorCompo from './components/todopage/error1/error';
import ListTodoComponent from './components/todopage/todo/todo';
import AuthProvider from './components/todopage/authContext';
import { useContext } from 'react';
import {AuthContext} from './components/todopage/authContext'
import AddTodo from './components/adder/AddTodo';

function App() {
  const authContext=useContext(AuthContext);
  console.log(authContext);

  return (
    <div>
      <AuthProvider>

      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/welcome/:username' element={<Welcome/>}></Route>
        <Route path='*' element={<ErrorCompo/>}></Route>
        <Route path='/todo' element={<ListTodoComponent/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/addtodo/:id' element={<AddTodo/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
   

  );
}

  function App1({prop,prop1}){
    return(
      <div className="app1">
        this si ssn sis ss s {prop}, {prop1}
      </div>
    );

  }

  

export default App;
