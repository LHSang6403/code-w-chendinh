import Header from "./Components/Header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-auto min-h-screen w-full flex-col items-center bg-black px-10 xl:px-6 sm:px-4">
      <Header />
      {children}
    </div>
  );
}
