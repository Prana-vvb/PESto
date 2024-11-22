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
                    }, 1000);
                }, 2000);
            } else {
                setTimeout(type, 100);
            }
        };

        type();

        return () => {
            count = 0;
            index = 0;
            document.querySelector("#typed-text").textContent = "";
        };
    }, []);

    //TODO: Change URLs for prod
    return (
        <div>
            <Header userImage={session?.user?.image} userName={session?.user?.name} />
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
                        <button onClick={() => router.push('http://localhost:3003')} className="btn">
                            TODO List
                        </button>
                        <button onClick={() => router.push('http://localhost:3002')} className="btn">
                            Forum
                        </button>
                        <button onClick={() => signOut({ callbackUrl: "/" })} className="btn">
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
