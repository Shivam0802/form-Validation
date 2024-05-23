import Form from './Component/form';
import Success from './Component/success';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      {/* <Form /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/success" element={<Success/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
