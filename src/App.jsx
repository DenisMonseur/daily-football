import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListProvider } from './components/ListContext';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import FetchLatestPost from './components/FetchLatestPost';
import RecLatestPost from './components/RecLatestPost';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import NotFound from './components/NotFound';
import { AuthProvider } from './components/AuthContext';
import AuthenticatedRoute from './components/AuthenticatedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ListProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<AuthenticatedRoute />}>
              <Route index element={<FetchLatestPost><RecLatestPost/></FetchLatestPost>} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/edit-post/:id" element={<EditPost />} /> 
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </ListProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;