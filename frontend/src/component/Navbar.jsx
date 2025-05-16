import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 text-white fixed top-0 left-0 w-full z-10">
            {/* Nama di kiri */}
            <div className="text-2xl font-bold">
                <Link to="/" className="hover:text-gray-200">NINETIES</Link>
            </div>

            {/* Navigasi di tengah */}
            <div className="flex space-x-6">
                <Link to="/about" className="hover:text-gray-200">ABOUT</Link>
                <Link to="/category" className="hover:text-gray-200">CATEGORY</Link>
                <Link to="/music" className="hover:text-gray-200">MUSIC</Link>
            </div>

            {/* Ikon/logo di kanan */}
            <div className="flex items-center space-x-4 fill-white">
                {/* Spotify Logo */}
                <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" 
                        alt="Spotify Logo" 
                        className="h-6"
                    />
                </a>

                {/* YouTube Logo */}
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg" 
                        alt="YouTube Logo" 
                        className="h-6"
                    />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;