import Image from "next/image";

import type { PortfolioCard } from "@/content/portfolio";

export function ProjectCover({
  card,
  compact = false,
}: {
  card: PortfolioCard;
  compact?: boolean;
}) {
  return (
    <span className="home-project-cover" aria-hidden="true">
      <Image
        src={card.image.src}
        alt={card.image.alt}
        fill
        sizes={
          compact
            ? "(max-width: 600px) 90vw, (max-width: 900px) 46vw, (max-width: 1440px) 29vw, 406px"
            : "(max-width: 600px) 90vw, (max-width: 1440px) 46vw, 628px"
        }
        style={{ objectPosition: card.image.position ?? "50% 50%" }}
      />
    </span>
  );
}
