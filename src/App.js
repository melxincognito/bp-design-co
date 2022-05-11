import React from "react";
import Layout from "./components/navigation/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/plan-content/HomePage";
import AllPlansPage from "./pages/plan-content/AllPlansPage";
import CustomPlanReqPage from "./pages/plan-content/CustomPlanReqPage";
import LoginPage from "./pages/user-accounts/LoginPage";
import UserCartPage from "./pages/user-accounts/UserCartPage";
import UserFavoritesPage from "./pages/user-accounts/UserFavoritesPage";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-plans" element={<AllPlansPage />} />
          <Route path="/custom-plan-req" element={<CustomPlanReqPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<UserCartPage />} />
          <Route path="/my-favorites" element={<UserFavoritesPage />} />
        </Routes>
      </Layout>
    </>
  );
}
