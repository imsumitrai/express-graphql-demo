const faker = require("faker");
const users = db.users;
const accounts = db.accounts;
const domains = db.domains;
const createFakeData = () => {
  if (user.list().length < 5) {
    users.create({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      pass: faker.random.word(),
    });
  }

  users.list().map((user) => {
    if (
      accouts.list().filter((account) => {
        account.user_id === user.id;
      }).length < 3
    ) {
      for (i = 1; i <= 3; i++) {
        accounts.create({
          user_id: user.id,
          name: faker.company.companyName(),
          title: faker.company.catchPhrase(),
          description: faker.company.catchPhraseDescriptor(),
        });
      }
    }
  });

  accounts.list().map((account) => {
    if (
      domains.list().filter((domain) => {
        domain.account_id === account.id;
      }).length < 10
    ) {
      for (i = 1; i <= 10; i++) {
        domains.create({
          account_id: account.id,
          domain: faker.internet.domainName(),
          description: faker.lorem.sentences(),
        });
      }
    }
  });
};

module.exports(createFakeData);
