import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FetchApi = () => {
  const [data, setData] = useState([]); // Store fetched data (array)
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate(); // Define navigate function

  // Function to fetch data using async/await
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products"); // Fetch API call for multiple products
      const result = await response.json(); // Convert response to JSON
      setData(result.products); // Assuming the API response has a 'products' array
      setLoading(false); // Disable loading after data is fetched
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error); // Error handling
    }
  };

  // useEffect to call fetchData when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle product click and navigate to a new page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to product detail page
  };

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Rendering the data using .map()
  return (
    <div>
      {data.map((product) => (
        <div
          key={product.id}
          className="mb-4"
          onClick={() => handleProductClick(product.id)}
          style={{ cursor: "pointer" }}
        >
          <p>
            <strong>Title:</strong> {product.title}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FetchApi;
