let data;
let txt = '$$Exclamation$$! They said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.'

function setup() {
  noCanvas();
  Tabletop.init({
    key: '15WyEmfu6B1UCzzqeacYnzI8lutrxF6uWvFDiSteBqTs',
    callback: gotData,
    simpleSheet: true
  });

  let button = createButton('Generate Mad Lib').addClass('btn btn-primary');
  button.mousePressed(generate);
}

function replacer(match, pos) {
  let entry = random(data);
  return entry[pos];
}

function generate() {
  let madLib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madLib);
}

function gotData(stuff, tabletop) {
  data = stuff;
}
