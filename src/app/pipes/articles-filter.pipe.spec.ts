import { ArticlesFilterPipe } from './articles-filter.pipe';

const mockArticle = {
  author: "David BardenG",
  content: "Pete Davidson appeared to be back in fine form on Saturday Night Live, jumping back on the Weekend Update desk after what he called his really crazy month. In December, the comedian posted an alarming personal message on Instagram that sparked concerns he was",
  description: "Pete Davidson appeared to be back in fine form on Saturday Night Live, jumping back on the Weekend Update desk after what he called his really crazy month.",
  isLocal: true,
  publishedAt: 2018,
  source: {name: "CNN"},
  title: "One",
  url: "https://www.huffingtonpost.com/entry/pete-davidson-snl-john-mulaney_us_5c441606e4b027c3bbc271e6",
  urlToImage: "https://img.huffingtonpost.com/asset/5c4417a225000026017db659.png?cache=fytlpun2yi&ops=1910_1000",
  _id: "5c544bb03d5be9da70f46289",
};

describe('ArticlesFilterPipe', () => {
  const pipe = new ArticlesFilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return articles if articles is falsy value', () => {
    const output = pipe.transform(null, 'value');
    expect(output).toBeFalsy();
  });

  it('should return input if query is undefined', () => {
    const output = pipe.transform([mockArticle, {...mockArticle, title: 'Two'}], undefined);
    expect(output.length).toBe(2);
  });

  it('should filter input if query is valid string', () => {
    const output = pipe.transform([mockArticle, {...mockArticle, title: 'Two'}], 'One');
    expect(output.length).toBe(1);
  });
});
