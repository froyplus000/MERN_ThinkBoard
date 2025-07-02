import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/create" element={<CreatePage></CreatePage>}></Route>
        <Route
          path="/note/:id"
          element={<NoteDetailPage></NoteDetailPage>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
