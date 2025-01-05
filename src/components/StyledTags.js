export function HeroText() {
  return <h1 className="text-6xl text-primary font-extrabold font-display">Connect. Chat. Study.</h1>;
}

export function Title({ children }) {
  return <h1 className="text-5xl text-neutral-black font-extrabold font-display">{children}</h1>;
}

export function Subheading({ children }) {
  return <h2 className="text-3xl text-neutral-black font-bold font-display">{children}</h2>;
}
