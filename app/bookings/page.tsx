import { getServerSession } from "next-auth"
import Header from "../_components/header"
import { authOptions } from "../_lib/auth"
import { notFound } from "next/navigation"
import { db } from "../_lib/prisma"
import BookingItem from "../_components/booking-item"
import CancelAllBooking from "../_components/cancel-all-booking"
import Image from "next/image"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    // TODO: mostrar pop-up de login
    return notFound()
  }

  const confirmedBookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })
  const concludedBookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        lt: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
  })

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        {confirmedBookings.length > 0 && (
          <>
            <div className="flex justify-between">
              <h2 className="text-xs font-bold uppercase text-gray-400">
                Confirmados
              </h2>
              <CancelAllBooking />
            </div>
            <div className="space-y-3">
              {confirmedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
              ))}
            </div>
          </>
        )}

        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Finalizados
            </h2>
            <div className="space-y-3">
              {concludedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
              ))}
            </div>
          </>
        )}
      </div>
      {concludedBookings.length < 1 && confirmedBookings.length < 1 && (
        <div className="mt-28 flex flex-col items-center justify-center gap-10 text-xs font-bold uppercase text-gray-400">
          <p>Poxa. Não há agendamentos</p>
          <Image
            src="/bad.jpg"
            width={360}
            height={360}
            alt="Sem agendamentos"
          />
        </div>
      )}
    </>
  )
}

export default Bookings
