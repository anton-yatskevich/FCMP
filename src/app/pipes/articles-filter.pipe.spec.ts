import { ArticlesFilterPipe } from './articles-filter.pipe';

describe('ArticlesFilterPipe', () => {
  let pipe;

  beforeAll(() => {
    pipe = new ArticlesFilterPipe();
  })
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return articles if articles is falsy value', () => {
    const output = pipe.transform(null, 'value');
    expect(output).toBeFalsy();
  });

  it('should return input if query is undefined', () => {
    const output = pipe.transform([{title: 'one'}, {title: 'two'}], undefined);
    expect(output.length).toBe(2);
  });

  it('should filter input if query is valid string', () => {
    const output = pipe.transform([{title: 'one'}, {title: 'two'}], 'one');
    expect(output.length).toBe(1);
  });
});
