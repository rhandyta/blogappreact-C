import { Route, Routes } from "react-router-dom";
import AddPost from "./app/post/AddPost";
import PostList from "./app/post/PostList";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <section className="max-w-2xl mx-auto pt-8">
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="add-post" element={<AddPost />} />
                </Routes>
            </section>
        </>
    );
}

export default App;
