import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserForm from "../UserForm";
import PurchaseForm from "../PurchaseForm";
import { IoMdCloseCircle, IoIosCart } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import "./index.css";

import Unauthorized from '../assets/Notfound/unauthorized.png'

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      user: null,
      purchases: [],
      showUserForm: true,
      showPurchaseForm: false,
      isAdmin: false,
    };

    // Bind event handlers
    this.handleUserCreated = this.handleUserCreated.bind(this);
    this.handlePurchaseCreated = this.handlePurchaseCreated.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem("adminToken");

    if (token !== "SaRbIcSdAeKfTgHhIi28042003") {
      this.setState({ isAdmin: false });
    } else {
      this.setState({ isAdmin: true });
    }
  }

  // Equivalent to useEffect(() => {...}, [userId])
  componentDidUpdate(prevProps, prevState) {
    if (this.state.userId !== prevState.userId && this.state.userId) {
      // Fetch user details
      axios
        .get(`http://localhost:5000/api/users/${this.state.userId}`)
        .then((res) => this.setState({ user: res.data }))
        .catch((err) => console.error(err));

      // Fetch purchases
      axios
        .get(`http://localhost:5000/api/purchases/${this.state.userId}`)
        .then((res) => this.setState({ purchases: res.data }))
        .catch((err) => console.error(err));
    }
  }

  handleUserCreated() {
    this.setState({
      showUserForm: false, // Hide UserForm
      showPurchaseForm: true, // Show PurchaseForm
    });
  }

  handlePurchaseCreated() {
    this.setState({ showPurchaseForm: false }); // Hide PurchaseForm

    // Fetch updated purchases after creation
    if (this.state.userId) {
      axios
        .get(`http://localhost:5000/api/purchases/${this.state.userId}`)
        .then((res) => this.setState({ purchases: res.data }))
        .catch((err) => console.error(err));
    }
  }

  handleReset() {
    this.setState({
      userId: "",
      user: null,
      purchases: [],
      showUserForm: true,
      showPurchaseForm: false,
    });
  }

  render() {
    const { userId, user, purchases, showUserForm, showPurchaseForm, isAdmin } =
      this.state;
    console.log(isAdmin);

    return isAdmin ? (
      <div style={{ padding: "20px" }} className="containerAdminPage">
        {showUserForm && (
          <UserForm
            setUserId={(id) => this.setState({ userId: id })}
            onUserCreated={this.handleUserCreated}
          />
        )}

        {!userId && (
          <p className="noUserCreatedAdmin">
            <IoMdCloseCircle /> No User is created, Enter the Details and Submit
            the form.
          </p>
        )}

        {showPurchaseForm && userId && (
          <div>
            <p className="purchaseCreated">
              <MdVerified /> User {userId} is created successfully, now you can
              create a purchase.
            </p>
            <PurchaseForm
              userId={userId}
              onPurchaseCreated={this.handlePurchaseCreated}
            />
          </div>
        )}

        <div className="userSuccessceratedContainer">
          {user && !showUserForm && !showPurchaseForm && (
            <>
              <p className="purchaseCreated">
                <FaUserAlt /> User & Purchase is created successfully.
              </p>
              <div className="cardUserDetails_Admin">
                <div className="userCardpart1">
                  <FaUserAlt className="userIcon" />
                  <h2>User Details</h2>
                </div>
                <p className="nameUserDetails">
                  Name: <span>{user.name}</span>
                </p>
                <p className="nameUserDetails">
                  Email: <span>{user.email}</span>
                </p>
                <p className="nameUserDetails">
                  Phone: <span>{user.phone}</span>
                </p>
                <p className="nameUserDetails">
                  Address: <span>{user.address}</span>
                </p>
              </div>
            </>
          )}

          {purchases.length > 0 && !showUserForm && !showPurchaseForm && (
            <div className="cardUserDetails_Admin">
              <div className="userCardpart1">
                <IoIosCart className="userIcon" />
                <h2>Purchases</h2>
              </div>
              <ul>
                {purchases.map((purchase) => (
                  <li
                    className="nameUserDetails nameUserDetails2"
                    key={purchase._id}
                  >
                    Prod Name: {purchase.productName} <br /> Purchased on{" "}
                    {new Date(purchase.purchaseDate).toLocaleDateString()} -
                    Warranty: {purchase.warrantyStatus}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!showUserForm && !showPurchaseForm && userId && (
            <button
              onClick={this.handleReset}
              className="login-button"
              style={{ marginTop: "20px" }}
            >
              Create Another User
            </button>
          )}
        </div>
      </div>
    ) : (
      <div className="containerNotAdmin">
      <img src={Unauthorized} alt="Unauthorized" className="unauthorizedImage"/>
        <h1>Oops! You're not the Admin !</h1>
        <p>Looks like you've taken a wrong turn at the login gate ❌.</p>
        <div className="container_buttons_notadmin">
        <Link to="/"><button className="login-button goBackButton">Go Back</button></Link>
        <Link to="/warranty"><button className="login-button goBackButton">Warranty Check</button></Link>
        </div>
      </div>
    );
  }
}

export default AdminPage;
