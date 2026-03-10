import React from "react";

export default function FeatureSection() {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: "url('/images/f1.jpg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "30vh",
        padding: "60px 40px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        overflow: "hidden"
      }}
    >
      {/* Light overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.15)", // only 15% black, mostly transparent
          zIndex: 1
        }}
      ></div>

      {/* Left column - top-left text */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <p style={{
          fontSize: "18px",
          lineHeight: "1.7",
          marginBottom: "24px"
        }}>
          Debby Designs creates handcrafted bracelets with love and passion.
          Each piece begins with intentional design, where beauty and comfort
          are shaped together and refined patiently until it feels resolved.
          Once completed, every piece is made to be cherished by you or
          your loved ones.
        </p>
      </div>
      

      {/* Right column - bottom-right paragraph */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end"
        }}
      >
        <p style={{
          fontSize: "19px",
          lineHeight: "1.6",
          maxWidth: "280px",
          textAlign: "right"
        }}>
          Quality handcraft in every piece, designed to inspire and delight. Turning rare gemstones and precious metals into divine expressions of self. Whether it’s the quiet power of a subtle gold stud or the dramatic allure of a shimmering drop earring, our creations are "the perfect spice" to your unique style, ensuring that every moment you wear them becomes a sparkling journey
        </p>
      </div>
    </section>
  );
}
  