import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import WishlistPage from './pages/WishlistPage';
import Klassikler from './pages/Klassikler';
import AuthorBooks from './pages/AuthorBooks';
import SearchedPage from './pages/SearchedPage';
import SupportPage from './pages/SupportPage';
import NotFound from './pages/NotFound';
import DetailsPage from './pages/DetailsPage';
import LoyalliqPage from './pages/LoyalliqPage';
import OdenisPage from './pages/OdenisPage';
import Muellifler from './pages/Muellifler';
import MainLayout from './layouts/MainLayout';
import AdminPage from './pages/AdminPage';
import BasketPage from './pages/BasketPage';
import { BookProvider } from './comp/BookContext';


function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="klassikler" element={<Klassikler />} />
            <Route path="authors/:authorName" element={<AuthorBooks />} />
            <Route path="search/:searchedEl" element={<SearchedPage />} />
            <Route path="details/:id" element={<DetailsPage key={window.location.pathname} />} />
            <Route path="loyalliqKarti" element={<LoyalliqPage />} />
            <Route path="odenisvecatdirilma" element={<OdenisPage />} />
            <Route path="muellifler" element={<Muellifler />} />
            <Route path='basket' element={<BasketPage />} />
          </Route>
          <Route path="support" element={<SupportPage />} />
          <Route path='adminpage' element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
