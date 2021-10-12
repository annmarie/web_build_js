import next from 'next';
import nextConnect from 'next-connect';

const appPageHandler = nextConnect();

appPageHandler.use((req, res) => {
  // put middleware stuff here
  return next(req, res);
});

export default appPageHandler;
