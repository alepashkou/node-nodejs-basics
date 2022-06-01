export const parseEnv = () => {
  const env = process.env;
  const keys = Object.keys(env);
  keys.forEach((el) => {
    if (el.substring(0, 4) === 'RSS_') {
      console.log(el + '=' + env[el]);
    }
  });
};
parseEnv();
