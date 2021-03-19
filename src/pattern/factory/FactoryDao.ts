import DaoJSON from "../TemplateMethod/DaoJSON";
abstract class FactoryDao {
  constructor() {}

  /**
   * creerInstance
   */
  public creerInstance(type: string): Dao {
    switch (type) {
      case "SQL":
        return new DaoSQL();
      case "XML":
        return new DaoXML();
      case "JSON":
        return new DaoJSON();
      default:
        throw new Error("type not found");
    }
  }
}
