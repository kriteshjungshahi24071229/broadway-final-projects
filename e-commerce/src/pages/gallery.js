import Nav from "../Nav";
import Footer from "../Footer";

export default function Gallery() {
    return (
        <main
            style={{
                padding: "20px",
                fontFamily: "Arial",
            }}
        >
            <Nav />

            <h1
                style={{
                    fontSize: "48px",
                    fontWeight: "700",
                }}
            >
                Gallery Page
            </h1>

            <p>
                Welcome to our Gallery page.
            </p>

            <Footer />
        </main>
    );
}