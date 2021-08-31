export async function login(username, notable) {
  console.log(username, notable);
  let auth = {
    username,
    notable,
  };

  localStorage.setItem('auth', JSON.stringify(auth));

  return {
    data: {
      error: 0,
      username,
      notable,
    },
  };
}

export async function logout() {
  let auth = localStorage.getItem('auth');

  if (!auth) {
    return JSON.parse({
      error: 1,
      message: 'User not found',
    });
  }

  localStorage.removeItem('auth');

  return JSON.parse({
    error: 0,
    message: 'Logout berhasil',
  });
}
