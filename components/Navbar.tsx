export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about"},
    { name: "Career Path", href: "#path"}
  ];

  return (
    <nav className="top-6 left-0 w-full flex justify-center z-50 px-4">
      <div className="flex justify-center gap-8 py-4 bg-gray-100 rounded-full w-100">
        {menuItems.map((item) => (
          <a 
            key={item.name}
            href={item.href} 
            className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}