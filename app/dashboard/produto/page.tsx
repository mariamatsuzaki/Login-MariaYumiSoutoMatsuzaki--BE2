'use client';

import NavBar from '@/app/components/navbar';
import ProdutosForm from '@/app/components/ProdutoForm';
import '../../formStyle.css';

export default function ProdutosPage() {
    return (
        <>
            <NavBar />
            {/* Como não passamos o produtoId, o form entende que é uma criação limpa */}
            <ProdutosForm />
        </>
    );
}