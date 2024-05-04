import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full !appearance-none bg-[#05010D]">
      <div className="flex h-auto min-h-screen w-full flex-col items-center overflow-hidden px-20 xl:px-6 sm:px-4">
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  );
}
