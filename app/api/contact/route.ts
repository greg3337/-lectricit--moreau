import { Resend } from "resend";
import { NextRequest } from "next/server";

const serviceLabels: Record<string, string> = {
  installation: "Installation électrique",
  depannage: "Dépannage urgence",
  normes: "Mise aux normes",
  renovation: "Rénovation électrique",
  autre: "Autre demande",
};

export async function POST(request: NextRequest) {
  const { nom, email, telephone, service, message } = await request.json();

  if (!nom || !email || !message) {
    return Response.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const serviceLabel = serviceLabels[service] || service || "Non précisé";

  if (!process.env.RESEND_API_KEY) {
    console.log("[Contact] Nouveau message (RESEND_API_KEY non configuré) :", {
      nom, email, telephone, service: serviceLabel, message,
    });
    return Response.json({ success: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Électricité Moreau <onboarding@resend.dev>",
    to: ["contact@electricite-moreau.fr"],
    replyTo: email,
    subject: `Nouveau devis — ${serviceLabel} — ${nom}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#07070f;color:#fff;padding:32px;border-radius:12px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <div style="background:#0047ff;border-radius:6px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;">
            <span style="color:white;font-size:18px;">⚡</span>
          </div>
          <div>
            <div style="color:#0047ff;font-size:10px;text-transform:uppercase;letter-spacing:3px;">Électricité</div>
            <div style="color:white;font-weight:bold;font-size:14px;">MOREAU</div>
          </div>
        </div>
        <h2 style="color:#0047ff;margin:0 0 20px;font-size:20px;">Nouvelle demande de devis</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="color:rgba(255,255,255,0.45);padding:8px 0;width:140px;font-size:13px;">Nom</td><td style="color:white;font-size:13px;">${nom}</td></tr>
          <tr><td style="color:rgba(255,255,255,0.45);padding:8px 0;font-size:13px;">Email</td><td style="font-size:13px;"><a href="mailto:${email}" style="color:#0047ff;">${email}</a></td></tr>
          <tr><td style="color:rgba(255,255,255,0.45);padding:8px 0;font-size:13px;">Téléphone</td><td style="color:white;font-size:13px;">${telephone || "—"}</td></tr>
          <tr><td style="color:rgba(255,255,255,0.45);padding:8px 0;font-size:13px;">Service</td><td style="color:white;font-size:13px;">${serviceLabel}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.04);border-radius:8px;border:1px solid rgba(255,255,255,0.08);">
          <div style="color:rgba(255,255,255,0.45);font-size:11px;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">Message</div>
          <p style="color:rgba(255,255,255,0.8);font-size:13px;line-height:1.6;margin:0;">${message}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("[Contact] Erreur Resend :", error);
    return Response.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  return Response.json({ success: true });
}
