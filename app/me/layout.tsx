import AsideMenu from "@/components/aside-menu";
import SearchBar from "@/components/search-bar";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex">
      <AsideMenu />
      <section className="w-full">
        <SearchBar />
        <div className="p-10">{children}</div>
      </section>
    </main>
  );
}
