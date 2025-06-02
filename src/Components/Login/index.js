import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./index.css";
import { Flat } from "@alptugidin/react-circular-progress-bar";
import { IoIosCart } from "react-icons/io";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBox,
  FaCalendarAlt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    userId: "",
    purchaseDate: "",
  });
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateRemainingMonths = (purchase) => {
    const purchaseDate = new Date(purchase.purchaseDate);
    const warrantyPeriod = parseInt(purchase.warrantyPeriod, 10);
    const currentDate = new Date();

    const warrantyEndDate = new Date(purchaseDate);
    warrantyEndDate.setMonth(purchaseDate.getMonth() + warrantyPeriod);

    if (currentDate > warrantyEndDate) {
      return 0;
    }

    const monthsDiff =
      (warrantyEndDate.getFullYear() - currentDate.getFullYear()) * 12 +
      (warrantyEndDate.getMonth() - currentDate.getMonth());
    return Math.max(0, monthsDiff);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);
    setPurchases([]);

    try {
      const userResponse = await axios.get(
        `http://localhost:5000/api/users/${formData.userId}`
      );
      const fetchedUser = userResponse.data;
      setUser(fetchedUser);

      const purchasesResponse = await axios.get(
        `http://localhost:5000/api/purchases/${formData.userId}`
      );
      const allPurchases = purchasesResponse.data;

      const filteredPurchases = formData.purchaseDate
        ? allPurchases.filter(
            (purchase) =>
              new Date(purchase.purchaseDate).toISOString().split("T")[0] ===
              formData.purchaseDate
          )
        : allPurchases;

      if (filteredPurchases.length === 0) {
        setError("No purchases found for the given date.");
      } else {
        setPurchases(filteredPurchases);
        setShowForm(false);
      }
    } catch (err) {
      console.error(err);
      setError(
        "Error fetching data. Please check the Customer Key or try again."
      );
    }
  };

  const handleBack = () => {
    setShowForm(true);
    setUser(null);
    setPurchases([]);
    setError("");
    setFormData({ userId: "", purchaseDate: "" });
  };

  return (
    <>
      <div className="body-background reset">
        <div className="background-container">
          <div className="background-shape background-shape-first"></div>
          <div className="background-shape background-shape-second"></div>
        </div>

        {showForm ? (
          <form id="form" className="login-form" onSubmit={handleSubmit}>
            <h3 className="text-shine login-title">Track Your Warranty</h3>
            <label htmlFor="username" className="input-label">
              Customer Key
            </label>
            <input
              type="text"
              placeholder="Enter Your Customer Key 🔑"
              id="username"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="input-field input-placeholder"
            />

            {error && (
              <p className="error-message" id="errmsg">
                {error}
              </p>
            )}
            <button type="submit" className="login-button">
              Check Warranty
            </button>
          </form>
        ) : (
          <div className="warrantyChecking-results-container">
            {/* Circular Progress Bar in Top-Right Corner */}
            {/* Display User Details */}
            {user && (
              <div className="warrantyChecking-user-card">
                <div className="containerWarrentyCircleContainer">
                  <Flat
                    progress={calculateRemainingMonths(purchases[0])}
                    range={{ from: 0, to: 48 }}
                    sign={{ value: " Months", position: "end" }}
                    text={"Remaining Warranty"}
                    showMiniCircle={true}
                    showValue={true}
                    sx={{
                      strokeColor: "#16c63f",
                      barWidth: 6,
                      bgStrokeColor: "white",
                      bgColor: { value: "white", transparency: "0" },
                      shape: "full",
                      strokeLinecap: "round",
                      valueSize: 9,
                      valueWeight: "bold",
                      valueColor: "#16c63f",
                      valueFamily: "Trebuchet MS",
                      textSize: 7,
                      textWeight: "bold",
                      textColor: "#eee",
                      textFamily: "Trebuchet MS",
                      loadingTime: 2000,
                      miniCircleColor: "#16c63f",
                      miniCircleSize: 8,
                      valueAnimation: true,
                      intersectionEnabled: true,
                    }}
                  />
                </div>
                <div className="warrantyChecking-user-card-avatar">
                  <FaUserAlt size={30} color="#eee" />
                </div>
                <h2 className="warrantyChecking-user-card-title">
                  User Details
                </h2>
                <div className="warrantyChecking-verified-badge">
                  <FaCheckCircle size={20} />
                  <span>Verified Customer</span>
                </div>
                <div className="warrantyChecking-user-card-content">
                  <p>
                    <span className="warrantyChecking-user-card-label">
                      <FaUserAlt className="warrantyChecking-icon" /> Name:
                    </span>{" "}
                    {user.name}
                  </p>
                  <p>
                    <span className="warrantyChecking-user-card-label">
                      <FaEnvelope className="warrantyChecking-icon" /> Email:
                    </span>{" "}
                    {user.email}
                  </p>
                  <p>
                    <span className="warrantyChecking-user-card-label">
                      <FaPhone className="warrantyChecking-icon" /> Phone:
                    </span>{" "}
                    {user.phone}
                  </p>
                  <p>
                    <span className="warrantyChecking-user-card-label">
                      <FaMapMarkerAlt className="warrantyChecking-icon" />{" "}
                      Address:
                    </span>{" "}
                    {user.address}
                  </p>
                </div>
              </div>
            )}

            {/* Display Purchases */}
            {purchases.length > 0 && (
              <div className="warrantyChecking-purchases-container">
                <div className="warrantyChecking-user-card-avatar">
                  <IoIosCart size={30} color="#eee" />
                </div>
                <h2 className="warrantyChecking-user-card-title">
                  Purchase Details
                </h2>
                <ul className="warrantyChecking-purchases-list">
                  {purchases.map((purchase) => (
                    <li
                      key={purchase._id}
                      className="warrantyChecking-purchase-item"
                    >
                      <p>
                        <span className="warrantyChecking-purchase-label">
                          <FaBox className="warrantyChecking-icon" /> Product:
                        </span>{" "}
                        {purchase.productName}
                      </p>
                      <p>
                        <span className="warrantyChecking-purchase-label">
                          <FaCalendarAlt className="warrantyChecking-icon" />{" "}
                          Purchased on:
                        </span>{" "}
                        {new Date(purchase.purchaseDate).toLocaleDateString()}
                      </p>
                      <p>
                        <span className="warrantyChecking-purchase-label">
                          <FaShieldAlt className="warrantyChecking-icon" />{" "}
                          Warranty Status:
                        </span>{" "}
                        {purchase.warrantyStatus}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Back Button */}
            <button
              onClick={() => {
                window.location.href = "/warranty"; // This causes full page reload
              }}
              className="warrantyChecking-login-button warrantyChecking-back-button"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
