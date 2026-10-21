// Tests sans dépendance : lancer `node tests.cjs` si Node.js est installé.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/catalogue.js','utf8');
const context=vm.createContext({Intl});
vm.runInContext(source.split('const $=')[0]+`\nconst money=n=>new Intl.NumberFormat('fr-FR').format(n)+' FCFA';let cart=[];`+source.match(/function validQuantity\(value\)\{[^\n]+/)[0]+source.match(/function whatsappUrl\(message\)\{[^\n]+/)[0]+source.match(/function orderMessage\(\)\{[^\n]+/)[0],context);
const evaluate=s=>vm.runInContext(s,context);
for(const n of [1,5,10,100,999999])assert.equal(evaluate(`validQuantity('${n}')`),n);
for(const n of ['',0,-1,1.5,'abc',1000000])assert.equal(evaluate(`validQuantity('${n}')`),null);
assert.equal(evaluate('products.length'),6);
evaluate("cart=[{id:'C01',option:'42',qty:5},{id:'S02',option:'Modèle présenté',qty:2}]");
const message=evaluate('orderMessage()');assert(message.includes('Quantité : 5'));assert(message.includes('42'));assert(message.includes('155'));assert(message.includes('Ceci n’est pas une commande'));
const url=evaluate('whatsappUrl(orderMessage())');assert.equal(new URL(url).hostname,'wa.me');assert.equal(new URL(url).pathname,'/221708492561');assert.equal(new URL(url).searchParams.get('text'),message);
for(const p of evaluate('products'))assert(fs.statSync(__dirname+'/assets/'+p.image).size>1000);
assert(!fs.readFileSync(__dirname+'/index.html','utf8').includes('src="app.js"'));
console.log('OK : 6 articles et images, quantités libres et invalides, sélection multi-produits, total et message WhatsApp encodé.');
