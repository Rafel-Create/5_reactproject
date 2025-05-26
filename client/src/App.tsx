import React from 'react';
import Header from "./include/Header";//헤더라는 컴포넌트를 사용하겠다는 의미
import "bootstrap/dist/css/bootstrap.min.css";
//부트스트랩 cdn선언
import BoardList from './BoardList';//보드리스트라는 컴포넌트를 사용하겠다는 의미
import Write from './Write';
import Slide from './Slide';
import Footer from './include/Footer';//푸터라는 컴포넌트를 사용하겠다는 의미


function App() {
  return (
  <>
<Header/>
<Slide/>
<BoardList/>
<Write/>
<Footer/>
  </>  
  );
}

export default App;