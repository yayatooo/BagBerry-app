function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-default">{children}</div>
  );
}

export default MainLayout;
