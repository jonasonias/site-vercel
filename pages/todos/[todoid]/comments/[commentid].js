import Link from "next/link";
import { useRouter } from "next/router";

export default function Comment(){

    const router = useRouter()
    const todoID = router.query.todoid
    const commentID = router.query.commentid

    return(
        <>
            <h1>Comentário {commentID} da Tarefa {todoID}</h1>
            <Link href={`/todos/${todoID}`}>
                Voltar
            </Link>
        </>
    )
}