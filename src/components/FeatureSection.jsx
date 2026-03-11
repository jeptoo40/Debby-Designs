import React from "react";

const featureImages = [
  "/images/f1.jpg.jpeg",
  "/images/f2jpg.jpeg",
  "/images/f4.jpeg",
 
  
];

export default function FeatureSection() {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: "url('/images/f1.jpg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "40vh",
        padding: "60px 40px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
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
          backgroundColor: "rgba(0,0,0,0.2)",
          zIndex: 1
        }}
      ></div>

      {/* Left: Paragraph */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          marginRight: "20px"
        }}
      >
        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Debby Designs creates handcrafted bracelets with love and passion.
          Each piece begins with intentional design, where beauty and comfort
          are shaped together and refined patiently until it feels resolved.
          Once completed, every piece is made to be cherished by you or
          your loved ones.
        </p>
      </div>

      {/* Right: Scrolling images */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          overflowX: "auto",
          gap: "16px"
        }}
      >
        {featureImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Feature ${index + 1}`}
            style={{
              flex: "0 0 auto",
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
          />
        ))}
      </div>
    </section>
  );
}