import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AdsShowcase from "./pages/AdsShowCase"
import SmoothScroll from "./components/SmoothScroll"

export default function App() {
  return (
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<AdsShowcase />} />
      </Routes>
    </SmoothScroll>
  )
}
