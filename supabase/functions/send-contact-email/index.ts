import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data: ContactFormData = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Configuração do Supabase ausente");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          assunto: data.assunto,
          mensagem: data.mensagem,
        },
      ]);

    if (dbError) {
      console.error("Erro ao salvar no banco:", dbError);
      throw new Error("Erro ao salvar mensagem");
    }

    const emailContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
      .header {
        border-bottom: 3px solid #d97706;
        padding-bottom: 20px;
        margin-bottom: 30px;
      }
      .header h1 {
        color: #1f2937;
        margin: 0;
        font-size: 24px;
      }
      .content {
        color: #374151;
        line-height: 1.6;
      }
      .field {
        margin-bottom: 20px;
      }
      .label {
        font-weight: bold;
        color: #1f2937;
        margin-bottom: 5px;
      }
      .value {
        color: #4b5563;
        padding: 10px;
        background-color: #f9fafb;
        border-radius: 4px;
        border-left: 3px solid #d97706;
      }
      .footer {
        border-top: 1px solid #e5e7eb;
        margin-top: 30px;
        padding-top: 20px;
        font-size: 12px;
        color: #6b7280;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Nova Mensagem de Contato</h1>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Nome:</div>
          <div class="value">${escapeHtml(data.nome)}</div>
        </div>

        <div class="field">
          <div class="label">Email:</div>
          <div class="value">${escapeHtml(data.email)}</div>
        </div>

        <div class="field">
          <div class="label">Telefone:</div>
          <div class="value">${escapeHtml(data.telefone)}</div>
        </div>

        <div class="field">
          <div class="label">Assunto:</div>
          <div class="value">${escapeHtml(data.assunto)}</div>
        </div>

        <div class="field">
          <div class="label">Mensagem:</div>
          <div class="value">${escapeHtml(data.mensagem).replace(/\n/g, '<br>')}</div>
        </div>
      </div>
      <div class="footer">
        <p>Esta mensagem foi enviada através do formulário de contato do site Silva Advocacia.</p>
      </div>
    </div>
  </body>
</html>
    `;

    let emailSent = false;
const response = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${resendApiKey}`,
  },
  body: JSON.stringify({
    from: "Silva Advocacia <onboarding@resend.dev>", // teste imediato
    to: ["victorhugofsantos@gmail.com"],
    replyTo: data.email, // <-- CORRETO
    subject: `Nova solicitação: ${data.assunto}`,
    html: emailContent,
  }),
});

const bodyText = await response.text();

if (!response.ok) {
  console.error("Resend error:", response.status, bodyText);
  // aqui você decide: ou retorna 500, ou mantém success true mas emailSent false
} else {
  emailSent = true;
  console.log("Resend OK:", bodyText);
}

    return new Response(
      JSON.stringify({
        success: true,
        message: emailSent
          ? "Email enviado com sucesso!"
          : "Mensagem recebida! Você receberá uma resposta em breve.",
        emailSent,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Erro ao processar",
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
