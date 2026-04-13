# component patterns

## structure
- one component per file in /components
- named exports: `export function Hero() {}` not `export default`
- keep components under 150 lines — split if larger
- colocate types at top of file

## client vs server
- default to server components
- add 'use client' only for: event handlers, useState, useEffect, framer motion animations
- components using `motion` from framer-motion must be client components

## props
- destructure in function signature
- use typescript interfaces for complex props
- keep prop count low — if > 5 props, consider restructuring

## sections
- each section gets its own component file
- wrap in section-wrapper for consistent spacing and scroll behavior
- use semantic html: section, article, nav, main
