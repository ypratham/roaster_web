import { Route, Routes } from 'react-router-dom';
import LayoutLogin from './layout/lyt_login';
import LayoutNotes from './layout/lyt_note';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutLogin />} />
        <Route path="/notes" element={<LayoutNotes />} />
      </Routes>
    </div>
  );
}

export default App;
