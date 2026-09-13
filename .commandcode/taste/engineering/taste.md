# Taste — engineering

- Prefers surgical, incremental changes that **preserve the existing architecture and visual identity** over redesigns or rewrites: inspect existing components first, keep the current structure/palette/typography, and avoid rebuilding the project unnecessarily. Confidence: 0.85
- Performance-conscious on front-end work: targets 60 FPS and prefers GPU-friendly animation (transform / opacity / scale / translate / CSS variables), avoiding layout calculations, expensive box-shadow animations, excessive blur, and continuous JS animation. Confidence: 0.8
- Requires animations to respect `prefers-reduced-motion`, disabling parallax/cursor effects and reducing motion so it never interferes with reading, navigation, clicking, or accessibility. Confidence: 0.8
