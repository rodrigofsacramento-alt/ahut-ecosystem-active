import fs from "fs";
import path from "path";

const dirs = [
  "./01_FRONTEND_PRODUCAO_HOSTINGER_BKP",
  "./crm-imobiliaria-producao-BKP"
];

const newIndexName = "index-v2-K89X.js";
const newAtendimentoName = "Atendimento-v2-P42Q.js";
const ldfLo = "https://ldfcqxeehgaftxsgxkag.supabase.co";
const ldfDo = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZmNxeGVlaGdhZnR4c2d4a2FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjQ4MDQyMywiZXhwIjoyMDg4MDU2NDIzfQ.KfaCh5JYefV5kVlZeRg-cg_-4QELo8vhDK5TqpShuNY";

for (const dir of dirs) {
  const assetsDir = path.join(dir, "assets");
  let indexJs = fs.readFileSync(path.join(assetsDir, "index-C9-68P_N.js"), "utf8");
  let atendimentoJs = fs.readFileSync(path.join(assetsDir, "Atendimento-DcqAjCvf.js"), "utf8");

  // In index.js replace reference to Atendimento
  indexJs = indexJs.replace(/Atendimento-DcqAjCvf\.js(\?v=[^"'\`]+)?/g, newAtendimentoName);
  indexJs = indexJs.replace(/const Lo="https:\/\/[^"]+",Do="[^"]+"/g, `const Lo="${ldfLo}",Do="${ldfDo}"`);

  // Ensure AuthProvider never blocks
  indexJs = indexJs.replace(
    `const[l,d]=c.useState(!0),[u,m]=c.useState(!0),[p,h]=c.useState(null);c.useEffect(()=>{let v=!1;`,
    `const[l,d]=c.useState(!0),[u,m]=c.useState(!0),[p,h]=c.useState(null);c.useEffect(()=>{let v=!1;setTimeout(()=>{if(!v){d(!1);m(!1);}},1500);`
  );

  let indexHtml = fs.readFileSync(path.join(dir, "index.html"), "utf8");
  indexHtml = indexHtml.replace(/src="\/assets\/index-[^"]+"/g, `src="/assets/${newIndexName}"`);

  fs.writeFileSync(path.join(assetsDir, newIndexName), indexJs, "utf8");
  fs.writeFileSync(path.join(assetsDir, newAtendimentoName), atendimentoJs, "utf8");
  fs.writeFileSync(path.join(dir, "index.html"), indexHtml, "utf8");

  console.log("Updated directory:", dir);
}
