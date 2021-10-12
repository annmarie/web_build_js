import apiPageHandler from 'middleware/api-page-handler';

const data = [
  {
    name: 'Sally Silly Stuff',
    price: 2.5,
    frequency: 'monthly',
    description: 'podcast',
    created_at: '20170412',
    updated_at: '20170412'
  },
  {
    name: 'Tony\'s Thoughts and Poems',
    price: 2.5,
    frequency: 'monthly',
    description: 'podcast',
    created_at: '20140312',
    updated_at: '20170412'
  },
  {
    name: 'Classic Cinema',
    price: 2.5,
    frequency: 'annually',
    description: 'streaming',
    created_at: '20180312',
    updated_at: '20190822'
  },
  {
    name: 'Words with Enemies',
    price: 2.5,
    frequency: 'annually',
    description: 'application',
    created_at: '20161112',
    updated_at: '20190822'
  },
]

async function requestHandler(req, res) {
  const method = req.method;
  switch (method) {
    case 'POST': {
      res.status(200).json({ data });
      break;
    }
    default: {
      res.status(200).json({ data });
    }
  }
}

export default apiPageHandler(requestHandler);
