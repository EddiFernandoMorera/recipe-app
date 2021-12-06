import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../components";
import HomePage from "../pages/HomePage";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <div className={styles.main}>
        <Header />
        <Routes>
          <Route element={<HomePage />} path="/home" />
          <Route element={<Navigate replace to="/home" />} path="/*" />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Navigation;
