
import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';  // 追加
import axios from "axios";


const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}

const App = () => {
  const languages = ['イシュー', '老子', 'デジタルネイチャー'];
  return (
    <BrowserRouter>  
      <div>
        <h1>react app</h1>
        <ul class="react_header">
          <li><Link to ="/">イシュー</Link></li>
          <li><Link to ="/vue">老子</Link></li>
          <li><Link to ="/angular">デジタルネイチャー</Link></li>
        </ul>


        <Route 
        exact 
        path='/'
        render={
          props => 
            <Booklist 
            language={languages[0]} 
            getData={keyword => getDataFromAPI(keyword)}
            />
          } 
        />
        <Route 
        path='/vue' 
        render={
          props => 
            <Booklist 
            language={languages[1]} 
            getData={keyword => getDataFromAPI(keyword)}
            />
          } 
        />      
        
        <Route 
        path='/angular'
        render={
          props => 
            <Booklist 
            language={languages[2]} 
            getData={keyword => getDataFromAPI(keyword)}
            />
          } 
        />      
      </div>
    </BrowserRouter> 
  );
}
export default App;