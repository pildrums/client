import { fetchData } from "./commonAPI";

// 로그인
// POST
// requestBody - email: string, password: string
export const login = async (email: string, password: string) => {
  try {
    const requestBody = {
      email,
      password,
    };
    return fetchData("login", "post", requestBody);
  } catch (error) {
    console.error(error);
  }
};

// 회원가입
// POST
// requestBody - email: string, password: string
export const register = async (email: string, password: string) => {
  try {
    const requestBody = {
      email,
      password,
    };
    return fetchData("register", "post", requestBody);
  } catch (error) {
    console.error(error);
  }
};

// 로그아웃
// POST
// requestBody - X
export const logout = async () => {
  return fetchData("logout", "post");
};
