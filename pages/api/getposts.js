// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetchGraphQL from '../../utils/graphql';

export default async (req, res) => {
  const operationsDoc = `
  query MyQuery {
    post {
      title
      id
      created_at
      updated_at
      content
    }
  }
`;

  async function startFetchMyQuery() {
    const { errors, data } = await fetchGraphQL(operationsDoc, 'MyQuery', {});
    if (errors) {
      console.error(errors);
    }
    return data;
  }

  const response = await startFetchMyQuery();
  console.log(response);
  res.status(200).json(response);
};
