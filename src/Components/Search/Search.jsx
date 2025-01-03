// // src/Components/Search.jsx
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './Search.css';

// const Search = ({ menuOpen }) => {

//     const { keyword } = useParams();
//   const serachProduct = async () =>{

//     const token = localStorage.getItem("token");
//     if (!token) {
//       throw new Error("Authentication token not found.");
//     }
//     console.log(token);
//     // Make the API call with the Authorization header
//     const response = await fetch(
//       `http://localhost:8080/product/keyword?keyword=${keyword}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Include the JWT token
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch category data");
//     }

//     const data = await response.json();
//     console.log(data);

//   }
  

//     return (
//         <div className={`search-bar-container ${menuOpen ? "shift-down" : ""}`}>
//             <input type="text" placeholder="Search..." className="search-input" />
//             <button className="search-button">
//                 <FontAwesomeIcon icon={faSearch}onClick={serachProduct}  />
//             </button>
//         </div>
//     );
// };

// export default Search;


import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = ({ menuOpen }) => {
    const [keyword, setKeyword] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1); // Track highlighted suggestion
    const navigate = useNavigate();
    // Debounced API call to reduce request frequency
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (keyword) {
                fetchSuggestions(keyword);
            } else {
                setSuggestions([]); // Clear suggestions when input is empty
            }
        }, 300); // 300ms delay for debounce

        return () => clearTimeout(debounceTimer);
    }, [keyword]);

    const fetchSuggestions = async (searchKeyword) => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Authentication token not found.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:8080/product/keyword?keyword=${searchKeyword}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`, // Include the JWT token
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch product suggestions');
            }

            const data = await response.json();
            setSuggestions(data); // Assuming data is an array of product objects
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            setSuggestions([]);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };
    const handleSuggestionClick = (productId) => {
        // Navigate to the product detail page and pass the product data
        navigate(`/product/${productId}`);
        setKeyword(''); // Clear the search input
        setSuggestions([]); // Clear the suggestions
    };

    const handleMouseEnter = (index) => {
        setHighlightedIndex(index); // Set the hovered suggestion index
    };

    const handleMouseLeave = () => {
        setHighlightedIndex(-1); // Reset the highlighted index
    };

    return (
        <div className={`search-bar-container ${menuOpen ? 'shift-down' : ''}`}>
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={keyword}
                onChange={handleInputChange}
            />
            <button className="search-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            {loading && <div className="loading-spinner">Loading...</div>}
            {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-2/4 shadow-lg z-10">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={suggestion.id}
                            className={`px-4 py-2 cursor-pointer ${
                                highlightedIndex === index ? 'bg-gray-200' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => handleSuggestionClick(suggestion.id)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="font-semibold text-gray-800 font-fira">{suggestion.medicineName}</div>
                            <div className="text-sm text-gray-500 font-custom">{suggestion.companyName}</div>
                            <div className="text-sm text-gray-500 font-custom ">₹{suggestion.price}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;