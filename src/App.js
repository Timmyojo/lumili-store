import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, ProductsPage, ErrorPage, CartPage, SingleProductPage } from './pages/index'
import SharedLayout from './components/SharedLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='products/:productId' element={<SingleProductPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
