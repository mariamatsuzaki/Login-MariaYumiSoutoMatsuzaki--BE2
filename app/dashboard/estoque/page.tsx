'use client';
'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useProdutos } from '@/app/hooks/useProd';
import NavBar from '@/app/components/navbar';
import FormEstoque from "@/app/components/formStock";

export default function Dashboard() {
    const router = useRouter();
    const [name, setName] = useState("");
    const { produtos, loading, listarProdutos, excluir } = useProdutos();

    useEffect(() => {
        listarProdutos();
    }, [listarProdutos]);

    useEffect(() => {
        const userName = Cookies.get("userName");

        if (userName) {
            setName(userName);
        } else {
            router.push("/");
        }
    }, [router]);

    return (
        <div>
            
            
            <FormEstoque/>
        </div>
    );
}