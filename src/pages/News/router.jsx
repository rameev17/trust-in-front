import { Route, Routes } from "react-router-dom";
import NewsPage from "./NewsPage";
import News from "./News";

const NewsRouter = () => {
  return (
    <Routes>
      <Route index element={<News />} />
      <Route path=":id" element={<NewsPage />} />
    </Routes>
  );
};

export default NewsRouter;
