import { useState, useEffect } from "react";
import TiltedCard from "../component/TiltedCard";

function Home() {
  const [cards, setCards] = useState([]); // State untuk menyimpan data dari API
  const [page, setPage] = useState(1); // State untuk melacak halaman data
  const [loading, setLoading] = useState(false); // State untuk loading data tambahan

  // Fetch data dari API Express
  const fetchCards = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/cards?page=${page}`); // Tambahkan parameter halaman
      const data = await response.json();
      setCards((prevCards) => [...prevCards, ...data]); // Tambahkan data baru ke state
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards(page); // Ambil data awal
  }, [page]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prevPage) => prevPage + 1); // Tambahkan halaman untuk fetch data berikutnya
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-6 w-full pt-20"> {/* Tambahkan padding-top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-10 gap-x-50">
        {cards.map((card) => (
          <TiltedCard
            key={card.id}
            imageSrc={card.imageSrc}
            altText={card.title}
            captionText={card.title}
            containerHeight="150px"
            containerWidth="150px"
            imageHeight="150px"
            imageWidth="150px"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={true}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">{card.title}</p>
            }
          />
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
}

export default Home;