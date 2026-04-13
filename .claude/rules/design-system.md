# design system rules

## color usage
- warm plum (#1C1525) is the primary dark background. never use pure black (#0a0a0a).
- hello kitty pink (#FFB5C8) is the primary accent. use deeper pink (#FF8FAE) for hover/interactive states.
- light blush (#FFF5F7) for the work section — creates contrast against the dark sections.
- lime green (#b8ff57) as a secondary pop accent for labels and highlights.
- pastels (lavender, mint, peach, soft pink) for gradient fills, card tints, and softer moments.
- off-white (#f5f0eb) for body text on dark backgrounds.
- dark plum text (#2D2233) for text on light backgrounds.
- never use pure white (#ffffff) or pure black (#000000). keep everything warm.

## typography
- everything lowercase. no exceptions. nav links, headings, buttons, labels.
- generous line height for body text (1.6+)
- large, bold headings that breathe — big type with lots of whitespace

## decorative elements
- sparkle characters (✦) as floating decorations in the hero
- soft gradient orbs (blur-[120px]+) for atmosphere
- noise texture overlay at low opacity (0.015)
- shimmer effects on hover for gallery cards

## animation guidelines
- use framer motion for all animations
- entrance animations: fade + slight translate (y: 20 -> 0), duration 0.6-0.8s
- stagger children by 0.1-0.15s
- scroll-triggered animations via `whileInView`
- hover states: subtle scale (1.02-1.05), lift (y: -4), or color shift
- sparkle elements use CSS keyframe animations
- no bouncy/springy physics — use smooth easing

## layout
- vertical scroll, full-viewport sections
- alternating dark (plum) and light (blush) section backgrounds
- max content width ~1200px, centered
- generous padding (px-6 md:px-12 lg:px-24)
- mobile-first responsive design
