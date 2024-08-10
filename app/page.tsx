import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* HEAD */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jhon</h2>
        <p>Sexta-feira, 09 de agosto</p>

        <div className="mt-5 flex items-center gap-2">
          <Input placeholder="Faça sua busca..."></Input>
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[180px] w-full">
          <Image
            alt="Agende agora nos melhores com JN Barber"
            src="/Banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
