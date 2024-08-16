"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

export const deleteFutureBookings = async () => {
  await db.booking.deleteMany({
    where: {
      date: {
        gt: new Date()
      },
    },
  })
  
  revalidatePath("/bookings")
}
