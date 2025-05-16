import { useState } from "react";
import axios from "axios";
import Inputs from "../utils/Inputs";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  setLoading(true);
  setStatus("");

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}`,
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      setStatus("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      setStatus("Erro ao enviar a mensagem. Tente novamente.");
    }
    } catch (error) {
      setStatus("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto my-auto flex flex-col gap-6 p-6 bg-[var(--foreground)] rounded-xl shadow-md text-start"
    >
      <h2 className="text-2xl font-bold text-[var(--color-text)] text-center">
        Get in touch
      </h2>

      <Inputs
        inputs={[
          { id: "name", title: "Your name", name: "name", label: "Name" },
          { id: "email", title: "Your e-mail", name: "email", label: "E-mail" },
          { id: "subject", title: "Subject", name: "subject", label: "Subject" },
        ]}
      />

      <div className="flex flex-col gap-0">
        <label
          htmlFor="message"
          className="text-sm font-medium text-[var(--color-text)] px-3"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Write your message"
          className="px-4 py-2 rounded-md bg-[var(--foreground)] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--bg-button)] text-[var(--color-text)] placeholder-gray-400 transition resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`mt-4 py-2 px-6 bg-[var(--bg-button)] text-white rounded-md hover:brightness-110 transition w-fit mx-auto ${
          loading ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Enviando..." : "Send"}
      </button>

      {status && (
        <p className="mt-4 text-center text-sm text-[var(--color-text)]">{status}</p>
      )}
    </form>
  );
};

export default Contact;