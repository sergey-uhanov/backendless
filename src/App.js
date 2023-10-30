import React, { useState, useEffect, lazy, startTransition } from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import data from "./data/data.json"
import DummyTable from './tabs/DummyTable'

const App = () => {
  const [tabs, setTabs] = useState(data)

  // useEffect(() => {
  //   fetch('./data/data.json')
  //     .then((response) => response.json())
  //     .then((data) => setTabs(data));

  // }, []);

  const DummyChart = lazy(() => import("./tabs/DummyChart"))
  const DummyList = lazy(() => import("./tabs/DummyList"))

  return (
    <div className='container'>
      <BrowserRouter>
        {tabs.map((tab) => (
          <Link key={tab.id} to={`/${tab.id}`}>
            {tab.title}
          </Link>
        ))}
        <Routes>
          <Route path="/DummyTable" element={<DummyTable />} />
          <Route path="/DummyChart" element={<React.Suspense fallback={<div>Loading...</div>}><DummyChart /></React.Suspense>} />
          <Route path="/DummyList" element={<React.Suspense fallback={<div>Loading...</div>}><DummyList /></React.Suspense>} />
          <Route path="/" element={<DummyTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
