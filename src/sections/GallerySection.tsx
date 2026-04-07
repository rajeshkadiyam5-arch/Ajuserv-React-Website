import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./GallerySection.scss";

// Import team images
import team1 from "../assets/images/team/Team1.jpg";
import team2 from "../assets/images/team/Team2.jpg";
import team3 from "../assets/images/team/Team3.jpg";
import team4 from "../assets/images/team/Team4.jpg";
import team5 from "../assets/images/team/Team5.jpg";

const teamImages = [
  { id: 1, src: team1, alt: "Team Activity 1" },
  { id: 2, src: team2, alt: "Team Activity 2" },
  { id: 3, src: team3, alt: "Team Activity 3" },
  { id: 4, src: team4, alt: "Team Activity 4" },
  { id: 5, src: team5, alt: "Team Activity 5" },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamImages.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setTranslateX(-currentIndex * 100);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamImages.length);
    startAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length);
    startAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startAutoPlay();
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    const slideWidth = trackRef.current?.offsetWidth || 1;
    const newTranslate = -currentIndex * 100 + (diff / slideWidth) * 100;
    setTranslateX(newTranslate);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = clientX - startX;
    const slideWidth = trackRef.current?.offsetWidth || 1;
    const threshold = slideWidth * 0.2;

    if (diff > threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (diff < -threshold && currentIndex < teamImages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setTranslateX(-currentIndex * 100);
    }

    startAutoPlay();
  };

  return (
    <section className="gallery-section">
      <div className="gallery-section__container">
        <motion.div
          className="gallery-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="badge">Our Team</span>
          <h2>Gallery</h2>
          <p>Moments that define our culture and teamwork</p>
        </motion.div>

        <motion.div
          className="gallery-carousel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            ref={trackRef}
            className={`gallery-carousel__track ${isDragging ? "dragging" : ""}`}
            style={{ transform: `translateX(${translateX}%)` }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {teamImages.map((image) => (
              <div key={image.id} className="gallery-carousel__slide">
                <img src={image.src} alt={image.alt} draggable="false" />
              </div>
            ))}
          </div>

          <button className="gallery-carousel__nav gallery-carousel__nav--prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button className="gallery-carousel__nav gallery-carousel__nav--next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="gallery-carousel__dots">
            {teamImages.map((_, index) => (
              <button
                key={index}
                className={`gallery-carousel__dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
