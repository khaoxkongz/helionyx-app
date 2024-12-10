"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export const NewsletterSubscription = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    })
    form.reset()
  }

  return (
    <div className="rounded-lg border bg-card p-8 shadow-sm">
      <h3 className="mb-2 text-2xl font-semibold">Stay Updated</h3>
      <p className="mb-6 text-sm text-muted-foreground">
        Subscribe to our newsletter for the latest updates and industry
        insights.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <Input placeholder="Enter your email" {...field} />
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <span className="size-4 animate-spin">◌</span>
                      ) : (
                        <Send className="size-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
