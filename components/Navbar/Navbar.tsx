"use client";
import { useFetchNewsOnMount, useNewsStore } from "@/store/useNewsStore";
import NavComponents from "./Components";
import "./navbar.style.css";

export default function Navbar() {
  useFetchNewsOnMount();

  return <NavComponents />;
}
