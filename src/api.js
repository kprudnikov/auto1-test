const baseUrl = process.env.API_URL || 'http://localhost:9000';

function handleHttpError(response) {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
}

export function getMerchants() {
  return fetch(`${baseUrl}/merchants`, {
    method: 'GET',
  })
  .then(handleHttpError)
}

export function createMerchant(body) {
  return fetch(`${baseUrl}/merchants`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
    .then(handleHttpError)
    .then(() => {
      const response = Object.assign({}, body);
      response.bids = [];
      response.id = btoa(Math.floor((Math.random() * 1E12)).toString());
      return response;
    })
}

export function updateMerchant(is) {
  return fetch(`${baseUrl}/recipes/${id}`, {
    method: 'PATCH',
  })
    .then(handleHttpError);
}

export function removeMerchant(id) {
  return fetch(`${baseUrl}/recipes/${id}`, {
    method: 'DELETE',
  })
    .then(handleHttpError);
}
