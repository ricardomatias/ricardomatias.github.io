---
id: broken-glass
title: Broken Glass
date: "2020-03-20"
media:
- id: broken-glass-1
  name: Broken Glass
  path: "broken-glass-1.png"
  type: image
- id: broken-glass-2
  name: Broken Glass
  path: "broken-glass-2.png"
  type: image
- id: broken-glass-3
  name: Broken Glass
  path: "broken-glass-3.png"
  type: image
banner:
  id: broken-glass-3
  color: hsl(0, 0%, 0%)
thumbnail: "thumbnail-broken-1.jpg"
techStack:
- OPENRNDR
- GLSL
---

**Broken Glass** is an experiment in particle systems (gpu). The particle movement is based on a [Simplex Noise](https://en.wikipedia.org/wiki/Simplex_noise) texture, while it's color is based on the initial position and the pixel (or area) it represents.
