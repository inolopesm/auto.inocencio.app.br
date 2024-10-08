import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAuth } from "../contexts/auth-context";
import { ApiError, api } from "../lib/api";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, "Por favor informe um email")
    .max(255, "Campo email deve ter no máximo 255 caracteres"),
  password: z
    .string()
    .min(1, "Por favor informe uma senha")
    .max(24, "Campo senha deve ter no máximo 24 caracteres"),
});

type FormErrors = z.inferFlattenedErrors<typeof FormSchema>;

export function Component() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.target instanceof HTMLFormElement)) {
      throw new Error("Expected event.target to be instanceof HTMLFormElement");
    }

    const parseFormResult = FormSchema.safeParse(
      Object.fromEntries(new FormData(event.target)),
    );

    if (!parseFormResult.success) {
      setErrors(parseFormResult.error.flatten());
      return;
    }

    const { data } = parseFormResult;
    setErrors(undefined);
    setLoading(true);

    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setLoading(false);
          resolve();
        }, 1000);
      });

      const {
        data: { accessToken },
      } = z
        .object({ data: z.object({ accessToken: z.string() }) })
        .parse(await api.post("https://api.auto.inocencio.app.br/login", data));

      login(accessToken);
      navigate("/admin");
    } catch (error) {
      setLoading(false);

      if (error instanceof ApiError) {
        toast.error(error.message);
        return;
      }

      console.error(error);
      toast.error("Não foi possível realizar o login");
    }
  };

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <form
        className="w-full max-w-xs rounded border p-4 dark:border-gray-700 dark:bg-gray-800"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 font-serif text-2xl">Acessar Admin</div>
        <div className="mb-6">
          <label
            autoCapitalize="off"
            autoCorrect="off"
            className="mb-1 inline-block text-sm font-medium"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            disabled={loading}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
          {errors?.fieldErrors.email !== undefined && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fieldErrors.email[0]}
            </p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="mb-1 inline-block text-sm font-medium"
            htmlFor="senha"
          >
            Senha
          </label>
          <Input
            disabled={loading}
            id="senha"
            name="password"
            placeholder="Senha"
            type="password"
          />
          {errors?.fieldErrors.password !== undefined && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fieldErrors.password[0]}
            </p>
          )}
        </div>
        <div className="mb-6 text-end text-sm">
          <a
            className="font-medium hover:underline"
            href="https://wa.me/5583991957887?text=Vim%20do%login%20de%20auto.inocencio.app.br%20e%20esqueci%20minha%20senha"
            rel="noopener noreferrer"
            target="_blank"
          >
            Esqueceu a senha?
          </a>
        </div>
        <div className="mb-4 grid">
          <Button disabled={loading} type="submit">
            Entrar
          </Button>
        </div>
        <div className="text-sm">
          Não possui conta?{" "}
          <a
            className="font-medium hover:underline"
            href="https://wa.me/5583991957887?text=Vim%20do%20login%20de%20auto.inocencio.app.br%20e%20quero%20me%20cadastrar"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cadastre-se
          </a>
        </div>
      </form>
    </div>
  );
}
