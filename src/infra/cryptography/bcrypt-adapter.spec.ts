import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'
/*
const makeSut = (): SutTypes => {
  const salt = 12
  const sut = new BcryptAdapter(salt)
  return {
    sut
  }
} */

describe('Bcrypt adapter', () => {
  it('should call bcrypt with correct value', async () => {
    // const { sut } = makeSut()
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
})
