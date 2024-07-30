import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-center gap-6 p-4 text-2xl">
			<Link href={"/"}>Inicio</Link>
			<Link href={"/users"}>Usuarios</Link>
			<Link href={"/matches"}>Partidas</Link>
		</nav>
	);
}
