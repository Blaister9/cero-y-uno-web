"use client";

import { MessageSquareText, Waypoints } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { serviceCase } from "@/content/service-case";
import { cn } from "@/lib/utils";

type CaseStoryProps = Pick<typeof serviceCase, "chapters" | "example">;

export function CaseStory({ chapters, example }: CaseStoryProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = chapters[activeIndex];

  useEffect(() => {
    if (!listRef.current) return;
    const items = Array.from(listRef.current.children);
    let observer: IntersectionObserver;

    const observeChapters = () => {
      observer?.disconnect();
      const top = Math.round(window.innerHeight * 0.37);
      const bottom = Math.round(window.innerHeight * 0.46);
      observer = new IntersectionObserver(
        (entries) => {
          const current = entries.find((entry) => entry.isIntersecting);
          if (current) setActiveIndex(items.indexOf(current.target));
        },
        { rootMargin: `-${top}px 0px -${bottom}px 0px` }
      );
      for (const item of items) observer.observe(item);
    };

    observeChapters();
    window.addEventListener("resize", observeChapters);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", observeChapters);
    };
  }, []);

  return (
    <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
      <ol className="space-y-4" ref={listRef}>
        {chapters.map((chapter, index) => (
          <li
            className={cn(
              "rounded border border-white/10 bg-ink/[0.52] p-5 sm:p-7 lg:min-h-60 lg:transition-colors motion-reduce:transition-none",
              index === activeIndex && "lg:border-signal/35 lg:bg-deepblue/15"
            )}
            key={chapter.stage}
          >
            <p className="flex items-center gap-3 text-sm font-medium text-signal">
              <span aria-hidden="true" className="font-mono text-xs text-ember">0{index + 1}</span>
              {chapter.stage}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-porcelain">{chapter.title}</h3>
            <p className="mt-4 text-base leading-7 text-steel">{chapter.body}</p>

            {chapter.showExample && (
              <figure className="mt-6 rounded border border-white/10 bg-ink/75 p-4 sm:p-5">
                <figcaption className="mb-4 flex items-center gap-2 text-sm font-medium text-porcelain">
                  <MessageSquareText aria-hidden="true" className="shrink-0 text-signal" size={16} />
                  {example.caption}
                </figcaption>
                <div className="grid gap-3">
                  {example.messages.map(({ speaker, text }, messageIndex) => (
                    <div
                      className={cn(
                        "w-fit max-w-[92%] rounded border px-3 py-2 text-sm leading-6",
                        messageIndex === 0
                          ? "justify-self-end border-signal/25 bg-deepblue/30"
                          : "border-white/10 bg-white/[0.04]"
                      )}
                      key={speaker}
                    >
                      <p className="text-xs font-medium text-signal">{speaker}</p>
                      <p className="text-porcelain">{text}</p>
                    </div>
                  ))}
                </div>
              </figure>
            )}
          </li>
        ))}
      </ol>

      <div aria-hidden="true" className="hidden lg:block">
        <div className="sticky top-24 rounded border border-white/10 bg-ink p-6 shadow-premium xl:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="flex items-center gap-2 text-sm font-medium text-steel">
              <Waypoints className="text-signal" size={17} />
              Recorrido del prototipo
            </p>
            <span className="font-mono text-xs text-ember">0{activeIndex + 1} / 0{chapters.length}</span>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2">
            {chapters.map(({ stage }, index) => (
              <div className={cn("h-1 rounded-full", index <= activeIndex ? "bg-signal" : "bg-white/10")} key={stage} />
            ))}
          </div>
          <p className="mt-5 text-xl font-semibold text-porcelain">{active.scene.title}</p>
          <dl className="mt-5 grid gap-2">
            {active.scene.rows.map(({ label, value }) => (
              <div className="grid grid-cols-[6rem_1fr] items-baseline gap-3 rounded border border-white/10 bg-white/[0.03] px-3 py-3 text-sm" key={label}>
                <dt className="font-medium text-signal">{label}</dt>
                <dd className="text-steel">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
