import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async convertToCapped (name: string): Promise<void> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }
    const isCapped = await this.client.db().collection(name).isCapped()
    if (!isCapped) {
      await this.client.db().command({ convertToCapped: name, size: 5242880 })
    }
  },

  async getCollection (name: string): Promise<Collection<any>> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map: (data: any): any => {
    const { _id, ...rest } = data
    return { ...rest, id: _id }
  }
  /* ,
  mapCollection: (collection: any[]): any[] => {
    return collection.map(c => MongoHelper.map(c))
  }
  */
}
