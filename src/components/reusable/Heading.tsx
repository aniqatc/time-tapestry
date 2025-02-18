export default function Heading({ children }: { children: React.ReactNode }): JSX.Element {
  return <h1 className="text-primary-800 text-2xl font-bold">{children}</h1>;
}
