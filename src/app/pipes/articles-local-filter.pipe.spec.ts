import { ArticlesLocalFilterPipe } from './articles-local-filter.pipe';

describe('ArticlesLocalFilterPipe', () => {
  let pipe;

  beforeAll(() => {
    pipe = new ArticlesLocalFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return articles if articles is falsy value', () => {
    const output = pipe.transform(undefined, true);
    expect(output).toBeUndefined();
  });

  it('should return input if query is undefined', () => {
    const output = pipe.transform([{isLocal: true}, {isLocal: false}], undefined);
    expect(output.length).toBe(2);
  });

  it('should filter input if query is valid string', () => {
    const output = pipe.transform([{isLocal: true}, {isLocal: false}], true);
    expect(output.length).toBe(1);
  });
});
