const { Quest } = require("../models/models");
const ApiError = require("../error/ApiError");

class QuestController {
  async addUser(req, res, next) {
    try {
      const { method, chatId, discord, questNumber } = req.body;
      const quest = await Quest.create({
        method,
        chatId,
        discord,
        questNumber,
      });
      return res.json(quest);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getUsersByQuest(req, res) {
    const { questNumber, limit } = req.query;
    const quests = await Quest.findAll({
      where: { questNumber },
      limit: limit,
    });
    return res.json(quests);
  }

  async getUsersByChatId(req, res) {
    const { questNumber, chatId } = req.query;
    const quests = await Quest.findOne({
      where: { questNumber: questNumber, chatId: chatId },
    });
    return res.json(quests);
  }
}

module.exports = new QuestController();
