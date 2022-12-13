export default function Navbar() {
  const menuItems: string[] = [
    "Como funciona?",
    "Preço",
    "Exemplos",
    "Fale Conosco",
  ];

  return (
    <nav className=" bg-[#155D96] flex text-white">
      <div>Web para Advogados</div>
      <ul className=" flex">
        {menuItems.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </nav>
  );
}
