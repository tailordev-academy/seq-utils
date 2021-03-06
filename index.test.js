// index.test.js
import { generate, createSequenceFromDNA } from './index';
import { Seq } from 'ntseq';


test('it generates sequences', () => {
  const seq = generate();

  expect(seq.id).toBeDefined();
  expect(seq.name).toBeDefined();
  expect(seq.dna).toBeDefined();
});

test('it returns a Seq instance from a sequence', () => {
  const seq = createSequenceFromDNA('ATCG');

  expect(seq).toBeInstanceOf(Seq);
  expect(seq.sequence()).toEqual('ATCG');
});
