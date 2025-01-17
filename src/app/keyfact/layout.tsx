import Nav from "../_components/Nav";

export default function keyfactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
} 