module.exports = ({ env }) => ({
  proxy: true,
  url: 'https://back-office.cocktail-culturel.com', // replaces `host` and `port` properties in the development environment
  app: {
    keys: '+bDmHTUevgBoaPUKvl8FMQ==,AwK+AdTsWoXfs9yzWlT/Lg==,7vaFreDVeRuqYC9I92nG1w==,1+98feccQJeNbjwvKLD2fA=='
  },
});
