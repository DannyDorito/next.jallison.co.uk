"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useState } from "react";
import { Send } from "lucide-react";
import dynamic from "next/dynamic";
import { Spinner } from "./ui/spinner";

const Turnstile = dynamic(
  () => import("next-turnstile").then((d) => d.Turnstile),
  {
    ssr: false,
    loading: () => <div className="flex justify-center m-2.5 h-15"><Spinner size='medium'>Loading CAPTCHA...</Spinner></div>,
  }
);

export const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required!",
    })
    .email("Email is invalid!"),
  message: z.string().min(1, {
    message: "Message is required!",
  }),
});

export const Contact = () => {
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const [turnstileVerified, setTurnstileVerified] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (!turnstileVerified) {
      toast("Please complete the captcha!");
      return;
    }
    const postData = {
      ...data,
      access_key: process.env.NEXT_PUBLIC_FORM_API_KEY,
    };

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData, null, 2),
    }).then(async (response) => {
      const json = await response.json();
      if (json.success) {
        toast("Message sent to me! <3");
        form.reset();
      } else {
        toast("An Error Occurred!");
        console.error(json.message());
      }
    });
  };

  return (
    <main
      id="contact"
      className="flex min-h-fit flex-col items-center p-24 overflow-hidden"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-3">
        &lt;Contact&#47;&gt;
      </h1>
      <Toaster />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onChange={() => setIsFormDirty(true)}
        >
          <div className="flex flex-row">
            <div className="m-2.5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="m-2.5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="m-2.5">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {isFormDirty && (
            <div className="flex justify-center m-2.5 h-15">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                onVerify={() => setTurnstileVerified(true)}
                onError={() => setTurnstileVerified(false)}
                onExpire={() => setTurnstileVerified(false)}
                theme={"dark"}
              />
            </div>
          )}
          <div className="flex justify-center m-2.5">
            <Button type="submit" className="cursor-pointer">
              <Send className="mr-3" />
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};
