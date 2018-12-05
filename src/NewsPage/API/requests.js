import errorHandler from './errorHandler';

export class GetRequest {
  constructor(url) {
    this.url = url;
  }

  async send() {
    const response = await fetch(this.url);
    if (!response.ok) {
      return errorHandler(response);
    } return response.json();
  }
}

export class PostRequest {
  constructor(url, data) {
    this.url = url;
    this.data = data;
  }

  async send() {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.data),
    });
    if (!response.ok) {
      return errorHandler(response);
    } return response.json();
  }
}

export class PutRequest {
  constructor(url, data) {
    this.url = url;
    this.data = data;
  }

  async send() {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.data),
    });
    if (!response.ok) {
      return errorHandler(response);
    } return response.json();
  }
}
