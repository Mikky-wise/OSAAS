import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Clients from './components/Clients';
import Features from './components/Features';
import Faq from './components/Faq';
import Services from './components/Services';
import Footer from './components/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Agents from './components/dashboard/Agents';
import Orders from './components/dashboard/Orders';

function App() {
  return (
    <main class="bg-white text-gray-700 font-medium">
      
      <Switch>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/agents">
          <Agents />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Navbar />
          <Home />
          <Clients />
          <Features />
          <Services />
          <Faq />
          <Footer />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
