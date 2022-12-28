import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';




function App() {
  return (
    <div className="App">
       <Router>
				<Routes>
					<Route path="/" exact element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
