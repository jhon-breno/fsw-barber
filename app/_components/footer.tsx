import { Github, Instagram, Linkedin } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Card>
        <CardContent className="flex justify-between px-5 py-6">
          <p className="text-sm text-gray-400">
            © {currentYear} Developer by{" "}
            <span className="font-bold">JN Barber</span>
          </p>
          <div className="flex gap-2 text-gray-400">
            <a href="https://github.com/jhon-breno" target="_blank">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/jhonbrenocosta/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/jhonbrenocosta" target="_blank">
              <Instagram />
            </a>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
