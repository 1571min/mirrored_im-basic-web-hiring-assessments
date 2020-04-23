const express = require('express');
const { movies } = require('./data.json');
const cors = require('cors');
const app = express();

app.use(cors());

// TODO : 영화 API 를 위한 server를 작성하세요. server spec은 server directory test spec을 참고 해주세요.
app.get('/movies', (req, res) => {
  console.log('movies get request');
  res.status(200).send(movies);
});
app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  let targetMovie = movies.filter((ele) => ele.id == id);
  if (targetMovie.length !== 0) {
    res.status(200).send(targetMovie[0]);
  } else {
    res.status(404).send('movie is not exist');
  }
});
// 테스트를 위한 코드입니다. 건드리지 마세요.
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('server listen on 3000');
  });
}

module.exports = app;
