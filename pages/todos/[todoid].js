import Link from "next/link";

export async function getStaticProps(context){

    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`)

    const todo = await data.json()

    return{
        props:{ todo }
    }

  }

  export async function getStaticPaths(context){

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")

    const data = await response.json()

    const paths = data.map((todo)=>{
        return{
            params: {
                todoid: `${todo.id}`
            }
        }
    })

    return {paths, fallback: false}

  }

export default function Todo({ todo }){

    return(
        <>
            <h1>Página {todo.id} das Tarefas</h1>
            <h3>{todo.title}</h3>
            <p>
                Comentário: comentário 1 aqui...
                <Link href={`/todos/${todo.id}/comments/1`}>
                    ver
                </Link>
            </p>
            <p>
                Comentário: comentário 2 aqui...
                <Link href={`/todos/${todo.id}/comments/2`}>
                    ver
                </Link>
            </p>
            <Link href="/todos">
                Voltar
            </Link>
        </>
    )
}