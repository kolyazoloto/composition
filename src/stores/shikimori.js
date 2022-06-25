import { defineStore } from "pinia";
import { useMemoryStore } from "./memory";
// import { router } from "../router/index";
export const useShikimoriStore = defineStore({
  id: "shikimori",
  state: () => ({
    userData: {
      user_id: null,
      avatarimg: null,
      nickname: null,
      stats: null,
    },
    status: {
      shikimoriLogin: true,
      dataDownloadReady: false,
    },
    animeData: {
      watching: [],
      planned: [],
      ongoing: [],
      dropped: [],
    },
  }),
  getters: {},
  actions: {
    refreshAccessTokenIfNeeded() {
      let memoryStore = useMemoryStore();
      return new Promise((resolve, reject) => {
        if (
          Math.floor(Date.now() / 1000) - memoryStore.shiki.created_at <
          86000
        ) {
          resolve();
        } else {
          dispatch("shikiRefreshAccessToken").then(() => {
            resolve();
          });
        }
      });
    },
    shikiGetAccessToken(value) {
      let memoryStore = useMemoryStore();
      return new Promise((resolve, reject) => {
        fetch("https://shikimori.one/oauth/token", {
          method: "POST",
          origin: "https://shikimori.one",
          headers: {
            "content-type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify({
            grant_type: "authorization_code",
            client_id: memoryStore.shiki.client_id,
            client_secret: memoryStore.shiki.client_secret,
            code: value,
            redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
          }),
        })
          .then((res) => {
            if (!res.ok) throw res;
            return res.json();
          })
          .then((json) => {
            console.log(json);
            memoryStore.shiki.access_token = json.access_token;
            memoryStore.shiki.refresh_token = json.refresh_token;
            memoryStore.shiki.created_at = json.created_at;
            // commit("changeGlobalNatification", {
            //   type: "success",
            //   message: "Токен доступа успешно получен",
            //   code: "Access token",
            // });
            this.status.dataDownloadReady = true;
            this.status.shikimoriLogin = true;
            // dispatch("writeFile");
            resolve();

            // записать в файл
          })
          .catch((err) => {
            //console.log(err.json())
            let code = err.status;
            // err.json().then((json) => {
            //   commit("changeGlobalNatification", {
            //     type: "error",
            //     message: json.error,
            //     code: code,
            //   });
            // });
          });
      });
    },
    shikiRefreshAccessToken() {
      let memoryStore = useMemoryStore();
      return new Promise((resolve, reject) => {
        fetch("https://shikimori.one/oauth/token", {
          method: "POST",
          origin: "https://shikimori.one",
          headers: {
            "content-type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify({
            client_id: memoryStore.shiki.client_id,
            client_secret: memoryStore.shiki.client_secret,
            refresh_token: memoryStore.shiki.refresh_token,
            grant_type: "refresh_token",
          }),
        })
          .then((res) => {
            if (!res.ok) throw res;
            return res.json();
          })
          .then((json) => {
            memoryStore.shiki.access_token = json.access_token;
            memoryStore.shiki.refresh_token = json.refresh_token;
            memoryStore.shiki.created_at = json.created_at;
            // dispatch("writeFile");
            resolve();
          })
          .catch((err) => {
            let code = err.status;
            err.json().then((json) => {
              // commit("changeGlobalNatification", {
              //   type: "error",
              //   message: json.error,
              //   code: code,
              // });
              // commit("changeGlobalNatification", {
              //   type: "warn",
              //   message: "Не удалось получить новый токен доступа",
              //   code: "Необходима авторизация",
              // });
              // exit shikimori
              memoryStore.shiki.access_token = undefined;
              memoryStore.shiki.refresh_token = undefined;
              this.status.shikimoriLogin = false;
              // router.push("/mainPage/login");
              reject("Не обновился токен");
            });
          });
      });
    },
    shikiGetFullUserData(user_id) {
      let memoryStore = useMemoryStore();
      fetch(`https://shikimori.one/api/users/${user_id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + memoryStore.shiki.access_token,
          "User-Agent": "Tizen",
        },
      })
        .then((res) => {
          if (res.status == 200) return res.json();
        })
        .then((json) => {
          this.userData.stats = json.stats;
        });
    },
    updateShikimoriUserData(value) {
      this.userData.avatarimg = value.avatar;
      this.userData.nickname = value.nickname;
      this.userData.user_id = value.id;
    },
    shikiWhoAmI(repeatReq) {
      let memoryStore = useMemoryStore();
      fetch("https://shikimori.one/api/users/whoami", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + memoryStore.shiki.access_token,
          "User-Agent": "Tizen",
        },
      })
        .then((res) => {
          if (!res.ok) throw res;
          return res.json();
        })
        .then((json) => {
          this.updateShikimoriUserData(json);
          this.shikiGetFullUserData(json.id);
          this.status.shikimoriLogin = true;
          this.status.dataDownloadReady = true;
        })
        .catch((err) => {
          let code = err.status;
          if (code == 429) {
            setTimeout(() => {
              if (repeatReq < 2) this.shikiWhoAmI(++repeatReq);
            }, 1000);
          } else {
            // err.json().then((json) => {
            //   commit("changeGlobalNatification", {
            //     type: "error",
            //     message: json.error,
            //     code: code,
            //   });
            // });
          }
        });
    },
    addAnimeData(data, category) {
      this.animeData[category].push(...data);
      console.log(state.animeData);
    },
    getOngoingPersonalData(repeatReq) {
      let memoryStore = useMemoryStore();
      return new Promise((resolve, reject) => {
        fetch(
          `https://shikimori.one/api/v2/user_rates?target_type=Anime&status=watching&user_id=${this.userData.user_id}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + memoryStore.shiki.access_token,
            },
          }
        )
          .then((r) => {
            if (!r.ok) throw r;
            return r.json();
          })
          .then((json) => {
            resolve(json);
          })
          .catch((err) => {
            let code = err.status;
            if (code == 429) {
              setTimeout(() => {
                if (repeatReq < 2) this.getOngoingPersonalData(++repeatReq);
              }, 1000);
            } else {
              // err.json().then((json) => {
              //   // commit("changeGlobalNatification", {
              //   //   type: "error",
              //   //   message: json.error,
              //   //   code: code,
              //   // });
              // });
            }
          });
      });
    },
    getAllAnimeCategoryData() {
      let categories = ["watching", "ongoing", "planned", "dropped"];
      for (let i = 0; i < categories.length; i++) {
        setTimeout(() => {
          this.getOneAnimeCategoryData(categories[i], 0);
        }, 350 * i);
      }
    },
    getOneAnimeCategoryData(category, repeatReq) {
      let memoryStore = useMemoryStore();
      return new Promise((resolve, reject) => {
        let URL = `https://shikimori.one/api/animes/?mylist=${category}&censored=true&limit=30`;
        if (category == "ongoing") {
          URL = `https://shikimori.one/api/animes/?status=ongoing&censored=true&limit=30&order=ranked`;
        }

        fetch(URL, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + memoryStore.shiki.access_token,
          },
        })
          .then((r) => {
            if (!r.ok) throw r;
            return r.json();
          })
          .then((json) => {
            if (category != "watching") {
              json.sort(function (a, b) {
                return parseFloat(b.score) - parseFloat(a.score);
              });
              this.addAnimeData(json, category);
              resolve();
            } else {
              this.getOngoingPersonalData(0).then((ongoingData) => {
                let first;
                let second;
                json.sort(function (a, b) {
                  first = ongoingData.find((element, index, array) => {
                    return element.target_id == a.id;
                  });
                  second = ongoingData.find((element, index, array) => {
                    return element.target_id == b.id;
                  });
                  if (first !== undefined && second !== undefined) {
                    return (
                      new Date(second.updated_at) - new Date(first.updated_at)
                    );
                  } else return 1;
                });
                this.addAnimeData(json, category);
                resolve();
              });
            }

            //state.animeData[category] = json
            //console.log(state.animeData)
          })
          .catch((err) => {
            let code = err.status;
            if (code == 401) {
              err.json().then((json) => {
                // commit("changeGlobalNatification", {
                //   type: "error",
                //   message: json.error,
                //   code: code,
                // });
                //обновляю токен
                this.shikiRefreshAccessToken().then(() => {
                  setTimeout(() => {
                    if (repeatReq < 2)
                      this.getOneAnimeCategoryData(category, ++repeatReq);
                  }, 1000);
                });
              });
            } else if (code == 429) {
              setTimeout(() => {
                if (repeatReq < 2)
                  this.getOneAnimeCategoryData(category, ++repeatReq);
              }, 1000);
            } else {
              // err.json().then(() => {
              //   // commit("changeGlobalNatification", {
              //   //   type: "error",
              //   //   message: json.error,
              //   //   code: code,
              //   // });
              // });
            }
          });
      });
    },
  },
});
