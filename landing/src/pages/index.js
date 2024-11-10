import { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '../components/Header';

const Home = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        const texts = ["Lock in.", "Grind.", "Ee sem MRD nimde."];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        const type = () => {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);
            document.querySelector("#typed-text").textContent = letter;

            if (letter.length === currentText.length) {
                setTimeout(() => {
                    setTimeout(() => {
                        document.querySelector("#typed-text").textContent = "";
                        index = 0;
                        count++;
                        type();
                    }, 1000);  // Pause before starting to delete
                }, 2000); // Pause after typing the full sentence
            } else {
                setTimeout(type, 100);
            }
        };

        type(); // Start the typing effect

        // Cleanup function
        return () => {
            count = 0;
            index = 0;
            document.querySelector("#typed-text").textContent = "";
        };
    }, []);

    // Change URLs for prod
    return (
        <div>
            <Header />
            <div className="container">
                <h1>Welcome to <span className='PES'>PES</span><span className='to'>to</span></h1>
                <h2 className="typing">
                    <span id="typed-text"></span>
                    <span className="cursor">|</span>
                </h2>
                <p>Get Productive!</p>

                {!session ? (
                    <div className="google-login" onClick={() => signIn('google')}>
                        <i className="fa-brands fa-google fa-3x" style={{ color: '#405084' }}></i>
                        <a className="google-btn">Login with Google</a>
                    </div>
                ) : (
                    <div className="logged-in">
                        <button onClick={() => router.push('http://localhost:3002')} className="btn">
                            Note Keeper
                        </button>
                        <button onClick={() => router.push('http://localhost:3003')} className="btn">
                            TODO List
                        </button>
                        <button onClick={() => signOut({ callbackUrl: "/" })} className="btn">
                            Log Out
                        </button>
                    </div>
                )}
            </div>

            <section id="about-us">
                <h2>What is PESto?</h2>
                <p>PESto is a website tailor-made for PES University students to help you keep track of your coursework.</p>
            </section>
        </div>
    );
};

export default Home;
