import User from "./User.js";

const register = async (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    birth: req.body.birth,
    phoneNum: req.body.phoneNum,
    password: req.body.password,
    foreign: req.body.foreign,
    isLogin: false,
  };
  
  try {
    const newUser = await User.create(userData);
    res.send({ success: true, message: "회원가입이 완료되었습니다." });
  } catch (error) {
    console.error('회원가입 도중 에러가 발생했습니다:', error);
    res.status(500).send({ success: false, message: '서버 에러' });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (user) {
      user.isLogin = true;
      await user.save();
      res.send({ success: true, user }); // 로그인 성공 시 사용자 정보 반환
    } else {
      res.status(401).send({ success: false, message: "로그인 실패: 잘못된 이메일 또는 비밀번호" });
    }
  } catch (error) {
    console.error('로그인 도중 에러가 발생했습니다:', error);
    res.status(500).send({ success: false, message: '서버 에러' });
  }
};

export { register, login };
