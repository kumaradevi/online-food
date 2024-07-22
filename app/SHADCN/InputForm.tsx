"use client"
import React from 'react'

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"

    const FormSchema = z.object({
        username: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
      })
       
      export function InputForm() {
        const form = useForm<z.infer<typeof FormSchema>>({
          resolver: zodResolver(FormSchema),
          defaultValues: {
            username: "",
          },
        })
       
        function onSubmit(data: z.infer<typeof FormSchema>) {
          toast({
            title: "You submitted the following values:",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
              </pre>
            ),
          })
        }
  return (
    <div className='bg-amber-50 flex flex-col gap-4 justify-center items-center w-[500px] h-[400px] pb-8'>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <h1 className='font-bold text-center text-xl uppercase p-6'>contact form</h1>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormLabel className='pt-4'>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type='email' />
              </FormControl>


              <FormMessage />
            </FormItem>


          )} />

      </form>
    </Form>
    <Textarea  placeholder='Your message here' className='w-[340px] pt-6'/>
    <Button>Submit</Button>
    </div>

  )
}

