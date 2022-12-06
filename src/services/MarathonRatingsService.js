/**
 * MM Rating Service for Marathon Matches
 */

const config = require('config')
// const exec = util.promisify(require('child_process').exec)

const helper = require('../common/helper')
const infx_db = require('../common/informix_db')
const logger = require('../common/logger')

async function calculate(challengeId, challengeName) {
  try {
    logger.debug('=== marathon ratings calcualtion start ===')

    await infx_db.getRoundId(challengeName)
    const submissions = await helper.getSubmissions(challengeId)
    const finalSubmissions = await helper.getFinalSubmissions(submissions)

    finalSubmissions.forEach(submission => {

    })
  } catch (error) {
    logger.logFullError(error)
    throw new Error(error)
  }
}

// Exports
module.exports = {
  calculate
}

logger.buildService(module.exports)

