import React from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Location from "./components/Location";
import GiftSuggestion from "./components/GiftSuggestion";
import RsvpForm from "./components/RsvpForm";
import MenuSection from "./components/MenuSelection";
import Dresscode from "./components/DressCode";

import { Toaster } from "react-hot-toast";

import "./App.css";

import fotoBook1 from "./assets/MoreBook1.jpeg";
import fotoBook2 from "./assets/MoreBook2.jpeg";
import fotoBook3 from "./assets/MoreBook3.jpeg";
import PhotoSeparator from "./components/PhotoSeparator";
import MessageForm from "./components/MessageForm";

function App() {
  return (
    <div className="w-full min-h-screen bg-neutral-900 antialiased overflow-x-hidden">
      <Hero />

      <PhotoSeparator image={fotoBook1} />

      <Countdown />

      <Location />

      <Dresscode />

      <PhotoSeparator image={fotoBook2} inverted={false} />

      <RsvpForm />

      <GiftSuggestion />

      <MessageForm />

      <MenuSection />

      <PhotoSeparator image={fotoBook3} nameBanner inverted />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1b0f2b",
            color: "#ffffff",
            border: "1px solid rgba(236, 72, 153, 0.4)", // Borde rosa neón
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
            borderRadius: "1rem",
            fontSize: "0.85rem",
            backdropFilter: "blur(4px)",
          },
          iconTheme: {
            primary: "#ec4899", // Rosa neón para los íconos
            secondary: "#1b0f2b",
          },
        }}
      />
    </div>
  );
}

export default App;
