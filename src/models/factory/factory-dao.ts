import DaoJSON from '../template-method/dao-json';
import DaoSQL from '../template-method/dao-sql';
import DaoXML from '../template-method/dao-xml';
import Dao from '../template-method/dao';

export default class FactoryDao {
  constructor() {}

  /**
   * Créer l'instance du type demander
   */
  public static creerInstance(type: string): Dao {
    switch (type) {
      case DaoSQL.name:
        return new DaoSQL();
      case DaoXML.name:
        return new DaoXML();
      case DaoJSON.name:
        return new DaoJSON();
      default:
        throw new Error('type not found');
    }
  }
}
