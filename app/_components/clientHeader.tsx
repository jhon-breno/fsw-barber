"use client"

import { useSession } from "next-auth/react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const ClientHeader = () => {
  const { data: session } = useSession()
  const userName = session?.user?.name

  const currentDate = new Date()
  const formattedDate = format(currentDate, "EEEE, dd 'de' MMMM", {
    locale: ptBR,
  })
  const capitalizedDate = capitalizeFirstLetter(formattedDate)

  return (
    <div>
      <h2 className="text-xl font-bold">
        {userName ? `Olá, ${userName}!` : "Olá!"}
      </h2>
      <p>{capitalizedDate}.</p>
    </div>
  )
}

export default ClientHeader
