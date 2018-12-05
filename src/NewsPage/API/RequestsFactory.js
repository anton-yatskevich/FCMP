import { GetRequest, PostRequest, PutRequest } from './requests';

class RequestsFactory {
  constructor({ method, url, body }) {
    this.method = method;
    this.url = url;
    this.body = body;
    this.request = this.createRequest();
  }

  createRequest() {
    switch (this.method) {
      case 'GET':
        return new GetRequest(this.url);
      case 'POST':
        return new PostRequest(this.url, this.body);
      case 'PUT':
        return new PutRequest(this.url, this.body);
      default:
        throw new Error('Incorrect request method');
    }
  }
}

const FactoryProxy = new Proxy(RequestsFactory, {
  construct: (Target, argumentsList) => {
    console.log(`New ${argumentsList[0].method} request to ${argumentsList[0].url}`);
    return new Target(argumentsList[0]);
  },
});

export default FactoryProxy;
