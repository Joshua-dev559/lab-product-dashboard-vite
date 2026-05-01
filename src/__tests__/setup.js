import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "whatwg-fetch"; // Required for fetch in tests
import { Blob } from "node:buffer";

// Fix for Node environment (Vitest + jsdom)
global.Blob = Blob;

// Automatically clean up the DOM after each test
afterEach(() => {
  cleanup();
});