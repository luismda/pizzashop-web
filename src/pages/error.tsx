import { Link } from 'react-router-dom'

export function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">Whoops, algo deu errado...</h1>

        <p className="max-w-[440px] text-center text-accent-foreground">
          Um erro inesperado aconteceu, estamos trabalhando para corrigir o
          problema.
        </p>
      </div>

      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link
          to="/"
          className="text-sky-600 hover:underline hover:underline-offset-4 dark:text-sky-400"
        >
          Dashboard
        </Link>
      </p>
    </div>
  )
}
