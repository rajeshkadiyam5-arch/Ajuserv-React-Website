import type { ReactNode } from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({ title, description, children, className = "" }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <h3 className="card__title">{title}</h3>
      {description && <p className="card__description">{description}</p>}
      {children}
    </div>
  );
}
