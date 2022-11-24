async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch('https://desired-hound-65.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret':
        'FpUbpD2sbBje6BC8f13xiasfNFAPjPIEHZ9ZvBYdcOeYUfCy8iUYG4Q7VtYMI460',
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

export default fetchGraphQL;
