import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./FitnessHomePage.css";

const reviews = [
  {
    username: "JohnDoe",
    comment: "Absolutely amazing experience! The hotel staff was very friendly and the rooms were luxurious.",
    rating: 5,
  },
  {
    username: "JaneSmith",
    comment: "Great location and beautiful views. The food could have been better, though.",
    rating: 4,
  },
  {
    username: "AlexJohnson",
    comment: "The stay was comfortable, but the service was slow. The decor was exquisite.",
    rating: 3,
  },
  {
    username: "EmilyDavis",
    comment: "A perfect place for a romantic getaway! The ambiance and the amenities were top-notch.",
    rating: 5,
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Passalacqua",
    location: "Lake Como",
    image: "/Images/Passalacqua.jpg",
    description: "Lake Como at its most glamorous and luxurious with a hint of bohemianism",
    price: 99999.99,
  },
  {
    id: 2,
    name: "Rosewood",
    location: "Hong Kong",
    image: "/Images/rosewood.jpg",
    description: "Track your workouts and health.",
    price: 95000.99,
  },
  {
    id: 3,
    name: "Four Seasons",
    location: "Bangkok",
    image: "/Images/four.jpg",
    description: "Hyper-modern riverside oasis in Bangkok’s up-and-coming creative district",
    price: 7000.99,
  },
  {
    id: 4,
    name: "The Upper House",
    location: "Hong Kong",
    image: "/Images/upp.jpg",
    description: "Cutting-edge creative floating above Victoria Harbour",
    price: 54555.99,
  },
  {
    id: 5,
    name: "Aman",
    location: "Tokyo",
    image: "/Images/aman.jpg",
    description: "Serene cloud-brushing minimalism in the Japanese capital",
    price: 89999.99,
  },
  {
    id: 6,
    name: "La Mamounia",
    location: "Marrakech",
    image: "/Images/la.jpg",
    description: "Boho beach chic – with an aristocratic edge",
    price: 22233.99,
  },
  {
    id: 7,
    name: "Soneva Jani",
    location: "Marrakech",
    image: "/Images/jani.jpg",
    description: "A paradisical island playground designed for modern castaways",
    price: 22233.99,
  },
  {
    id: 8,
    name: "Esencia",
    location: "Marrakech",
    image: "/Images/esencia.jpg",
    description: "A paragon of palatial luxury redesigned for the future",
    price: 22233.99,
  },
  
  // Add more featured products as needed
];

const FitnessHomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [likes, setLikes] = useState({}); // State to track likes
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // Number of products to show per page
  const [newReview, setNewReview] = useState({
    username: "",
    comment: "",
    rating: 1,
  });
  const [allReviews, setReviews] = useState(reviews);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to page 1 when search query changes
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(1); // Reset to page 1 when sorting changes
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id], // Toggle like status
    }));
  };

  const filteredProducts = featuredProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      } else if (sortOrder === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  const favoriteProducts = featuredProducts.filter(
    (product) => likes[product.id]
  );

  const productsToShow = showFavorites ? favoriteProducts : filteredProducts;

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsToShow.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productsToShow.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({ username: "", comment: "", rating: 1 });
  };

  return (
    <div className="fitness-home-page">
      <section className="heading-section">
        <h1>Famous Hotels Around the World</h1>
      </section>

      <section className="hero">
        <div>
          <img
            src="/Images/travel.jpg"
            alt="Hero Image 1"
          />
          <p className="legend">Get 15% off on our site</p>
        </div>
      </section>

      <section className="categories">
        <h2>FIVE STAR HOTELS</h2>
        <Carousel
          showThumbs={false}
          autoPlay
          interval={2000}
          infiniteLoop
          emulateTouch={true}
          useKeyboardArrows={true}
          showIndicators={true}
        >
          <div className="category-item">
            <img src="/Images/burj.jpg" alt="Burj Khalifa" />
            <h3>Burj Khalifa</h3>
          </div>
          <div className="category-item">
            <img src="/Images/rambagh.jpg" alt="Rambagh Palace" />
            <h3>Rambagh Palace</h3>
          </div>
          <div className="category-item">
            <img src="/Images/banyan.jpg" alt="Banyan Palace" />
            <h3>Banyan Palace</h3>
          </div>
          {/* Add more categories as needed */}
        </Carousel>
      </section>

      <section className="featured-products">
        <h2>Filter your likes</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search hotels..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="sort-dropdown">
          <label htmlFor="sort">Sort by price: </label>
          <select id="sort" value={sortOrder} onChange={handleSortChange}>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="favorites-toggle">
          <button onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? "Show All" : "Show Favorites"}
          </button>
        </div>

        <div className="product-list">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                <em>{product.location}</em>
              </p>
              <p>{product.description}</p>
              <p>
                <strong>${product.price.toFixed(2)}</strong>
              </p>
              <button
                className={`heart-btn ${likes[product.id] ? "liked" : ""}`}
                onClick={() => handleLike(product.id)}
              >
                {likes[product.id] ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
        </div>

        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={index + 1 === currentPage ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>

      {showFavorites && (
        <section className="favorites">
          <h2>Favorite Hotels</h2>
          <div className="product-list">
            {favoriteProducts.length === 0 ? (
              <p>No favorite hotels yet.</p>
            ) : (
              favoriteProducts.map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>
                    <em>{product.location}</em>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    <strong>${product.price.toFixed(2)}</strong>
                  </p>
                  <button
                    className={`heart-btn ${likes[product.id] ? "liked" : ""}`}
                    onClick={() => handleLike(product.id)}
                  >
                    {likes[product.id] ? "❤️" : "🤍"}
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      )}


<div class="reviews-container">
<section className="reviews">
        <h2>User Reviews</h2>
        <div className="review-list">
          {allReviews.map((review, index) => (
            <div key={index} className="review-item">
              <h4>{review.username}</h4>
              <p>{review.comment}</p>
              <div className="rating">
                {"⭐".repeat(review.rating)}{" "}
                {review.rating < 5 && "☆".repeat(5 - review.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="write-review">
        <h2>Write a Review</h2>
        <form onSubmit={handleReviewSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={newReview.username}
              onChange={handleReviewChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleReviewChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleReviewChange}
              required
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </section>
      </div>


      <footer className="footer">
        <p>&copy; 2024 Famous Hotels Around the World. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default FitnessHomePage;
