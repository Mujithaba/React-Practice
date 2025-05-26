import { Routes, Route, useNavigate, Link, useRoutes } from "react-router-dom";
import RecipeList from "./pages/recipe/recipe";
import CommentsList from "./pages/comment/comments";
import RecipeDetails from "./pages/recipe/recipeDetails";
import NotFound from "./pages/Not-Found/NotFound";
import Layouts from "./components/layouts/Layouts";
import Data from "./components/header/Data";
import ReactHookFormEg from "./pages/reactHookForm-Eg/React-hook-Form_eg";
import UseRefHook from "./pages/useRef/UseRefHook";
import UseMemo from "./pages/useMemo/UseMemo";
import UseCallbackEg from "./pages/useCallback/UseCallbackEg";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layouts />,
      children: [
        { path: "recipe-list", element: <RecipeList /> },
        { path: "comments-list", element: <CommentsList /> },
        { path: "recipe-list/:id", element: <RecipeDetails /> },
        { path: "data-page", element: <Data /> },
      ],
    },
    { path: "*", element: <NotFound /> },
    {
      path: "/react-hook-form",
      element: <ReactHookFormEg />,
    },
    {
      path: "/useref-hook",
      element: <UseRefHook />,
    },
    {
      path: "/usememo-hook",
      element: <UseMemo />,
    },
    {
      path:'/usecallback-hook',
      element:<UseCallbackEg/>,
    }
  ]);
  return element;
}

function App() {
  const navigate = useNavigate();
  return (
    <>
      {/* <h1>Hello, React Routing and custom hook</h1> */}
      {/* Navigate hook used for dynamic routing */}
      {/* <button
        style={{
          backgroundColor: "black",
          color: "white",
          margin: "5px",
          borderRadius: "6px",
          border: "none",
          padding: "9px",
        }}
        onClick={() => navigate("home/recipe-list")}
      >
        Click for Recipe
      </button>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          margin: "5px",
          borderRadius: "6px",
          border: "none",
          padding: "9px",
        }}
        onClick={() => navigate("home/comments-list")}
      >
        Click for Comments
      </button> */}

      {/* alternative of routing instead of useNavigate*/}
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          style={{
            border: "2px solid black",
            borderRadius: "6px",
            margin: "4px",
            textDecoration: "none",
            color: "Orange",
            padding: "9px",
          }}
          to={"home/recipe-list"}
        >
          Alternative Recipe Route
        </Link>
        <Link
          style={{
            border: "2px solid black",
            borderRadius: "6px",
            margin: "4px",
            textDecoration: "none",
            color: "Orange",
            padding: "9px",
          }}
          to={"home/comments-list"}
        >
          Alternative Comments Route
        </Link>
      </div> */}

      {/* Routing things */}
      {/* <Routes>
        <Route path="/home" element={<Layouts/>}>

        <Route path="recipe-list" element={<RecipeList />} />
        <Route path="comments-list" element={<CommentsList />} />
        <Route path="recipe-list/:id" element={<RecipeDetails/>}/>
        <Route path="data-page" element={<Data/>} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes> */}
      <CustomRoutes />
    </>
  );
}

export default App;
