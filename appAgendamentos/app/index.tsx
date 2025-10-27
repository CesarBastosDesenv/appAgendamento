import { router } from "expo-router";
import { useEffect } from "react";

export default function IndexRedirect() {
  useEffect(() => {
    // Redireciona para login APÓS o componente montar
    const timer = setTimeout(() => {
      router.replace("/auth/login/login");
    }, 0); // 0ms para garantir que Root Layout monte

    return () => clearTimeout(timer);
  }, []);

  return null; // não renderiza nada
}
