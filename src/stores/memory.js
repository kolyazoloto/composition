import { defineStore } from "pinia";

export const useMemoryStore = defineStore({
  id: "memory",
  state: () => ({
    animes: {},
    smotretAnimeRU: {
      access_token:
        "5a7fc9e7341ded2b91bb717a06afa3620ad56a93497897e51fedb1b8962662ca41089bae637c43e38a4a221039bbe88b86201c0d4dbdb6b1b5e1901e809ba571a4cc75183116dbbf94d8a84796de8253d688472895d471f07406f6b1840a2d972cba60edd7850165d050485e7fd872c7",
    },
    shiki: {
      client_id: "eWqISGuW67tHVYes_KWGi4lqUDs0JYWT-AcLDCK-UoM",
      client_secret: "9fUm2Bce1MTrZV08lCxsxfdG2K0getX-ARLP_Lri7_U",
      access_token: "kMzI_twSPij4XztIuolkAooSyKa2LhilecztDQpiIEY",
      refresh_token: "xZ-0kO-gBws0qeYcEQi6Cr8md8keRx7NhjaW_MBWJpI",
      created_at: 1656073494,
    },
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});
