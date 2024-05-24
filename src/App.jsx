import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListProvider } from './components/ListContext.jsx';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import FetchLatestPost from './components/FetchLatestPost.jsx';
import RecLatestPost from './components/RecLatestPost.jsx';
import Post from './components/Post.jsx';
import CreatePost from './components/CreatePost.jsx';
import NotFound from './components/NotFound.jsx';
import { AuthProvider } from './components/AuthContext.jsx';
import AuthenticatedRoute from './components/AuthenticatedRoute.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ListProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<AuthenticatedRoute />}>
              <Route index element={<FetchLatestPost><RecLatestPost /></FetchLatestPost>} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/create-post" element={<CreatePost />} />
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