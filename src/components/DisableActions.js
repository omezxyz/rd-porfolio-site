// src/DisableActions.js

import { useEffect } from "react";

const DisableActions = () => {
  useEffect(() => {
    // Disable Right Click
    const disableRightClick = (e) => {
      e.preventDefault(); // Prevent right-click context menu
    };

    // Disable specific keyboard shortcuts
    const disableShortcuts = (e) => {
      // List of shortcuts to disable (e.g., Copy, Paste, Save, etc.)
      const shortcuts = [
        "F12", // Disable F12 (Developer Tools)
        "Ctrl+U", // Disable View Source
        "Ctrl+Shift+I", // Disable Inspect Element
        "Ctrl+S", // Disable Save
        "Ctrl+C", // Disable Copy
        "Ctrl+V", // Disable Paste
        "Ctrl+X", // Disable Cut
        "Ctrl+P", // Disable Print
      ];

      // Check for disabled shortcuts
      if (
        (e.ctrlKey || e.metaKey) && // Check for control/meta key combinations
        (e.key === "c" || e.key === "v" || e.key === "x" || e.key === "s" || e.key === "p" || e.key === "u")
      ) {
        e.preventDefault(); // Prevent the default action for those shortcuts
      }

      // Additional handling for F12 and Developer Tools
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
      }
    };

    // Add Event Listeners
    document.addEventListener("contextmenu", disableRightClick); // Disable right-click
    document.addEventListener("keydown", disableShortcuts); // Disable shortcuts

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return null; // No UI component rendered
};

export default DisableActions;
