"use client";

/** FAQ accordion — shadcn Accordion. */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Locale } from "@/content";
import { useLanguage } from "./language-context";

export function FAQAccordion({
  items,
  className,
}: {
  items: readonly { q: Locale; a: Locale }[];
  className?: string;
}) {
  const { lang } = useLanguage();

  return (
    <Accordion type="single" collapsible className={className}>
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger className="text-left text-base font-semibold hover:text-primary hover:no-underline">
            {item.q[lang]}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.a[lang]}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
