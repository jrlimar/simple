//1 - evento ao inserir no input

const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

const eventAwesome = new CustomEvent('awesome', {
  bubbles: true,
  detail: { text: () => textarea.value }
});

form.addEventListener('awesome', e => console.log(e.detail.text()));

textarea.addEventListener('input', e => e.target.dispatchEvent(eventAwesome));



//2 - evento customizado no load da pagina

var event = new CustomEvent("teste2", { "detail": "evento customizado no load da pagina" });

document.addEventListener("teste2", function(e) { bubbles: true, console.log(e.detail); });
document.dispatchEvent(event);

// 3 - evento customizado no click

var event = new CustomEvent("fakeClick", {
  detail: "evento customizado no click"
});

obj = document.getElementById('clickId');

obj.addEventListener("click", function () {
    this.dispatchEvent(event);
});

obj.addEventListener("fakeClick", function(e) { console.log(e.detail) });




