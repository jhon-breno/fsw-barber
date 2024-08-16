"use client"

import { Button } from "./ui/button"
import { deleteFutureBookings } from "../_actions/delete-all-booking"
import { useTransition } from "react"
import { toast } from "sonner"
import Image from "next/image"
import { CalendarX2 } from "lucide-react"

const CancelAllBooking = () => {
  const [isPending, startTransition] = useTransition()

  const handleCancelAll = () => {
    startTransition(async () => {
      try {
        await deleteFutureBookings()
        toast.success("Reservas cancelada com sucesso!")
      } catch (error) {
        toast.error("Erro ao cancelar a reservas.")
      }
    })
  }

  return (
    <Button
      variant="destructive"
      onClick={handleCancelAll}
      disabled={isPending}
      className="flex justify-between gap-1 rounded-xl p-2 text-xs font-bold"
      title="Cancelar todos os agendamentos confirmados"
    >
      <CalendarX2 />
      {isPending ? "Cancelando..." : ""}
    </Button>
  )
}

export default CancelAllBooking
