// import Footer from "../ui/Footer";
// import Navbar from "../ui/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-default">
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
