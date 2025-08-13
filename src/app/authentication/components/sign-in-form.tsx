"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .max(100, "A senha deve ter no máximo 100 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

const SignInForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(`Formulario valido e enviado`);
    console.log(data);
  }

  return (
    <>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardHeader>
              <CardTitle>Entrar</CardTitle>
              <CardDescription>Faça login para continuar.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite sua senha"
                        {...field}
                        autoComplete="current-password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Entrar</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default SignInForm;

// <Card>
//           <CardHeader>
//             <CardTitle>Entrar</CardTitle>
//             <CardDescription>Faça login para continuar.</CardDescription>
//           </CardHeader>
//           <CardContent className="grid gap-6">
//             <div className="grid gap-3">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" placeholder="Digite seu email" />
//             </div>
//             <div className="grid gap-3">
//               <Label htmlFor="password">Senha</Label>
//               <Input id="password" placeholder="Digite sua senha" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button>Entrar</Button>
//           </CardFooter>
//         </Card>
