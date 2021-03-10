import React from 'react'; 
import Nav from './components/Nav/Nav';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';

// Redux (MailSlice)
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/MailSlice';

// React-Router-Dom
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";

import './App.css';

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
        <div className="app">
        {/* Nav */}
        <Nav />

        {/* App Body */}
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        {/* Send Mail */}
        { sendMessageIsOpen &&  <SendMail /> }
      </div>
    </Router>
  );
}

export default App;
