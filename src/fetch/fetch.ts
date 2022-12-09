import { BASE_URL, ACT, SERVER_STRING_NAME, PASSW } from "./constants";

export const getDict = () => {
  const sp = new URLSearchParams();
  sp.append("f", ACT.READ);
  sp.append("n", SERVER_STRING_NAME);

  const data = fetch(BASE_URL, {
    method: "POST",
    body: sp,
  })
    .then((res) => res.json())
    .then((data) => JSON.parse(data.result));
  return data;
};

export const updateDict = (newDict: string) => {
  const spLock = new URLSearchParams();
  spLock.append("f", ACT.LOCKGET);
  spLock.append("n", SERVER_STRING_NAME);
  spLock.append("p", PASSW);

  const spUpd = new URLSearchParams();
  spUpd.append("f", ACT.UPDATE);
  spUpd.append("n", SERVER_STRING_NAME);
  spUpd.append("p", PASSW);
  spUpd.append("v", newDict);

  const data = fetch(BASE_URL, {
    method: "POST",
    body: spLock,
  })
    .then(() =>
      fetch(BASE_URL, {
        method: "POST",
        body: spUpd,
      })
    )
    .then(() => getDict());

  return data;
};
