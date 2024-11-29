/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        brand: getColorScale("blue"),
        gray: getColorScale("gray"),
        error: getColorScale("red"),
        danger: getColorScale("red"),
        success: getColorScale("green"),
        warning: getColorScale("yellow"),
        info: getColorScale("cyan"),
      },
    },
  },
  plugins: [],
};

function getColorScale(name) {
  let scale = {};

  for (let i = 1; i <= 12; i++) {
    scale[i] = `var(--${name}-${i})`;
  }

  for (let i = 1; i <= 12; i++) {
    scale[`a${i}`] = `var(--${name}-a${i})`;
  }

  scale.contrast = `var(--${name}-contrast)`;
  scale.surface = `var(--${name}-surface)`;
  scale.indicator = `var(--${name}-indicator)`;
  scale.track = `var(--${name}-track)`;

  return scale;
}
