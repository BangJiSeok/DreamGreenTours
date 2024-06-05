// backend/mysql.js
import mysql from 'mysql2/promise';

// MySQL 연결 설정
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'express',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 사용자의 user_id를 가져오는 비동기 함수
const fetchUserIdFromServer = async () => {
  try {
    const [rows] = await pool.query('SELECT user_id FROM users LIMIT 1');
    return rows.length ? rows[0].user_id : null;
  } catch (error) {
    console.error('user_id를 가져오는 도중 에러가 발생했습니다:', error);
    throw error;
  }
};

export { fetchUserIdFromServer, pool };
