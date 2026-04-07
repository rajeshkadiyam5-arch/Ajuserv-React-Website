import "./Skeleton.scss";

interface SkeletonProps {
  variant?: "page" | "hero" | "card" | "text";
}

export default function Skeleton({ variant = "page" }: SkeletonProps) {
  if (variant === "hero") {
    return (
      <div className="skeleton skeleton--hero">
        <div className="skeleton__hero-content">
          <div className="skeleton__badge" />
          <div className="skeleton__title" />
          <div className="skeleton__text" />
          <div className="skeleton__text skeleton__text--short" />
          <div className="skeleton__buttons">
            <div className="skeleton__button" />
            <div className="skeleton__button skeleton__button--outline" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="skeleton skeleton--card">
        <div className="skeleton__card-icon" />
        <div className="skeleton__card-title" />
        <div className="skeleton__card-text" />
        <div className="skeleton__card-text skeleton__card-text--short" />
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className="skeleton skeleton--text">
        <div className="skeleton__line" />
        <div className="skeleton__line skeleton__line--medium" />
        <div className="skeleton__line skeleton__line--short" />
      </div>
    );
  }

  // Default: Full page skeleton
  return (
    <div className="skeleton skeleton--page">
      {/* Hero Section Skeleton */}
      <div className="skeleton__hero">
        <div className="skeleton__hero-content">
          <div className="skeleton__badge" />
          <div className="skeleton__title" />
          <div className="skeleton__text" />
          <div className="skeleton__text skeleton__text--short" />
          <div className="skeleton__buttons">
            <div className="skeleton__button" />
            <div className="skeleton__button skeleton__button--outline" />
          </div>
        </div>
        <div className="skeleton__hero-metrics">
          <div className="skeleton__metric" />
          <div className="skeleton__metric" />
          <div className="skeleton__metric" />
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="skeleton__content">
        <div className="skeleton__section-header">
          <div className="skeleton__badge skeleton__badge--small" />
          <div className="skeleton__heading" />
          <div className="skeleton__subheading" />
        </div>
        <div className="skeleton__grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton__card">
              <div className="skeleton__card-icon" />
              <div className="skeleton__card-title" />
              <div className="skeleton__card-text" />
              <div className="skeleton__card-text skeleton__card-text--short" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
