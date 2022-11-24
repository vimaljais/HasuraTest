import fetchGraphQL from '../../utils/graphql';

export default async (req, res) => {
  const { title, id, content, userId } = req.body;

  const operationsDoc = `
    mutation insertuser {
      insert_post(objects: {title: ${title}, id: ${id}, content: ${content}, user_id: ${userId}}) {
        returning {
          id
        }
      }
    }
  `;

  async function startFetchMyQuery() {
    const { errors, data } = await fetchGraphQL(
      operationsDoc,
      'insertuser',
      {}
    );
    if (errors) {
      console.error(errors);
    }
    return data;
  }

  const response = await startFetchMyQuery();
  console.log(response);
  res.status(200).json(response);
};
