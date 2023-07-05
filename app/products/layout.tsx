import Collection from "../components/layouts/Collection";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="font-light">
        <Collection />
      </div>
      <main>{children}</main>
    </div>
  );
}
