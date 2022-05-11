import React from "react";
import Layout from "./components/navigation/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/plan-content/HomePage";
import AllPlansPage from "./pages/plan-content/AllPlansPage";
import CustomPlanReqPage from "./pages/plan-content/CustomPlanReqPage";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-plans" element={<AllPlansPage />} />
          <Route path="/custom-plan-req" element={<CustomPlanReqPage />} />
        </Routes>
      </Layout>
    </>
  );
}
