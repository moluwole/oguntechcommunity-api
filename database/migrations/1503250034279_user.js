'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.enu('account_type', ['team', 'member'])
      table.string('full_name', 150).notNullable()
      table.string('job_title', 200).notNullable()
      table.string('portfolio', 254).notNullable()
      table.string('phone_number', 20).notNullable()
      table.string('email_address', 200).notNullable().unique()
      table.string('avatar', 255).notNullable()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
