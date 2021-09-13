import { RepositoryItem } from "./RepositoryItem";


export function RepositoryList(){
    return(
        <section>
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository='unform2'/>
            </ul>
        </section>
    )
}