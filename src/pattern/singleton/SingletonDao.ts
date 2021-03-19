class SingletonDao extends FactoryDao {
  private static instance: SingletonDao = null;
  private static instanceXML: DaoXML = null;
  private static instanceJSON: DaoJSON = null;
  private static instanceSQL: DaoSQL = null;

  private constructor() {
    super();
  }

  public static getInstance(): SingletonDao {
    if (!this.instance) {
      this.instance = new SingletonDao();
    }
    return this.instance;
  }
  public static getDao(type: string) {}
}
