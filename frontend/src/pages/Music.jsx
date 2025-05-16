import { useState, useEffect } from "react";
import TiltedCard from "../component/TiltedCard";


function Music() {
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

  // Infinite scroll handler (horizontal)
  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
      const clientWidth = document.documentElement.clientWidth || window.innerWidth;

      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        setPage((prevPage) => prevPage + 1); // Tambahkan halaman untuk fetch data berikutnya
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen overflow-x-scroll overflow-y-hidden pt-50 hide-scrollbar">
      <div className="flex space-x-15 px-6">
        {cards.map((card) => (
          <TiltedCard
            key={card.id}
            imageSrc={card.imageSrc}
            altText={card.title}
            captionText={card.title}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
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

export default Music;