import { createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import { ProductList } from "./components/ProductList";
import { UserList } from "./components/UserList";
import { RecipeList } from "./components/RecipeList";
import { PostList } from "./components/PostList";
import App from "./app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App contains Navbers + <Outlet />
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductList /> },
      { path: "/users", element: <UserList /> },
      { path: "/recipes", element: <RecipeList /> },
      { path: "/posts", element: <PostList /> },
    ],
  },
]);
