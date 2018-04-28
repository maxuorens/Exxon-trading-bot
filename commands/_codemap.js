module.exports = {
  _ns: 'exxon',
  _folder: 'commands',

  'list-selectors': require('./list-selectors'),
  'backfill': require('./backfill'),
  'sim': require('./sim'),
  'trade': require('./trade'),
  'buy': require('./buy'),
  'sell': require('./sell'),

  'list[20]': '#commands.list-selectors',
  'list[50]': '#commands.backfill',
  'list[60]': '#commands.sim',
  'list[70]': '#commands.trade',
  'list[80]': '#commands.buy',
  'list[90]': '#commands.sell'
}
