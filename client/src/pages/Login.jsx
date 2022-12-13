import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}
