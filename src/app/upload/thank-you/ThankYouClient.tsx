"use client";

import { useEffect } from "react";

// Client component to handle localStorage cleanup
export default function ThankYouClient() {
  useEffect(() => {
    // Clear any form submission flags from localStorage
    try {
      localStorage.removeItem('formSubmitted');
    } catch (err) {
      console.log('Unable to access localStorage');
    }
  }, []);

  return null;
}
