import Image from "next/image"

import Marquee from "@/components/magicui/marquee"

export const PartnersSection = () => {
  const partners = [
    {
      name: "Siemens",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png",
    },
    {
      name: "Bosch",
      logo: "https://www.bosch.com/assets/img/bosch-brand/bosch-logo-2022.svg",
    },
    {
      name: "Trumpf",
      logo: "https://www.trumpf.com/filestorage/TRUMPF_Master/Corporate/Logo/TRUMPF-Logo.svg",
    },
    {
      name: "Mitsubishi Electric",
      logo: "https://www.mitsubishielectric.com/sites/g/files/oydpw1281/files/2023-03/logo.svg",
    },
    {
      name: "ABB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png",
    },
    {
      name: "Fanuc",
      logo: "https://www.fanuc.eu/~/media/corporate/logo.svg",
    },
  ]

  return (
    <section className="w-full max-w-6xl">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold">Trusted by Industry Leaders</h2>
        <p className="mt-2 text-muted-foreground">
          Partnering with global manufacturers to deliver excellence
        </p>
      </div>

      <Marquee className="py-12 [--duration:10s]" pauseOnHover>
        {partners.map((partner, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center grayscale transition-all hover:grayscale-0"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
