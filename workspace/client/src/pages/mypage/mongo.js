// mongo.js

import mongoose from 'mongoose';

// MongoDB 연결 URL
const mongoURI = 'mongodb+srv://fronttwo24:1234@cluster0.n09vftn.mongodb.net/';

// 몽고DB에 연결
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB에 연결되었습니다.');
  })
  .catch((err) => console.error('MongoDB 연결 오류:', err));

// 사용자의 user_id를 가져오는 비동기 함수
const fetchUserIdFromServer = async () => {
  try {
    // MongoDB에서 user_id를 조회하여 가져옵니다.
    // 예시: User 모델을 사용하여 user_id를 조회하는 코드
    const User = mongoose.model('User', { user_id: Number });
    const user = await User.findOne().select('user_id').exec();

    // 조회된 user_id를 반환합니다.
    return user.user_id;
  } catch (error) {
    console.error('user_id를 가져오는 도중 에러가 발생했습니다:', error);
    throw error;
  }
};

export { fetchUserIdFromServer };
