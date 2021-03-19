import DaoXML from '../template-method/dao-xml';
import DaoJSON from '../template-method/dao-json';
import DaoSQL from '../template-method/dao-sql';
import FactoryDao from '../factory/factory-dao';

export default class SingletonDao {
    private static instanceXML: DaoXML = null;
    private static instanceJSON: DaoJSON = null;
    private static instanceSQL: DaoSQL = null;

    public static getInstanceXML(): DaoXML {
        if (!this.instanceXML) {
            this.instanceXML = FactoryDao.creerInstance(DaoXML.name);
        }
        return this.instanceXML;
    }

    public static getInstanceJSON(): DaoJSON {
        if (!this.instanceJSON) {
            this.instanceJSON = FactoryDao.creerInstance(DaoJSON.name);
        }
        return this.instanceJSON;
    }

    public static getInstanceSQL(): DaoSQL {
        if (!this.instanceSQL) {
            this.instanceSQL = FactoryDao.creerInstance(DaoSQL.name);
        }
        return this.instanceSQL;
    }
}
