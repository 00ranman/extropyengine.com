/** Repair common talk-to-text mangling of the names. Do not touch lone "entropy". */

const RULES: Array<[RegExp, string]> = [
  [/\b(?:entropy|entrophy|extrophy|ex[\s-]?trophy|extra[\s-]?pea|x[\s-]?trophy)\s+engine\b/gi, "Extropy Engine"],
  [/\b(?:extrophy|ex[\s-]?trophy|extra[\s-]?pea|x[\s-]?trophy|ex[\s-]?trope[\s-]?ee)\b/gi, "Extropy"],
  [
    /\b(?:el{1,3}[\s-]?lad[\s-]?nar(?:os|ous|us)|llad[\s-]?nar(?:os|ous|us)|lad[\s-]?nar(?:os|ous|us)|ladnaros|yad[\s-]?naros|glad[\s-]?naros|clad[\s-]?naros|ladner[\s-]?os|lad[\s-]?narrows|llan[\s-]?daros|lladneros|lad[\s-]?na[\s-]?ros)\b/gi,
    "Lladnaros",
  ],
  [/\bsorandall\b/gi, "Sorandall"],
];

export function repairTranscript(input: string) {
  let out = input;
  for (const [re, to] of RULES) out = out.replace(re, to);
  return out;
}

export const SAY = {
  lladnaros: {
    word: "Lladnaros",
    say: "lad-NAR-os",
    hint: "Randall, letters reversed, plus os. Not ‘yad’ unless you’re in Wales.",
  },
  extropy: {
    word: "Extropy",
    say: "EX-truh-pee",
    hint: "The opposite of entropy. If the phone writes entropy, it heard you wrong.",
  },
} as const;