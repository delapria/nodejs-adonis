"use strict";

const Model = use("Model");

class Project extends Model {
  user() {
    return this.belogsTo("App/Model/User");
  }

  tasks() {
    return this.hasMany("App/Model/Tasks");
  }
}

module.exports = Project;
