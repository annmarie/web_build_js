import apiPageHandler from 'middleware/api-page-handler';

async function requestHandler(req, res) {
  const method = req.method;
  switch (method) {
    case 'POST': {
      res.status(200).json({ status: 'POSTING' });
      break;
    }
    default: {
      res.status(200).json({ status: 'GETTING' });
    }
  }
}

export default apiPageHandler(requestHandler);
