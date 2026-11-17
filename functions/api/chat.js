export async function onRequestPost({ request, env }) {
  const headers = { "Content-Type": "application/json", "Cache-Control": "no-store" };
  try {
    if (!env.OPENAI_API_KEY) return new Response(JSON.stringify({error:"OPENAI_API_KEY is not configured in Cloudflare Pages → Settings → Variables and Secrets."}),{status:503,headers});
    const body=await request.json(); const message=String(body.message||"").trim().slice(0,4000);
    if(!message)return new Response(JSON.stringify({error:"Enter a message."}),{status:400,headers});
    const response=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":`Bearer ${env.OPENAI_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({model:env.OPENAI_MODEL||"gpt-4.1-mini",messages:[{role:"system",content:"You are Shop Assist AI for Surya Associates, Kerala, India. Help customers with inverters, batteries, solar water heaters, water purifiers, solar systems, hybrid solar, CCTV and accessories. Reply in the user's language, including Malayalam. Be friendly. Never invent current prices, stock, warranty or exact specifications; ask the shop to confirm. Never advise touching live wires or bypassing electrical safety."},{role:"user",content:message}],temperature:.35,max_tokens:500})});
    const data=await response.json(); if(!response.ok)return new Response(JSON.stringify({error:data.error?.message||"AI provider request failed"}),{status:response.status,headers});
    return new Response(JSON.stringify({reply:data.choices?.[0]?.message?.content||"No reply returned."}),{status:200,headers});
  }catch(e){return new Response(JSON.stringify({error:"Request failed. Check configuration and try again."}),{status:500,headers});}
}
