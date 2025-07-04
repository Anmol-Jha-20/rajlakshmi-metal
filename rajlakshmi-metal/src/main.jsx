import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import BrassSheetCategoryPage from "./components/Products/BrassSheet/BrassSheetProduct.jsx";
import BrassPipeCategoryPage from "./components/Products/BrassPipe/BrassPipe.jsx";
import BrassScrapCategoryPage from "./components/Products/BrassScrap/BrassScrap.jsx";
import BrassFittingCategoryPage from "./components/Products/BrassFitting/BrassFitting.jsx";
import BrassRodCategoryPage from "./components/Products/BrassRod/BrassRod.jsx";
import StainlessSteelSheet from "./components/Products/StainlessSteelSheet/StainlessSteelSheet.jsx";
import StainlessSteelPipe from "./components/Products/StainlessSteelPipe/StainlessSteelPipe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/brass-sheet",
        element: <BrassSheetCategoryPage />,
      },
      {
        path: "/brass-pipe",
        element: <BrassPipeCategoryPage />,
      },
      {
        path: "/brass-scrap",
        element: <BrassScrapCategoryPage />,
      },
      {
        path: "/brass-fitting",
        element: <BrassFittingCategoryPage />,
      },
      {
        path: "/brass-rod",
        element: <BrassRodCategoryPage />,
      },
      {
        path: "/stainless-steel-sheet",
        element: <StainlessSteelSheet />,
      },
      {
        path: "/stainless-steel-pipe",
        element: <StainlessSteelPipe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
