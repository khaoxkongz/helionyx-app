"use client"

import { MailIcon, MessagesSquare, PhoneCall } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SparklesText from "@/components/magicui/sparkles-text"

export const FAQSection = () => {
  const faqs = [
    {
      question: "What types of materials can your laser systems process?",
      answer:
        "Our laser systems can process a wide range of materials including metals, plastics, wood, glass, and ceramics. Each system is optimized for specific material types to ensure the best results for your application.",
    },
    {
      question: "How long is the warranty period for your laser systems?",
      answer:
        "We offer a comprehensive warranty package that includes 2 years of coverage for parts and labor. Extended warranty options are available, and our 24/7 technical support team is always ready to assist you.",
    },
    {
      question: "Do you provide training for operating the laser systems?",
      answer:
        "Yes, we provide complete operator training as part of our installation package. This includes hands-on training, safety procedures, maintenance guidelines, and ongoing support to ensure your team can operate the system effectively.",
    },
    {
      question: "What safety features are included in your laser systems?",
      answer:
        "Our systems include multiple safety features such as automatic shutoff, protective enclosures, emergency stop buttons, and safety interlocks. All our products comply with international safety standards and regulations.",
    },
    {
      question:
        "Can your laser systems be customized for specific applications?",
      answer:
        "Absolutely! We specialize in creating customized laser solutions. Our engineering team will work with you to understand your specific requirements and develop a system that perfectly matches your needs.",
    },
  ]

  return (
    <section className="w-full max-w-7xl">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <SparklesText
            text="Frequently Asked Questions"
            colors={{ first: "#3b82f6", second: "#22c55e" }}
            sparklesCount={10}
          />
        </h2>
        <p className="mt-4 text-muted-foreground">
          Find answers to common questions about our laser solutions
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* FAQ Column */}
        <Card className="border-black/5 bg-white/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <Accordion
              type="multiple"
              defaultValue={["item-0"]}
              className="w-full"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Support Column */}
        <div className="flex flex-col gap-6">
          <Card className="border-black/5 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Need Immediate Support?</CardTitle>
              <CardDescription>
                Our expert support team is available 24/7 to assist you with any
                questions or concerns about our laser solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-white/50"
                >
                  <PhoneCall className="size-4" />
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-white/50"
                >
                  <MessagesSquare className="size-4" />
                  Live Chat
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-white/50"
                >
                  <MailIcon className="size-4" />
                  Email Support
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-black/5 bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Download Resources</CardTitle>
              <CardDescription>
                Access our comprehensive documentation, user guides, and
                technical specifications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  Product Catalog
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-500/20 bg-white/50"
                >
                  Technical Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
