import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../components/spinner';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="flex justify-between w-full max-w-4xl">
        <h1 className="text-4xl font-semibold text-gray-700">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-[#a67c52] hover:text-[#5a4638] transition" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-4xl mt-6">
          <table className="w-full text-left bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-[#f5e1c8] text-[#5a4638] text-lg">
                <th className="p-3">No</th>
                <th className="p-3">Title</th>
                <th className="p-3 max-md:hidden">Author</th>
                <th className="p-3 max-md:hidden">Publish Year</th>
                <th className="p-3 max-md:hidden">Copies</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="border-t text-gray-700">
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3">{book.title}</td>
                  <td className="p-3 max-md:hidden">{book.author}</td>
                  <td className="p-3 max-md:hidden">{book.publishYear}</td>
                  <td className="p-3 max-md:hidden">{book.copies}</td>
                  <td className="p-3 flex gap-3 justify-center">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-700 hover:text-green-500" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-500" />
                    </Link>
                    <Link to={`/book/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-500" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
