/**
 * Contains Informix DB related functions
 */
const _ = require('lodash')
const config = require('config')
const ifxn = require('ifxnjs')


const informixConnString =
  'SERVER=' +
  config.get('INFORMIX.SERVER') +
  ';DATABASE=' +
  config.get('INFORMIX.DATABASE') +
  ';HOST=' +
  config.get('INFORMIX.HOST') +
  ';Protocol=' +
  config.get('INFORMIX.PROTOCOL') +
  ';SERVICE=' +
  config.get('INFORMIX.PORT') +
  ';DB_LOCALE=' +
  config.get('INFORMIX.DB_LOCALE') +
  ';UID=' +
  config.get('INFORMIX.USER') +
  ';PWD=' +
  config.get('INFORMIX.PASSWORD')

/**
 * Get Informix connection using the configured parameters
 * @return {Object} Informix connection
 */
async function getInformixConnection() {
  const conn = await pool.openAsync(informixConnString)
  return Promise.promisifyAll(conn)
}

async function getRoundId(challenge_name) {
  const informixSession = await getInformixConnection()
  const res = informixSession.querySync(`select * from round r, contest c where c.name = ${challenge_name} and c.round_id = r.round_id`);

  console.log(res)

}


module.exports = {
  getRoundId
}
