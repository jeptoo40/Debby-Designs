import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/img1.jpg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "120px",
        textAlign: "center",
        color: "white"
      }}
    >
      <div>
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Debby Designs
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "auto" }}>
          Beautiful handcrafted wristwear made with love.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              padding: "12px 24px",
              background: "white",
              color: "black",
              border: "none",
              marginRight: "10px",
              cursor: "pointer"
            }}
          >
            View Products
          </button>

          <a
            href="https://wa.me/254700000000"
            style={{
              padding: "12px 24px",
              border: "1px solid white",
              textDecoration: "none",
              color: "white"
            }}
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
      
    </section>
  );
}