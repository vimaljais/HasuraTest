import fetchGraphQL from '../../utils/graphql';

export default async (req, res) => {
  const { age, username, id, gender } = req.body;

  const operationsDoc = `
    mutation insertuser {
      insert_users(objects: {age: ${age}, gender: ${gender}, id: ${id}, username: ${username}}) {
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

  // const defautlPost = {
  //   title: 'default Title',
  //   id: new Date().getTime(),
  //   content: 'default content',
  //   userId: 1,
  // };

  // fetch('/api/insertpost', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(defautlPost),
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  const response = await startFetchMyQuery();
  console.log(response);
  res.status(200).json(response);
};
