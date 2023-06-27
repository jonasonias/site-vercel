import Link from "next/link";
import { useRouter } from "next/router";

export default function Todo(){

    const router = useRouter()
    const todoID = router.query.todoid

    return(
        <>
            <h1>Página {todoID} das Tarefas</h1>
            <p>
                Comentário: comentário 1 aqui...
                <Link href={`/todos/${todoID}/comments/1`}>
                    ver
                </Link>
            </p>
            <p>
                Comentário: comentário 2 aqui...
                <Link href={`/todos/${todoID}/comments/2`}>
                    ver
                </Link>
            </p>
            <Link href="/todos">
                Voltar
            </Link>
        </>
    )
}