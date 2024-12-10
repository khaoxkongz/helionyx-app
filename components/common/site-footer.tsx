import Link from "next/link"
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
    tours: [
      { label: "All Tours", href: "/tours" },
      { label: "Featured Tours", href: "/tours?featured=true" },
      { label: "Travel Blog", href: "/blog" },
      { label: "Private Tours", href: "/tours/private" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Travel Insurance", href: "/insurance" },
      { label: "Cancellation Policy", href: "/cancellation" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Youtube, href: "https://youtube.com" },
  ]

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: Mail, text: "contact@wanderlust.com" },
    { icon: MapPin, text: "123 Travel Street, Adventure City, AC 12345" },
  ]

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <aside className="lg:col-span-2">
            <Link
              href="/"
              className="mb-4 block text-2xl font-bold text-primary"
            >
              Helionyx
            </Link>
            <p className="mb-6 max-w-md text-muted-foreground">
              Discover the world with Wanderlust. We create unforgettable travel
              experiences that combine adventure, culture, and comfort.
            </p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon className="size-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Tours</h3>
            <ul className="space-y-3">
              {footerLinks.tours.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-muted-foreground sm:text-left">
              © {currentYear} Helionyx. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
