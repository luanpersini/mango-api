import { Encrypter, Decrypter } from '@/data/protocols'

import jwt from 'jsonwebtoken'
import jwt2 from 'jsonwebtoken2'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (plaintext: string): Promise<string> {
    return jwt2.sign({ id: plaintext }, this.secret)
  }

  async decrypt (ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
