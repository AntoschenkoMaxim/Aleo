const { Quest } = require("../models/models");
const ApiError = require("../error/ApiError");

class QuestController {
  async addUser(req, res, next) {
    try {
      const { method, discord, questNumber } = req.body;
      const quest = await Quest.create({ method, discord, questNumber });
      return res.json(quest);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getUsersByQuest(req, res) {
    const { questNumber } = req.query;
    const quests = await Quest.findAll({ where: { questNumber } });
    return res.json(quests);
  }
}

module.exports = new QuestController();
