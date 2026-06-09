import { useEffect, useState } from "react";
import "./navbar.css"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function NavBar(){
      const router = useRouter();
    const [nome, setNome] = useState("");


    useEffect(() => {
        const userName = Cookies.get("userName");
       
        if (userName) {
            setNome(userName);
        } else {
            // Caso o cookie suma por algum motivo, volta para o login
            router.push("/");
        }
    }, [router]);


    function logout() {
        Cookies.remove("logged");
        Cookies.remove("userName");
        router.push("/");
    }

    return(
        <nav>
                <a href="/dashboard">Inicio</a>
                <a href="/dashboard/produto">Produto</a>
                <a href="/dashboard/estoque">Estoque</a>
                <button onClick={logout}>Sair do sistema</button>
        </nav>
    )
}