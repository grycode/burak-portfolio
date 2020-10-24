export default {
  colors: {
    text: "#d0d0d1",
    background: "#18171d",
    primary: "#ffb87a",
    secondary: "#a2a2a4",
    muted: "#616065",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 2,
      lineHeight: "body",
    },
    p: {
      fontSize: [2, 3],
      marginTop: 0,
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
  },
}
