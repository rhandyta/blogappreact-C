import PostList from "./app/post/PostList";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <section className="max-w-2xl mx-auto pt-8">
                <PostList />
            </section>
        </>
    );
}

export default App;
