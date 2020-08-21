const db = require("./db");

const Query = {
  user: (root, { id }) => db.users.get(id),
  users: () => db.users.list(),
  account: (root, { id }) => db.accounts.get(id),
  accounts: () => db.accounts.list(),
  domain: (root, { id }) => db.domains.get(id),
  domains: () => db.domains.list(),
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

module.exports = { Query, User, Account, Domain };
