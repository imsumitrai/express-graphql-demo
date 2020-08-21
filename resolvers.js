const db = require("./db");

const Query = {
  user: (root, { id }) => db.users.get(id),
  users: () => db.users.list(),
  account: (root, { id }) => db.accounts.get(id),
  accounts: () => db.accounts.list(),
  domain: (root, { id }) => db.domains.get(id),
  domains: () => db.domains.list(),
};

const Mutation = {
  createUser: (root, { input }) => {
    console.log(input);
    const id = db.users.create(input);
    return db.users.get(id);
  },
  createAccount: (root, { input }) => {
    const id = db.accounts.create(input);
    return db.accounts.get(id);
  },
  createDomain: (root, { input }) => {
    const id = db.domains.create(input);
    return db.domains.get(id);
  },
};

const User = {
  accounts: (user) =>
    db.accounts.list().filter((account) => account.user_id === user.id),
};

const Account = {
  domains: (account) =>
    db.domains.list().filter((domain) => domain.account_id === account.id),
  user: (account) => db.users.get(account.user_id),
};

const Domain = {
  account: (domain) => db.accounts.get(domain.account_id),
};

module.exports = { Query, Mutation, User, Account, Domain };
