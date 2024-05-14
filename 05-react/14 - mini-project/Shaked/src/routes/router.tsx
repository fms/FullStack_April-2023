
import Chat from '../components/Chat';
import DogsList from '../components/Dog';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
      <Routes>
        <Route path="/" element={<DogsList />} />
        <Route path="selected-dog/:breed" element={<Chat />} />
      </Routes>
  );
}

export default Router;