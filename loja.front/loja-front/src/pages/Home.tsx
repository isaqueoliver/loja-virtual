import React from "react";

import { MainContent } from "../hooks/MainContent";
import { useFetch } from "../hooks/useFetch";

interface Produto {
    id: number;
    nome: string;
    preco: number;
};

export const Home: React.FC = () => {
    //const { data } = useFetch<Produto[]>(`http://localhost:5001/api/produto/detalhes/${id}`);
    const { data } = useFetch<Produto[]>("api/produto/listar");

    if(!data){
        return <p>Carregando...</p>
    }

    return(
        <MainContent>
            <ul>
                {data.map(produto => (
                    <li key={produto.id}>
                        <label>{produto.nome}</label>
                    </li>
                ))}
            </ul>
        </MainContent>
    );
};

// export function Home(){
//     const {} = useFetch<User>("http://localhost:5001/api/login");

//     return(
//         <MainContent>
//             <div>
//                 <h1>Produtos</h1>
//             </div>
//         </MainContent>
//     );
// }