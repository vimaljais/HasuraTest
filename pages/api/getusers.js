// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  // let response = await fetch('https://dummyjson.com/products');
  // response = await response.json();

  /*
This is an example snippet - you should consider tailoring it
to your service.
*/

  async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
      'https://desired-hound-65.hasura.app/v1/graphql',
      {
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
      }
    );

    return await result.json();
  }

  const operationsDoc = `
  query MyQuery {
    users {
      age
      gender
      id
      username
    }
  }
`;

  function fetchMyQuery() {
    return fetchGraphQL(operationsDoc, 'MyQuery', {});
  }

  async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();

    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }

    // do something great with this precious data
    return data;
  }

  const response = await startFetchMyQuery();
  console.log(response);
  res.status(200).json(response);
};
