"use client";

// import type { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/contacts/seo.contacts";
import { authFormType } from "@/types/auth.types";
import { JSXElementConstructor, useState } from "react";

// export const metadata: Metadata = {
//   title: "Authorization",
//   ...NO_INDEX_PAGE,
// };

export default function AuthPage({ type }: authFormType): JSX.Element {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail, password }),
    });

    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
    } else {
      console.error("Ошибка авторизации");
    }
  };

  return (
    <>
      <div className="m-auto max-w-[500px] w-full px-[10px]">
        <div className="">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-between gap-10 bg-inherit border-2 border-gray-400 rounded-xl px-5 pt-16 pb-10"
          >
            <h1 className="text-3xl text-white font-bold">
              {type === "LOGIN" ? "Авторизация " : "Регистрация"}
            </h1>
            <div className="flex flex-col gap-5">
              <label htmlFor="email" className="">
                Введите почту
                <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                  placeholder="example@ex.com"
                  type="text"
                  id="email"
                  className=" outline-none w-full bg-inherit px-2 py-2 max-w-[600px] rounded-xl border-2 border-gray-400"
                />
              </label>
              <label htmlFor="password" className="">
                Введите пароль
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Введите пароль"
                  type="password"
                  id="password"
                  className=" outline-none w-full bg-inherit px-2 py-2 max-w-[600px] rounded-xl border-2 border-gray-400"
                />
              </label>
            </div>
            <button
              // onClick={handleLogin}
              className="border-2 border-gray-400 rounded-xl px-5 py-4 hover:bg-zinc-700 transition-colors duration-100 ease-linear focus-within:bg-zinc-700"
            >
              {type === "LOGIN" ? "Войти" : "Зарегистрироваться"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
