Drop real assets here, then swap the placeholder divs for next/image:

  og-image.jpg          1200x630  — social share image (goes in /public root)
  coach.jpg             4:5       — Coach.tsx
  transform-1..6.jpg    4:5       — Transformations.tsx (before/after composites)
  avatar-1..3.jpg       square    — Testimonials.tsx

Example swap:
  import Image from "next/image";
  <Image src="/images/coach.jpg" alt="Keating Garriss" width={800} height={1000} className="rounded-lg" />
