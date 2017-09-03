import Nt from 'ntseq';


export const generate = () => {
  const nucleotides = ['A', 'T', 'C', 'G'];
  const length = Math.round(Math.random() * 90) + 10;

  const s = [];
  for (let i = 0; i < length; i++) {
    s.push(nucleotides[Math.floor(Math.random() * nucleotides.length)]);
  }

  return {
    id: `WD${new Date().getTime()}${length}`,
    name: `Sequence ${length}`,
    sequence: s.join(''),
  };
};

export const readSequence = (sequence) => {
  return (new Nt.Seq()).read(sequence);
};
