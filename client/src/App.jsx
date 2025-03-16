import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/createBook';
import ShowBook from './pages/showBook';
import EditBook from './pages/editBook';
import DeleteBook from './pages/deleteBook';

const App = () => {
  return (
    <div className="min-h-screen bg-[#fdf7e3]">
      {/* Header */}
      <header className="bg-[#d4af7a] text-[#5a4638] text-center py-6 text-4xl font-serif font-bold tracking-wide shadow-md">
        Bookstore Management
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/book/delete/:id" element={<DeleteBook />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
