---
id: gradient-type
title: Gradient Type
date: "2020-03-06"
media:
- id: gradient-type-1
  name: K
  path: "letter-k-2.png"
  type: image
- id: gradient-type-2
  name: Q
  path: "letter-q.png"
  type: image
- id: gradient-type-3
  name: R
  path: "letter-r-2.png"
  type: image
- id: gradient-type-4
  name: X
  path: "letter-x.png"
  type: image
banner:
  id: gradient-type-3
  color: hsl(27, 28%, 60%)
thumbnail: "thumbnail-letter-r.png"
techStack:
- OPENRNDR
- GLSL
---

**Gradient Type** is a typography experiment, which makes use of an image processing technique for hole filling.<br>
This technique fills transparent parts of the image interpolating the edge pixel colors by solving a Poisson equation.
