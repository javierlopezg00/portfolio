// Photos used inside the illustrations (hero, growth story, Ember & Oak
// previews). Static imports so next/image knows each file's dimensions,
// serves resized variants, and generates a blur placeholder. The source
// files are already center-cropped to 4:3 at 1200px — the mockups never
// show them larger than ~400px.
import beautySalon from "@/public/images/beauty-salon.jpg";
import burger from "@/public/images/burger.jpg";
import giftBox from "@/public/images/gift-box.jpg";
import reception from "@/public/images/reception.jpg";
import pasta from "@/public/images/pasta.jpg";
import profile from "@/public/images/profile.jpg";
import risotto from "@/public/images/risotto.jpg";
import salmon from "@/public/images/salmon.jpg";
import shortRib from "@/public/images/short-rib.jpg";
import tacos from "@/public/images/tacos.jpg";

export const images = {
  // The real headshot for the About section.
  profile,
  reception,
  beautySalon,
  giftBox,
  // Order matches dict.work.previewContent.restaurant.menu — the first
  // three are the dishes listed there, the rest fill out the gallery.
  dishes: [shortRib, salmon, risotto, pasta, burger, tacos],
} as const;

// All photos are decorative parts of a mockup, so they share one
// `sizes` hint: they render at ~120–400px wide at every breakpoint.
export const MOCKUP_IMAGE_SIZES = "(min-width: 640px) 400px, 50vw";
