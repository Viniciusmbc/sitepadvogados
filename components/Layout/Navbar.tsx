import Link from "next/link";

export default function Navbar() {
  const menuItems: string[] = [
    "Como funciona?",
    "Planos",
    "FAQ",
    "Quem nós somos?",
    "Fale Conosco",
  ];

  return (
    <header>
      <nav className=" justify-around items-center text-lg bg-secondary flex text-white h-16">
        <div>Web para Advogados</div>
        <ul className=" flex space-x-10">
          {menuItems.map((items, index) => (
            <li key={index}>
              <Link href={items}> {items}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
