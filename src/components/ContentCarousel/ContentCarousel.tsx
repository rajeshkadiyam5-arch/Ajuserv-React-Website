import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ContentCarousel.scss";

export interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
  features?: string[];
  link?: string;
  linkText?: string;
  gradient?: string;
  color?: string;
}

interface ContentCarouselProps {
  slides: CarouselSlide[];
  badge?: string;
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  variant?: "default" | "compact" | "featured";
}

export default function ContentCarousel({
  slides,
  badge,
  title,
  subtitle,
  autoPlay = true,
  autoPlayInterval = 5000,
  variant = "default",
}: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    if (!autoPlay) return;
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
  };

  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, slides.length]);

  useEffect(() => {
    setTranslateX(-currentIndex * 100);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
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
    } else if (diff < -threshold && currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setTranslateX(-currentIndex * 100);
    }

    startAutoPlay();
  };

  return (
    <div className={`content-carousel content-carousel--${variant}`}>
      {(badge || title || subtitle) && (
        <motion.div
          className="content-carousel__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {badge && <span className="badge">{badge}</span>}
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </motion.div>
      )}

      <motion.div
        className="content-carousel__wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div
          ref={trackRef}
          className={`content-carousel__track ${isDragging ? "dragging" : ""}`}
          style={{ transform: `translateX(${translateX}%)` }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="content-carousel__slide">
              <div
                className="slide-card"
                style={{
                  "--slide-gradient": slide.gradient,
                  "--slide-color": slide.color || "#2563EB"
                } as React.CSSProperties}
              >
                {slide.icon && (
                  <div
                    className="slide-card__icon"
                    style={{ background: slide.gradient || `linear-gradient(135deg, ${slide.color || "#2563EB"} 0%, ${slide.color || "#2563EB"}99 100%)` }}
                  >
                    {slide.icon}
                  </div>
                )}
                <div className="slide-card__content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>

                  {slide.features && slide.features.length > 0 && (
                    <ul className="slide-card__features">
                      {slide.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {slide.link && (
                    <Link to={slide.link} className="slide-card__link">
                      <span>{slide.linkText || "Learn More"}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="content-carousel__nav content-carousel__nav--prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className="content-carousel__nav content-carousel__nav--next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="content-carousel__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`content-carousel__dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
