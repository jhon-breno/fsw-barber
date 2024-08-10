"use client"

import { Copy, SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  const formartPhone = (phone: string): string => {
    // Remover todos os caracteres que não são dígitos
    return phone.replace(/[^\d]/g, "")
  }

  // Formatar o número de telefone
  const numDoTelefone = formartPhone(phone)

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <div className="flex items-center gap-6 pr-4">
        <Copy
          onClick={() => handleCopyPhoneClick(phone)}
          className="cursor-pointer"
        />
        <Link
          href={`http://wa.me/55${numDoTelefone}`}
          target="blank"
          title="WhatsApp"
        >
          <Image
            src="/whatsapp-icon.svg"
            width={20}
            height={20}
            alt="WhatsApp"
          />
        </Link>
      </div>
    </div>
  )
}

export default PhoneItem
